import {LinkedList} from '../linked-list/linked-list';

export class Queue<T> {
  private data: LinkedList = new LinkedList<T>();

  get size(): number {
    return this.data.size;
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
