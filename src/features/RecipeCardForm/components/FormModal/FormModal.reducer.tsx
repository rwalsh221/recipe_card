type ListItemNodeType = {
  id: string;
  position: number;
  currContent: string;
  prevContent: string;
  next: ListItemNodeType | null;
  prev: ListItemNodeType | null;
};

type FormModalState = {
  head: ListItemNodeType | null;
  tail: ListItemNodeType | null;
  length: number;
  return?: ListItemNodeType | boolean | ListItemNodeType[] | null;
  cachedNode?: ListItemNodeType;
  nodeArr?: ListItemNodeType[];
};

type FormModalReducerAction = {
  type:
    | 'init'
    | 'print'
    | 'push'
    | 'pop'
    | 'shift'
    | 'getLength'
    | 'get'
    | 'getNodeById'
    | 'update'
    | 'remove'
    | 'swap'
    | 'increaseOrder'
    | 'decreaseOrder'
    | 'undoChanges';

  payload?: {
    node?: {
      id: string;
      position: number;
      content: string;
    };
    initArr?: { id: string; position: number; content: string }[];
    updateContent?: string;
    index?: number;
    nodeId?: string;
  };
};

class Node implements ListItemNodeType {
  id: string;
  position: number;
  currContent: string;
  prevContent: string;
  next: ListItemNodeType | null;
  prev: ListItemNodeType | null;
  constructor(id: string, position: number, content: string) {
    this.id = id;
    this.position = position;
    this.currContent = content;
    this.prevContent = content;
    this.next = null;
    this.prev = null;
  }
}

// NEED RESET CASE
// NEED SAVE CHNAGES TO PARENT STATE CASE
// GET BY ID

