import Queue from './queue';

describe('Data structure: Queue', () => {
  it('should enqueue value to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toBe(3);
    expect(queue.toString()).toBe('1,2,3');
  });

  it('should dequeue from queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });
});
