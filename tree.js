/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let sum = this.root.val;

    function sumHelper(node) {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) {
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;

    function countHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          count += 1;
        }
        if (child.children.length > 0) {
          countHelper(child);
        }
      }
    }
    countHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;

    if (this.root.val > lowerBound) {
      count += 1;
    }

    function numHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count += 1;
        }
        if (child.children.length > 0) {
          numHelper(child);
        }
      }
    }
    numHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
