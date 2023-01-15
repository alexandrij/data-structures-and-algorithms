export interface LinkedNode<T> {
  next?: LinkedNode<T>;
  value: T;
}

export class LinkedList<T> {
  get head(): LinkedNode<T> | undefined {
    return this._head;
  }
  private _head?: LinkedNode<T>;

  get tail(): LinkedNode<T> | undefined {
    return this._tail;
  }
  private _tail?: LinkedNode<T>;

  get size(): number {
    return this._size;
  }
  private _size = 0;

  public add(value: T): void {
    const node: LinkedNode<T> = {
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
    this._tail = node;
    this._size++;
  }

  public remove(value: T): LinkedNode<T> | undefined {
    let removedNode: LinkedNode<T> | undefined;
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

    this._size--;

    if (this._tail === removedNode) {
      this._tail = currentNode.next;
    }

    return removedNode;
  }

  public removeHead(): LinkedNode<T> | undefined {
    const removedHead = this._head;

    if (removedHead) {
      this._head = removedHead.next;
      this._size--;

      if (removedHead === this._tail) {
        this._tail = removedHead.next;
      }
    }
    return removedHead;
  }

  public toString(callback: (value: T) => string = (v: T) => String(v)): string {
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
