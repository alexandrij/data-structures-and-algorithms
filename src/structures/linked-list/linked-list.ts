export interface LinkedNode {
  next?: LinkedNode;
  value: any;
}

export class LinkedList {
  get head(): LinkedNode|undefined {
    return this._head;
  }
  private _head?: LinkedNode;

  get length(): number {
    return this._length;
  }
  private _length: number = 0;

  public add(value: any): void {
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

  public remove(value: any): LinkedNode|undefined {
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

  public toArray(): any {
    const values: any[] = [];
    let currentNode = this._head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
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
