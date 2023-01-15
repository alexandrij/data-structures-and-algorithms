import { swapPairs } from './swap-nodes-in-pairs';
import { ListNode } from './utils/linked-list';

describe('swap nodes in pairs', () => {
  it('an even number of nodes should be swapped', () => {
    const head = swapPairs([1, 2, 3, 4].reduceRight((tail: ListNode | null, val) => new ListNode(val, tail), null));
    expect(head && head.toString()).toBe('2,1,4,3');
  });

  it('an odd number of nodes must be swapped', () => {
    const head = swapPairs([1, 2, 3, 4, 5].reduceRight((tail: ListNode | null, val) => new ListNode(val, tail), null));
    expect(head && head.toString()).toBe('2,1,4,3,5');
  });

  it('the nodes of the empty list should be swapped', () => {
    const head = swapPairs([].reduceRight((tail: ListNode | null, val) => new ListNode(val, tail), null));
    expect(head).toBe(null);
  });

  it('the size of the list is one', () => {
    const head = swapPairs([1].reduceRight((tail: ListNode | null, val) => new ListNode(val, tail), null));
    expect(head).toBe('1');
  });
});
