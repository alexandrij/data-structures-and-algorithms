import { TreeNode } from './utils/tree-node';

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack = [root];
  const results: number[] = [];
  let cur: TreeNode | undefined;

  while ((cur = stack.pop())) {
    results.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return results;
}

const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(tree1));

const tree2 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7)),
);
console.log(preorderTraversal(tree2));
