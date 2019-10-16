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

  public remove(value: any): void {
    let previuosNode: LinkedNode;
    let currentNode = this._head;

    if (!currentNode) {
      return;
    }

    if (currentNode.value === value) {
      this._head = currentNode.next;
    } else {
      while (currentNode.next) {
        previuosNode = currentNode;
        currentNode = currentNode.next;

        if (currentNode.value === value) {
          previuosNode.next = currentNode.next;
        }
      }
    }
    this._length--;
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

  public toString(): string {
    return this.toArray().toString();
  }
}
