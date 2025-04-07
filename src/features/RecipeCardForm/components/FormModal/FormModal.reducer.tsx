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
  return?: ListItemNodeType;
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
    id: string;
    position: number;
    content: string;
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
      if (!action.payload) {
        return;
      }
      const { id, position, content } = action.payload;
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
    }
    case 'shift': {
      const stateCopy = { ...state };
      if (stateCopy.head === null || stateCopy.tail === null) {
        return undefined;
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
      //   this.length -= 1;
      return { ...stateCopy, length: (state.length += 1) };
    }
    default:
      return state;
  }
};

export default FormModalReducer;
