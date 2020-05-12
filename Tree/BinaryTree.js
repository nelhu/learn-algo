const prettyFormat = require('pretty-format');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


/**
 * 二叉查找树
 *
 * 查找
 * 插入
 * 删除
 *
 * 前序遍历 preOrder
 * 中序遍历 middleOrder
 * 后序遍历 postOrder
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return ;
    }
    let current = this.root;
    while (current !== null) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = node;
          return ;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return ;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) throw new Error('empty tree');
    let current = this.root;
    while (current !== null) {
      if (value === current.data) {
        return current;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  findByRecursive(node, value) {
    if (!node) return false;
    const currentValue = node.data;
    if (value === currentValue) {
      return node;
    } else if (value < currentValue) {
      return this.findByRecursive(node.left, value)
    } else {
      return this.findByRecursive(node.right, value)
    }
  }

  delete(value) {
    // 场景1：删除叶子节点： 直接删除：父节点指向null
    // 场景2：删除有1个子节点的节点，将父节点指向该节点的子节点
    // 场景3：删除有2个子节点的节点，需要找到右子树中的最小节点，用最小节点替换掉当前节点即可
  }

  preOrder() {
    const res = [];
    const order = node => {
      res.push(node.data)
      if (node.left) {
        order(node.left)
      }
      if (node.right) {
        order(node.right)
      }
    }
    order(this.root);
    return res;
  }

  middleOrder() {
    const res = [];
    const order = node => {
      if (node.left) {
        order(node.left);
      }
      res.push(node.data)
      if (node.right) {
        order(node.right);
      }
    }
    order(this.root);
    return res;
  }

  postOrder() {
    const res = [];
    const order = node => {
      if (node.left) {
        order(node.left);
      }
      if (node.right) {
        order(node.right);
      }
      res.push(node.data)
    }
    order(this.root);
    return res;
  }



  print() {
    console.log(prettyFormat(this.root));
  }
}

function test1() {
  var tree1 = new BinarySearchTree();
  tree1.insert(9);
  tree1.insert(4);
  tree1.insert(7);
  tree1.insert(11);
  tree1.insert(26);
  tree1.insert(17);
  tree1.insert(8);
  tree1.insert(6);
  tree1.insert(15);
  // tree1.print();
  console.log('preOrder', tree1.preOrder());
  console.log('middleOrder', tree1.middleOrder());
  console.log('postOrder', tree1.middleOrder());

  // console.log(tree1.find(26));

}

test1();