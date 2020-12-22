import 'jasmine';
import {MaxHeap} from './max-heap';

describe('Data structure: MaxHeap', () => {
  it('should add, remove and poll element to heap', () => {
    const heap = new MaxHeap<number>();

    heap.add(1);
    heap.add(2);
    expect(heap.toString()).toBe('2,1');

    heap.add(3);
    heap.add(4);
    expect(heap.toString()).toBe('4,3,2,1');

    heap.add(5);
    heap.add(6);
    expect(heap.toString()).toBe('6,4,5,1,3,2');

    heap.poll();
    expect(heap.toString()).toBe('5,4,2,1,3');

    heap.add(5);
    heap.add(6);
    expect(heap.toString()).toBe('6,4,5,1,3,2,5');

    heap.remove(6);
    expect(heap.toString()).toBe('5,4,5,1,3,2');

    heap.remove(5);
    expect(heap.toString()).toBe('4,3,2,1');
  });
});
