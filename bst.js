class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      console.log(`Node with value ${newNode.value} already exists.`);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.removeNode(root.right, root.value);
    }
    return root;
  }

  min(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (root === null || root.value === value) {
      return root;
    }

    if (value < root.value) {
      return this.searchNode(root.left, value);
    } else {
      return this.searchNode(root.right, value);
    }
  }

  // In-order traversal
  inOrderTraversal() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  inOrderTraversalNode(node, result) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  // Pre-order traversal
  preOrderTraversal() {
    const result = [];
    this.preOrderTraversalNode(this.root, result);
    return result;
  }

  preOrderTraversalNode(node, result) {
    if (node !== null) {
      //dallimi
      result.push(node.value);
      this.preOrderTraversalNode(node.left, result);
      this.preOrderTraversalNode(node.right, result);
    }
  }

  // Post-order traversal
  postOrderTraversal() {
    const result = [];
    this.postOrderTraversalNode(this.root, result);
    return result;
  }

  postOrderTraversalNode(node, result) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, result);
      this.postOrderTraversalNode(node.right, result);
      //dallimi
      result.push(node.value);
    }
  }
}

const bst = new BinarySearchTree();
visualizeTree(bst.root);

function insertNode() {
  const nodeValueInput = document.getElementById("node-value");
  const value = parseInt(nodeValueInput.value);
  if (!isNaN(value)) {
    bst.insert(value);
    visualizeTree(bst.root);
  }
}

function removeNode() {
  const nodeValueInput = document.getElementById("node-value");
  const value = parseInt(nodeValueInput.value);
  if (!isNaN(value)) {
    bst.remove(value);
    visualizeTree(bst.root);
  }
}

function searchNode() {
  const searchValueInput = document.getElementById("search-value");
  const value = parseInt(searchValueInput.value);
  if (!isNaN(value)) {
    const result = bst.search(value);
    if (result) {
      document.getElementById(
        "traversal-result"
      ).value = `Node found: ${result.value}`;
    } else {
      document.getElementById("traversal-result").value = "Node not found";
    }
  }
}

function inOrderTraversal() {
  const result = bst.inOrderTraversal();
  document.getElementById(
    "traversal-result"
  ).value = `In-Order Traversal: ${result.join(", ")}`;
}

function preOrderTraversal() {
  const result = bst.preOrderTraversal();
  document.getElementById(
    "traversal-result"
  ).value = `Pre-Order Traversal: ${result.join(", ")}`;
}

function postOrderTraversal() {
  const result = bst.postOrderTraversal();
  document.getElementById(
    "traversal-result"
  ).value = `Post-Order Traversal: ${result.join(", ")}`;
}
