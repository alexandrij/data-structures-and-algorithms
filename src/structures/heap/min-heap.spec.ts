import 'jasmine';
import {MinHeap} from './min-heap';

describe('Data structure: MinHeap', () => {
  it('should add, remove and poll element to heap', () => {
    const heap = new MinHeap<number>();

    heap.add(1);
    heap.add(2);
    expect(heap.toString()).toBe('1,2');

    heap.add(3);
    heap.add(4);
    expect(heap.toString()).toBe('1,2,3,4');

    heap.add(5);
    heap.add(6);
    expect(heap.toString()).toBe('1,2,3,4,5,6');

    heap.poll();
    expect(heap.toString()).toBe('2,4,3,6,5');

    heap.add(5);
    expect(heap.toString()).toBe('2,4,3,6,5,5');
    heap.add(6);
    expect(heap.toString()).toBe('2,4,3,6,5,5,6');

    heap.remove(6);
    expect(heap.toString()).toBe('2,4,3,5,5');

    heap.remove(5);
    expect(heap.toString()).toBe('2,4,3');
  });
});
