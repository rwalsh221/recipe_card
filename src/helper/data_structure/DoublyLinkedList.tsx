type ListItemNodeType = {
  id: string;
  position: number;
  currContent: string;
  prevContent: string;
  next: ListItemNodeType | null;
  prev: ListItemNodeType | null;
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

class DoublyLinkedList {
  head: ListItemNodeType | null;
  tail: ListItemNodeType | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(id: string, position: number, content: string) {
    const newNode = new Node(id, position, content);
    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null || this.tail === null) {
      return undefined;
    }
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      (this.tail as ListItemNodeType).next = null;
      temp.prev = null;
    }
    this.length -= 1;
    return temp;
  }

  shift() {
    if (this.head === null || this.tail === null) {
      return undefined;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      (this.head as ListItemNodeType).prev = null;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }

  getLength() {
    return this.length;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }

    const mid = Math.floor(this.length / 2);
    let temp;
    if (index < mid) {
      temp = this.head;
      for (let i = 0; i < mid; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length; i > mid; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  update(index: number, content: string) {
    const nodeAtIndex = this.get(index);

    if (nodeAtIndex) {
      nodeAtIndex.currContent = content;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const pre = this.get(index - 1);
    const temp = pre.next;

    pre.next = temp?.next;
    temp?.next?.prev = pre;

    temp.next = null;
    temp?.prev = null;

    this.length -= 1;

    return temp;
  }

  swap(node1: ListItemNodeType, node2: ListItemNodeType) {
    node1.next = node2.next;
    node2.next = node1;

    node2.prev = node1.prev;
    node1.prev = node2;
  }

  increaseOrder(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return false;
    }

    const node1 = this.get(index);
    const node2 = node1.next;

    this.swap(node1, node2);

    node1?.position -= 1;
    node2?.position += 1;

    if (this.head === node1) {
      this.head = node2;
    }

    return this;
  }

  decreaseOrder(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === this.length - 1) {
      return false;
    }

    const node1 = this.get(index);
    const node2 = node1.next;

    this.swap(node1, node2);

    node1?.position += 1;
    node2?.position -= 1;

    if (node2 === this.tail) {
      this.tail = node1;
    }

    return this;
  }
}

export default DoublyLinkedList;
