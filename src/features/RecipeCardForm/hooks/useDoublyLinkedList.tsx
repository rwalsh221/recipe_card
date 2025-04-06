import { useState } from 'react';

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
//  id: string,
//   position: number,
//   content: string
function useDoublyLinkedList(): {} {
  //   head: ListItemNodeType | null;
  //   tail: ListItemNodeType | null;
  //   length: number;
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }

  const [dll, setDll] = useState();
  console.log(dll);

  //   print() {
  //     if (this.head === null || this.tail === null) {
  //       return undefined;
  //     }

  //     const arr = [];
  //     let temp = this.head;

  //     while (temp.next) {
  //       arr.push(
  //         `PRE NODE: ${temp.prev ? temp.prev.id : null} :: NODE: ${temp.id}: P${
  //           temp.position
  //         } :: NEXT NODE: ${temp.next.id}`
  //       );
  //       temp = temp.next;
  //     }

  //     arr.push(
  //       `PRE NODE: ${this.tail.prev ? this.tail.prev.id : null} :: NODE: ${
  //         this.tail.id
  //       }: P${this.tail.position} :: NEXT NODE: ${
  //         this.tail.next ? this.tail.next.id : null
  //       }`
  //     );
  //     return arr;
  //   }

  this.push = function (id: string, position: number, content: string) {
    const newNode = new Node(id, position, content);

    let head: Node = dll;
    let temp = head;
    let count = 1;

    console.log(head);
    console.log(temp);

    if (head === undefined) {
      console.log(null);
      head = newNode;
    } else {
      while (temp.next) {
        temp = temp.next;
        count++;
      }
      temp.next = newNode;
    }
    // this.length += 1;
    setDll(head);
    console.log(dll);
    console.log(count);
    return dll;
  };

  this.returnDll = function () {
    return dll;
  };

  //   pop() {
  //     if (this.head === null || this.tail === null) {
  //       return undefined;
  //     }
  //     const temp = this.tail;
  //     if (this.length === 1) {
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       this.tail = temp.prev;
  //       (this.tail as ListItemNodeType).next = null;
  //       temp.prev = null;
  //     }
  //     this.length -= 1;
  //     return temp;
  //   }

  //   shift() {
  //     if (this.head === null || this.tail === null) {
  //       return undefined;
  //     }
  //     const temp = this.head;
  //     if (this.length === 1) {
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       this.head = temp.next;
  //       (this.head as ListItemNodeType).prev = null;
  //       temp.next = null;
  //     }
  //     this.length -= 1;
  //     return temp;
  //   }

  //   getLength() {
  //     return this.length;
  //   }

  //   get(index: number) {
  //     console.log(index);
  //     if (this.head === null || this.tail === null) {
  //       return undefined;
  //     }
  //     if (index < 0 || index >= this.length) {
  //       return undefined;
  //     }
  //     if (index === 0) {
  //       return this.head;
  //     }
  //     if (index === this.length - 1) {
  //       return this.tail;
  //     }

  //     const mid = Math.floor(this.length / 2);
  //     console.log(mid);
  //     let temp: ListItemNodeType;
  //     if (index <= mid) {
  //       temp = this.head;
  //       for (let i = 0; i < index; i++) {
  //         console.log(temp);
  //         temp = temp.next as ListItemNodeType;
  //       }
  //     } else {
  //       temp = this.tail;
  //       for (let i = this.length - 1; i > index; i--) {
  //         temp = temp.prev as ListItemNodeType;
  //       }
  //     }

  //     return temp;
  //   }

  //   getNodeById(id: string) {
  //     if (this.head === null || this.tail === null) {
  //       return false;
  //     }

  //     let temp = this.head;
  //     while (temp.id !== id) {
  //       console.log('while **************************************************');
  //       console.log(id, temp.id);
  //       temp = temp.next;
  //     }

  //     return temp;
  //   }

  //   update(index: number, content: string) {
  //     const nodeAtIndex = this.get(index);

  //     if (nodeAtIndex) {
  //       nodeAtIndex.currContent = content;
  //       return true;
  //     }
  //     return false;
  //   }

  //   remove(index: number) {
  //     if (index < 0 || index >= this.length) {
  //       return false;
  //     }
  //     if (index === 0) {
  //       return this.shift();
  //     }
  //     if (index === this.length - 1) {
  //       return this.pop();
  //     }

  //     const pre = this.get(index - 1);
  //     if (!pre) {
  //       return undefined;
  //     }

  //     if (pre.next) {
  //       const temp = pre.next;

  //       pre.next = temp?.next;
  //       temp.next.prev = pre;

  //       temp.next = null;
  //       temp.prev = null;

  //       this.length -= 1;

  //       return temp;
  //     }
  //   }

  //   swap(node1: ListItemNodeType, node2: ListItemNodeType) {
  //     console.log('swap', node1, node2);
  //     if (node1 !== this.tail) {
  //       node1.next.prev = node2;
  //     }
  //     node2.next = node1.next;
  //     node1.next = node2;

  //     if (node2 !== this.head) {
  //       node2.prev.next = node1;
  //     }
  //     node1.prev = node2.prev;
  //     node2.prev = node1;
  //     console.log('swap', node1, node2);
  //   }

  //   increaseOrder(index) {
  //     if (index < 0 || index >= this.length) {
  //       return false;
  //     }
  //     if (index === 0) {
  //       return false;
  //     }

  //     const node1 = this.get(index);
  //     console.log(node1);
  //     const node2 = node1.prev;

  //     this.swap(node1, node2);

  //     node1.position -= 1;
  //     node2.position += 1;

  //     if (this.head === node2) {
  //       this.head = node1;
  //     }
  //     if (this.tail === node1) {
  //       this.tail = node2;
  //     }

  //     return this;
  //   }

  //   decreaseOrder(index) {
  //     if (index < 0 || index >= this.length) {
  //       return false;
  //     }
  //     if (index === this.length - 1) {
  //       return false;
  //     }

  //     const node1 = this.get(index);
  //     if (!node1) {
  //       return false;
  //     }
  //     const node2 = node1.next;

  //     this.swap(node2, node1);

  //     node1.position += 1;
  //     node2.position -= 1;

  //     if (node1 === this.head) {
  //       this.head = node2;
  //     }

  //     if (this.tail === node2) {
  //       this.tail = node1;
  //     }

  //     return this;
  //   }

  //   renderComponent(Component) {
  //     if (this.head === null || this.tail === null) {
  //       return undefined;
  //     }

  //     const arr = [];
  //     let temp = this.head;

  //     while (temp.next) {
  //       // ?? || temp === this.tail
  //       arr.push(<Component {...temp} />);
  //       temp = temp.next;
  //     }

  //     arr.push(<Component {...this.tail} />);
  //     return arr;
  //   }
}

export default useDoublyLinkedList;
