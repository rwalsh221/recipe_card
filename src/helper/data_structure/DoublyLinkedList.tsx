type ListItemNodeType = {
  id: string;
  position: number;
  currContent: string;
  prevContent: string;
};

class Node implements ListItemNodeType {
  id: string;
  position: number;
  currContent: string;
  prevContent: string;
  constructor(id: string, position: number, content: string) {
    this.id = id;
    this.position = position;
    this.currContent = content;
    this.prevContent = content;
  }
}

class DoublyLinkedList {
  head: ListItemNodeType | null;
  tail: ListItemNodeType | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default DoublyLinkedList;
