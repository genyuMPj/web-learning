/**
 * 定义树结构
 * 问： 怎么表示树呢？
 * 答： 可以使用多维数组表示
 * 数组嵌套，每个元素分别是 value left right
 */
class BTreeNode {
  constructor(node) {
    this.initBtree(node)
  }
  initBtree(nodeList) {
    if (Array.isArray(nodeList) && nodeList.length > 0) {
      const [value, left, right] = nodeList;
      if (typeof value === 'number') {
        this.value = value;
        if (left !== undefined) {
          this.left = new BTreeNode(left);
        }
        if (right !== undefined) {
          this.right = new BTreeNode(right);
        }
      }
      return;
    }
  }
}

function hasTargetSumPath(node, target) {
  const pathSumList = [];
  const getLeafSum = (node, preSum) => {
    if (node && typeof node === 'object' && typeof node.value === 'number') {
      const sum = preSum + node.value;
      // 叶子节点
      if (!node.left && !node.right) {
        pathSumList.push(sum);
        return;
      }
      if (node.left !== undefined) {
        getLeafSum(node.left, sum);
      }
      if (node.right !== undefined) {
        getLeafSum(node.right, sum)
      }
    }
  }

  const hasTargetSumPath1 = (node, preSum) => {
    if (node && typeof node === 'object' && typeof node.value === 'number') {
      const sum = preSum + node.value;
      // 叶子节点
      if (!node.left && !node.right) {
        pathSumList.push(sum);
        return sum === target;
      }
      if (node.left !== undefined) {
        if (hasTargetSumPath1(node.left, sum)) {
          return true;
        };
      }
      if (node.right !== undefined) {
        return hasTargetSumPath1(node.right, sum);
      }
    }
  }

  // getLeafSum(node, 0);
  // return pathSumList.some(item => item === target)
  return hasTargetSumPath1(node, 0)


}

// // 暂时用数组存储二叉树的结构
const data = [6, [2, [3],[-1]], [3, [0]]];

const tree = new BTreeNode(data);
console.log('tree----', JSON.stringify(tree))

console.log(hasTargetSumPath(tree, 7))