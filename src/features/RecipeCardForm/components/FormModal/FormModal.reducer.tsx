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

  const getNode = (index: number) => {
    console.log(index);
    if (state.head === null || state.tail === null) {
      return undefined;
    }
    if (index < 0 || index >= state.length) {
      return undefined;
    }
    if (index === 0) {
      return state.head;
    }
    if (index === state.length - 1) {
      return state.tail;
    }

    const mid = Math.floor(state.length / 2);
    console.log(mid);
    let temp: ListItemNodeType;
    if (index <= mid) {
      temp = state.head;
      for (let i = 0; i < index; i++) {
        console.log(temp);
        temp = temp.next as ListItemNodeType;
      }
    } else {
      temp = state.tail;
      for (let i = state.length - 1; i > index; i--) {
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
    console.log(temp.prev);
    if (stateCopy.length === 1) {
      stateCopy.head = null;
      stateCopy.tail = null;
    } else {
      stateCopy.tail = temp.prev;
      console.log(stateCopy.tail);
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
      console.log(stateCopy);
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
    case 'update': {
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

      const pre = getNode(index - 1);

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
    default:
      return state;
  }
};

export default FormModalReducer;
