export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString(): string {
    let result = this.val.toString();
    let node: ListNode | null = this.next;
    while (node) {
      result += ',' + node.val;
      node = node.next;
    }
    return result;
  }
}
