export interface LinkedNode<T = any> {
  next?: LinkedNode<T>;
  value: T;
}

export class LinkedList<T = any> {
  get head(): LinkedNode|undefined {
    return this._head;
  }
  private _head?: LinkedNode;

  get length(): number {
    return this._length;
  }
  private _length: number = 0;

  public add(value: T): void {
    const node: LinkedNode = {
      next: undefined,
      value,
    };
    let parent = this._head;

    if (!parent) {
      this._head = node;
    } else {
      while (parent.next) {
        parent = parent.next;
      }
      parent.next = node;
    }
    this._length++;
  }

  public remove(value: T): LinkedNode|undefined {
    let removedNode: LinkedNode|undefined;
    let currentNode = this._head;

    if (!currentNode) {
      return;
    }

    if (currentNode.value === value) {
      removedNode = currentNode;
      this._head = currentNode.next;
    } else {
      while (currentNode.next && !removedNode) {
        if (currentNode.next.value === value) {
          removedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    this._length--;
    return removedNode;
  }

  public removeHead(): LinkedNode|undefined {
    const removedHead = this._head;

    if (removedHead) {
      this._head = removedHead.next;
      this._length--;
    }
    return removedHead;
  }

  public toString(callback: (value: any) => string = (v: any) => String(v)):
      string {
    let str = '';
    let i = 0;
    let currentNode = this._head;

    while (currentNode) {
      if (i > 0) {
        str += ',';
      }
      str += callback(currentNode.value);
      currentNode = currentNode.next;
      i++;
    }
    return str;
  }

}
