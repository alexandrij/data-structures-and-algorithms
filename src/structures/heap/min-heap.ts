import {Heap} from './heap';

export class MaxHeap<T> extends Heap<T> {
  protected pairIsInCorrectOrder(parent: T, child: T): boolean {
    return parent < child;
  }
}
