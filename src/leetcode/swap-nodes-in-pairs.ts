import { ListNode } from './utils/linked-list';

const swap = (node: ListNode): ListNode | null => {
  if (!node.next) {
    return node;
  }

  const swapped = node.next;
  node.next = node.next.next;
  swapped.next = node;
  return swapped;
};

export const swapPairs = (head: ListNode | null): ListNode | null => {
  if (!head || !head?.next) {
    return head;
  }

  const newHead = swap(head);
  let node = newHead?.next;

  while (node?.next?.next) {
    node.next = swap(node.next);
    node = node.next && node.next.next;
  }

  return newHead;
};

// console.log(swapPairs([1, 2, 3, 4].reduceRight((tail: ListNode | null, val) => new ListNode(val, tail), null))); // [2, 1, 4, 3]
// console.log(swapPairs([].reduceRight((tail: ListNode | null, val: number) => new ListNode(val, tail), null))); // []
// console.log(swapPairs([1].reduceRight((tail: ListNode | null, val: number) => new ListNode(val, tail), null))); // [1]
// console.log(swapPairs([1, 2, 3].reduceRight((tail: ListNode | null, val: number) => new ListNode(val, tail), null))); // [2, 1, 3]
// console.log(
//   swapPairs([1, 2, 3, 4, 5, 6].reduceRight((tail: ListNode | null, val: number) => new ListNode(val, tail), null)),
// ); // [2, 1, 4, 3, 6, 5]
// console.log(
//   swapPairs([1, 2, 3, 4, 5].reduceRight((tail: ListNode | null, val: number) => new ListNode(val, tail), null)),
// ); // [2, 1, 4, 3, 5]
