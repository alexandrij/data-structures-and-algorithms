export class Stack<T> {
  public readonly data: object = {};

  get length(): number {
    return this._length;
  }
  private _length: number = 0;

  public push(value: T): void {
    this.data[this.length] = value;
    this._length++;
  }

  public pop(): T|undefined {
    let value: T|undefined;

    if (this._length > 0) {
      this._length--;
      value = this.data[this._length];
    }
    return value;
  }

  public peek(): T|undefined {
    return this.data[this.length - 1];
  }

  public toString(callback: (value: T) => string = (v: T) => String(v)):
      string {
    let str = '';
    let i = 0;

    while (i < this._length) {
      if (i > 0) {
        str += ',';
      }
      str += callback(this.data[i]);
      i++;
    }
    return str;
  }
}
