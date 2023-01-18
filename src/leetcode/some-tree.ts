class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  const pStack: (TreeNode | null)[] = [p];
  const qStack: (TreeNode | null)[] = [q];

  while (pStack.length > 0 && qStack.length > 0) {
    const pNode = pStack.pop();
    const qNode = qStack.pop();

    if (!pNode && !qNode) {
      continue;
    } else if (!pNode || !qNode) {
      return false;
    } else if (pNode.val !== qNode.val) {
      return false;
    }
    
    pStack.push(pNode.left);
    pStack.push(pNode.right);

    qStack.push(qNode.left);
    qStack.push(qNode.right);
  }
  return pStack.length === qStack.length;
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  } else if (p?.val !== q?.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(
  isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(1, new TreeNode(2), new TreeNode(3))),
);
console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2, new TreeNode(2.1)), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(3.1))),
  ),
);
console.log(isSameTree(new TreeNode(1, new TreeNode(2)), new TreeNode(1, null, new TreeNode(2))));
