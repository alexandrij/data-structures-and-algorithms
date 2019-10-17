import {Stack} from './stack';

describe('Data structures: Stack', () => {
  it('should peek element from stack', () => {
    const stack = new Stack<number>();
    expect(stack.peek()).toBeUndefined();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it('should push element to stack', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.length).toBe(3);
    expect(stack.toString()).toBe('1,2,3');
  });

  it('should pop element from stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();

    expect(stack.toString()).toBe('');
    expect(stack.peek()).toBeUndefined();
    expect(stack.length).toBe(0);
  });
});
