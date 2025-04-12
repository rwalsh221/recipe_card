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
  return?: ListItemNodeType | boolean;
  cachedNode?: ListItemNodeType;
};

type FormModalReducerAction = {
  type:
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
    | 'renderComponent';
  payload?: {
    node?: {
      id: string;
      position: number;
      content: string;
    };
    updateContent?: string;
    index?: number;
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

const FormModalReducer = (
  state: FormModalState,
  action: FormModalReducerAction
) => {
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

  switch (type) {
    case 'print': {
      if (state.head === null || state.tail === null) {
        return undefined;
      }

      const arr = [];
      let temp: ListItemNodeType | null = state.head;

      while (temp) {
        arr.push(
          `PRE NODE: ${temp.prev ? temp.prev.id : null} :: NODE: ${temp.id}: P${
            temp.position
          } :: NEXT NODE: ${temp.next ? temp.next.id : null}`
        );
        temp = temp.next;
      }
      return arr;
    }
    // **** PUSH ******************************************************************
    case 'push': {
      if (!action.payload?.node) {
        return;
      }
      const { id, position, content } = action.payload.node;
      const newNode = new Node(id, position, content);
      const stateCopy = structuredClone(state);
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
    }
    // **** POP ******************************************************************
    case 'pop': {
      const updatedState = pop();
      return { ...updatedState };
    }
    // **** Shift ******************************************************************
    case 'shift': {
      const updatedState = shift();
      return { ...updatedState };
    }
    case 'get': {
      if (action.payload?.index === undefined) {
        return { ...state, return: undefined };
      }
      const node = getNode(action.payload?.index);
      return { ...state, return: node };
    }
    // **** UPDATE ******************************************************************
    case 'update': {
      // need to chace node
      if (
        action.payload?.index === undefined ||
        action.payload.updateContent === undefined
      ) {
        return { ...state, return: undefined };
      }
      const nodeAtIndex = getNode(action.payload.index);

      if (nodeAtIndex) {
        nodeAtIndex.currContent = action.payload?.updateContent;
        return { ...state, return: true };
      }
      return { ...state, return: false };
    }
    // **** REMOVE ******************************************************************
    case 'remove': {
      if (action.payload?.index === undefined) {
        return { ...state, return: undefined };
      }

      const { index } = action.payload;

      const stateCopy = structuredClone(state);

      if (index < 0 || index >= stateCopy.length) {
        return { ...stateCopy, return: undefined };
      }
      if (index === 0) {
        const updatedState = shift();
        return { ...updatedState };
      }
      if (index === stateCopy.length - 1) {
        const updatedState = pop();
        return { ...updatedState };
      }

      const pre = getNode(index - 1, stateCopy);

      if (!pre) {
        return { state, return: undefined };
      }

      const temp = pre.next as ListItemNodeType;

      pre.next = temp.next;
      (temp.next as ListItemNodeType).prev = pre;

      temp.next = null;
      temp.prev = null;

      stateCopy.length -= 1;

      return { ...stateCopy, return: temp };
    }
    // **** INCREASE ORDER ******************************************************************
    case 'increaseOrder': {
      if (action.payload?.index === undefined) {
        return { ...state, return: undefined };
      }
      const { index } = action.payload;

      const stateCopy = structuredClone(state);

      if (index < 0 || index >= stateCopy.length) {
        return { ...stateCopy, return: false };
      }
      if (index === 0) {
        return { ...stateCopy, return: false };
      }

      const node1 = getNode(index, stateCopy);

      if (!node1) {
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

      return { ...stateCopy, return: true };
    }
    // **** DECREASE ORDER ******************************************************************
    case 'decreaseOrder': {
      if (action.payload?.index === undefined) {
        return { ...state, return: undefined };
      }
      const { index } = action.payload;

      const stateCopy = structuredClone(state);

      if (index < 0 || index >= stateCopy.length) {
        return { ...stateCopy, return: false };
      }
      if (index === stateCopy.length - 1) {
        return { ...stateCopy, return: false };
      }

      const node1 = getNode(index, stateCopy);
      if (!node1) {
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

      return { ...stateCopy, return: true };
    }
    default:
      return state;
  }
};

export default FormModalReducer;
