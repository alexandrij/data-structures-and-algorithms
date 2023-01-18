import { TreeNode } from './utils/tree-node';

function postorderTraversal(root: TreeNode | null, results: number[] = []): number[] {
  if (!root) return results;

  if (root.left) {
    postorderTraversal(root.left, results);
  }
  if (root.right) {
    postorderTraversal(root.right, results);
  }
  results.push(root.val);
  return results;
}

const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postorderTraversal(tree1));

const tree2 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7)),
);
console.log(postorderTraversal(tree2));
