import { LinkedList } from '../linked-list/linked-list';

export class Queue<T> {
  private _data: LinkedList<T> = new LinkedList<T>();

  get size(): number {
    return this._data.size;
  }

  public enqueue(value: T) {
    this._data.add(value);
  }

  public dequeue(): T | undefined {
    const node = this._data.removeHead();
    return node ? node.value : undefined;
  }

  public toString(callback?: (value: T) => string): string {
    return this._data.toString(callback);
  }
}
