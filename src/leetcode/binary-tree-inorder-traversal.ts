/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function inorderInsert(node: TreeNode, results) {
  if (node.left) {
    inorderInsert(node.left, results);
  }
  results.push(node.val);
  if (node.right) {
    inorderInsert(node.right, results);
  }
  return results;
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  return inorderInsert(root, []);
}

const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(tree1));

const tree2 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1, new TreeNode(0)), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), null),
);
console.log(inorderTraversal(tree2));
