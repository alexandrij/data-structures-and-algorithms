import 'jasmine';
import {LinkedList} from './linked-list';

describe('Data structure: LinkedList', () => {
  it('should add node to linked list', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.size).toBe(3);
    expect(list.head && list.head.value).toBe(1);
    expect(list.toString()).toBe('1,2,3');
  });

  it('should remove node by value from linked list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.size).toBe(3);

    list.remove(3);
    expect(list.size).toBe(2);

    list.remove(1);
    expect(list.size).toBe(1);
    expect(list.head && list.head.value).toBe(2);

    list.remove(2);
    expect(list.size).toBe(0);
    // expect(list.head).toBeUndefined();
  });
});
