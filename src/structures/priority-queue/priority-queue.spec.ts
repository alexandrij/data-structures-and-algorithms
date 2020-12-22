import 'jasmine';
import {PriorityQueue} from './priority-queue';

describe('Data structure: PriorityQueue', () => {
  it('should enqueue, dequeue element to queue', () => {
    const queue = new PriorityQueue<number>();
    queue.enqueue(8);
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
    queue.enqueue(4);
    queue.enqueue(4);

    expect(queue.size).toBe(6);
    expect(queue.peek()).toBe(4);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(8);

    expect(queue.size).toBe(0);

    expect(queue.dequeue()).toBeUndefined();
  });
});
