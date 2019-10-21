export class Stack<T> {
  public readonly data: object = {};

  get size(): number {
    return this._size;
  }
  private _size: number = 0;

  public push(value: T): T {
    this.data[this.size] = value;
    this._size++;
    return value;
  }

  public pop(): T {
    const value = this.peek();

    if (this._size > 0) {
      delete this.data[this._size - 1];
      this._size--;
    }
    return value;
  }

  public peek(): T {
    return this.data[this.size - 1];
  }

  public toString(callback: (value: T) => string = (v: T) => String(v)):
      string {
    let str = '';
    let i = 0;

    while (i < this._size) {
      if (i > 0) {
        str += ',';
      }
      str += callback(this.data[i]);
      i++;
    }
    return str;
  }
}
