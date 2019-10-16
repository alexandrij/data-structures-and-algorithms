import {LinkedList} from '../linked-list/linked-list';

export default class Queue<T> {
  public readonly data: LinkedList = new LinkedList();

  get length(): number {
    return this.data.length;
  }

  public enqueue(value: T) {
    this.data.add(value);
  }

  public dequeue(): T|undefined {
    const node = this.data.removeHead();
    return node ? node.value : undefined;
  }

  public toString(callback?: ((value: T) => string)): string {
    return this.data.toString(callback);
  }
}