const FormModalReducer = (
  state: FormModalState,
  action: FormModalReducerAction
): FormModalState => {
  const { type } = action;

  const getNode = (index: number, inputState: FormModalState = state) => {
    if (inputState.head === null || inputState.tail === null) {
      return undefined;
    }
    if (index < 0 || index >= inputState.length) {
      return undefined;
    }
    if (index === 0) {
      return inputState.head;
    }
    if (index === inputState.length - 1) {
      return inputState.tail;
    }

    const mid = Math.floor(inputState.length / 2);

    let temp: ListItemNodeType;
    if (index <= mid) {
      temp = inputState.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next as ListItemNodeType;
      }
    } else {
      temp = inputState.tail;
      for (let i = inputState.length - 1; i > index; i--) {
        temp = temp.prev as ListItemNodeType;
      }
    }

    return temp;
  };

  const getNodeById = (nodeId: string, stateCopy: FormModalState) => {
    if (!nodeId) {
      return false;
    }

    if (stateCopy.head === null || stateCopy.tail === null) {
      return false;
    }

    let temp: ListItemNodeType | null = stateCopy.head;
    while (temp) {
      if (temp.id === nodeId) {
        break;
      }
      temp = temp.next;
    }

    return temp;
  };

  const push = (
    node: { id: string; position: number; content: string },
    stateCopy: FormModalState
  ) => {
    const { id, position, content } = node;
    const newNode = new Node(id, position, content);
    if (!stateCopy.head || !stateCopy.tail) {
      stateCopy.head = newNode;
      stateCopy.tail = newNode;
      stateCopy.length = 1;
    } else {
      stateCopy.tail.next = newNode;
      newNode.prev = stateCopy.tail;
      stateCopy.tail = newNode;
      stateCopy.length += 1;
    }
    //   stateCopy.length += 1;

    return { ...stateCopy };
  };

  const pop = () => {
    const stateCopy = structuredClone(state);
    if (!stateCopy.head || !stateCopy.tail) {
      return { ...stateCopy, return: undefined };
    }
    const temp = stateCopy.tail;

    if (stateCopy.length === 1) {
      stateCopy.head = null;
      stateCopy.tail = null;
    } else {
      stateCopy.tail = temp.prev;

      temp.prev = null;
      (stateCopy.tail as ListItemNodeType).next = null;
    }
    stateCopy.length -= 1;
    return { ...stateCopy, return: temp };
  };

  const shift = () => {
    const stateCopy = structuredClone(state);
    if (!stateCopy.head || !stateCopy.tail) {
      return { ...stateCopy, return: undefined };
    }
    const temp = stateCopy.head;
    if (stateCopy.length === 1) {
      stateCopy.head = null;
      stateCopy.tail = null;
    } else {
      stateCopy.head = temp.next;
      (stateCopy.head as ListItemNodeType).prev = null;
      temp.next = null;
    }
    stateCopy.length -= 1;
    return { ...stateCopy, return: temp };
  };

  const swapNode = (
    node1: ListItemNodeType,
    node2: ListItemNodeType,
    stateCopy: FormModalState
  ) => {
    if (node1 !== stateCopy.tail) {
      (node1.next as ListItemNodeType).prev = node2;
    }
    node2.next = node1.next;
    node1.next = node2;

    if (node2 !== stateCopy.head) {
      (node2.prev as ListItemNodeType).next = node1;
    }
    node1.prev = node2.prev;
    node2.prev = node1;
  };

  const returnNodes = (stateCopy: FormModalState) => {
    const nodeArr: ListItemNodeType[] = [];
    if (!stateCopy.head || !stateCopy.tail) {
      return nodeArr;
    }

    let temp: ListItemNodeType | null = stateCopy.head;
    while (temp) {
      nodeArr.push(temp);
      temp = temp.next;
    }

    return nodeArr;
  };

  const decreaseNodePosition = (node: ListItemNodeType) => {
    let temp: ListItemNodeType | null = node;

    while (temp) {
      temp.position = temp.position - 1;
      temp = temp.next;
    }
  };

  switch (type) {
    // **** INIT ******************************************************************
    case 'init': {
      if (!action.payload?.initArr) {
        return { ...state };
      }

      let initialState: FormModalState = {
        head: null,
        tail: null,
        length: 0,
        nodeArr: [],
      };

      action.payload.initArr.forEach(
        (el) => (initialState = push(el, initialState))
      );

      return { ...initialState, nodeArr: returnNodes(initialState) };
    }
    // case 'print': {
    //   if (state.head === null || state.tail === null) {
    //     return undefined;
    //   }

    //   const arr = [];
    //   let temp: ListItemNodeType | null = state.head;

    //   while (temp) {
    //     arr.push(
    //       `PRE NODE: ${temp.prev ? temp.prev.id : null} :: NODE: ${temp.id}: P${
    //         temp.position
    //       } :: NEXT NODE: ${temp.next ? temp.next.id : null}`
    //     );
    //     temp = temp.next;
    //   }
    //   return arr;
    // }
    // **** PUSH ******************************************************************
    case 'push': {
      const stateCopy = structuredClone(state);
      if (!action.payload?.node) {
        return { ...stateCopy, return: false };
      }
      const updatedState = push(action.payload.node, stateCopy);
      return { ...updatedState, nodeArr: returnNodes(updatedState) };
    }
    // **** POP ******************************************************************
    case 'pop': {
      const updatedState = pop();
      return { ...updatedState, nodeArr: returnNodes(updatedState) };
    }
    // **** Shift ******************************************************************
    case 'shift': {
      const updatedState = shift();
      return { ...updatedState, nodeArr: returnNodes(updatedState) };
    }
    // **** GET ******************************************************************
    case 'get': {
      if (action.payload?.index === undefined) {
        return { ...state, return: undefined };
      }
      const node = getNode(action.payload?.index);
      return { ...state, return: node };
    }
    // **** GET NODE BY ID ******************************************************************
    case 'getNodeById': {
      const stateCopy = structuredClone(state);
      if (!action.payload?.nodeId) {
        return { ...stateCopy, return: false };
      }

      const { nodeId } = action.payload;

      if (stateCopy.head === null || stateCopy.tail === null) {
        return { ...stateCopy, return: false };
      }

      let temp: ListItemNodeType | null = stateCopy.head;
      while (temp) {
        if (temp.id === nodeId) {
          break;
        }
        temp = temp.next;
      }

      return { ...stateCopy, return: temp };
    }
    // **** UPDATE ******************************************************************
    case 'update': {
      // need to chace node
      // need to get node by id
      const stateCopy = structuredClone(state);
      if (
        action.payload?.nodeId === undefined ||
        action.payload.updateContent === undefined
      ) {
        return { ...state, return: undefined };
      }

      if (stateCopy.cachedNode?.id === action.payload.nodeId) {
        stateCopy.cachedNode.currContent = action.payload.updateContent;
        return { ...stateCopy };
      }

      const nodeAtIndex = getNodeById(action.payload.nodeId, stateCopy);

      if (nodeAtIndex) {
        nodeAtIndex.currContent = action.payload?.updateContent;
        return {
          ...stateCopy,
          return: true,
          nodeArr: returnNodes(stateCopy),
          cachedNode: nodeAtIndex,
        };
      }
      return { ...stateCopy, return: false };
    }
    // **** REMOVE ******************************************************************
    case 'remove': {
      if (!action.payload?.nodeId) {
        return { ...state, return: false };
      }

      const { nodeId } = action.payload;
      const stateCopy = structuredClone(state);
      const node = getNodeById(nodeId, stateCopy);

      if (!node) {
        return { ...stateCopy, return: false };
      }

      if (node === stateCopy.head) {
        const updatedState = shift();

        if (updatedState.length > 0) {
          decreaseNodePosition(updatedState.head as ListItemNodeType);
        }

        return { ...updatedState, nodeArr: returnNodes(updatedState) };
      }
      if (node === stateCopy.tail) {
        const updatedState = pop();
        return { ...updatedState, nodeArr: returnNodes(updatedState) };
      }

      const preNode = node.prev as ListItemNodeType;

      preNode.next = node.next;
      (node.next as ListItemNodeType).prev = preNode;

      node.next = null;
      node.prev = null;

      decreaseNodePosition(preNode.next as ListItemNodeType);
      stateCopy.length -= 1;
      return { ...stateCopy, return: node, nodeArr: returnNodes(stateCopy) };
    }
    // **** INCREASE ORDER ******************************************************************
    case 'increaseOrder': {
      if (!action.payload?.nodeId) {
        return { ...state, return: false };
      }
      const { nodeId } = action.payload;

      const stateCopy = structuredClone(state);

      const node1 = getNodeById(nodeId, stateCopy);
      console.log(node1);

      if (!node1) {
        return { ...stateCopy, return: false };
      }
      if (node1 === stateCopy.head) {
        return { ...stateCopy, return: false };
      }

      const node2 = node1.prev as ListItemNodeType;

      swapNode(node1, node2, stateCopy);

      node1.position -= 1;
      node2.position += 1;

      if (stateCopy.head === node2) {
        stateCopy.head = node1;
      }
      if (stateCopy.tail === node1) {
        stateCopy.tail = node2;
      }

      return { ...stateCopy, return: true, nodeArr: returnNodes(stateCopy) };
    }
    // **** DECREASE ORDER ******************************************************************
    case 'decreaseOrder': {
      if (!action.payload?.nodeId) {
        return { ...state, return: undefined };
      }
      const { nodeId } = action.payload;

      const stateCopy = structuredClone(state);

      const node1 = getNodeById(nodeId, stateCopy);

      if (!node1) {
        return { ...stateCopy, return: false };
      }
      if (node1 === stateCopy.tail) {
        return { ...stateCopy, return: false };
      }

      const node2 = node1.next as ListItemNodeType;

      swapNode(node2, node1, stateCopy);

      node1.position += 1;
      node2.position -= 1;

      if (node1 === stateCopy.head) {
        stateCopy.head = node2;
      }

      if (stateCopy.tail === node2) {
        stateCopy.tail = node1;
      }

      return { ...stateCopy, return: true, nodeArr: returnNodes(stateCopy) };
    }
    case 'undoChanges': {
      const stateCopy = structuredClone(state);
      if (action.payload?.nodeId === undefined) {
        return { ...state, return: undefined };
      }

      if (stateCopy.cachedNode?.id === action.payload.nodeId) {
        stateCopy.cachedNode.currContent = stateCopy.cachedNode.prevContent;
        return { ...stateCopy };
      }

      const nodeAtIndex = getNodeById(action.payload.nodeId, stateCopy);

      if (nodeAtIndex) {
        nodeAtIndex.currContent = nodeAtIndex.prevContent;
        return {
          ...stateCopy,
          return: true,
          nodeArr: returnNodes(stateCopy),
          cachedNode: nodeAtIndex,
        };
      }
      return { ...stateCopy, return: false };
    }

    default:
      return state;
  }
};

export default FormModalReducer;
