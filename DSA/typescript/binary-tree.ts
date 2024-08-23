class BinaryTree<T> {
  left?: BinaryTree<T>;
  right?: BinaryTree<T>;

  constructor(public value: T) {}

  addLeft(leftValue: T): BinaryTree<T> {
    return (this.left = new BinaryTree<T>(leftValue));
  }

  addRight(rightValue: T): BinaryTree<T> {
    return (this.right = new BinaryTree<T>(rightValue));
  }

  count(): number {
    const leftCount = this.left?.count() ?? 0;
    const rightCount = this.right?.count() ?? 0;

    return leftCount + rightCount + 1;
  }

  height(): number {
    const leftHeight = this.left?.height() ?? 0;
    const rightHeight = this.right?.height() ?? 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  sum(callback: (value: T) => number): number {
    const leftSum = this.left?.sum(callback) ?? 0;
    const rightSum = this.right?.sum(callback) ?? 0;

    return leftSum + rightSum + callback(this.value);
  }

  leftMost(): BinaryTree<T> {
    return this.left?.leftMost() ?? this;
  }

  rightMost(): BinaryTree<T> {
    return this.right?.rightMost() ?? this;
  }

  min(): BinaryTree<T> {
    let minValue = this.value;

    const leftMin = this.left ? this.left.min() : null;
    if (leftMin !== null && leftMin < minValue) {
      minValue = leftMin;
    }

    const rightMin = this.right ? this.right.min() : null;
    if (leftMin !== null && leftMin < minValue) {
      minValue = rightMin;
    }

    return minValue;
  } // <, >, ===, <=, >=
  max(): BinaryTree<T> {
    let maxValue = this.value;

    const leftMin = this.left ? this.left.max() : null;
    if (leftMin !== null && leftMin > maxValue) {
      maxValue = leftMin;
    }

    const rightMin = this.right ? this.right.max() : null;
    if (leftMin !== null && leftMin > maxValue) {
      maxValue = rightMin;
    }

    return maxValue;
  } // <, >, ===, <=, >=
  isLeaf(valueNode: number): boolean {
    let currentNode = this;
    if (this.left && this.left.value === valueNode) {
      return currentNode.left === undefined || currentNode.right === undefined;
    } else {
      this.isLeaf(valueNode);
    }
    if (this.right && this.right.value === valueNode) {
      return currentNode.left === undefined || currentNode.right === undefined;
    } else {
      this.isLeaf(valueNode);
    }
  }
  leaves(): BinaryTree<T>[] {}
  nonLeaves(): BinaryTree<T>[] {}
  print(): void {}
  visit(callback: (value: T) => void): void {}
}

//       10
//      /  \
//     20  30
//    /
//   40
//  /
// 50

// Top-down
const root = new BinaryTree(10);
const node20 = root.addLeft(20);
const node30 = root.addRight(30);
const node40 = node20.addLeft(40);
const node50 = node40.addLeft(50);
const node60 = node50.addLeft(60);
const node7 = node60.addLeft(7);

console.log(root);
console.log("count: ", root.count());
console.log("height: ", root.height());
console.log("height: ", node40.height());

console.log("leftMost: ", root.leftMost());
console.log("rightMost: ", root.rightMost());

console.log(
  "sum: ",
  root.sum((v) => v)
);

root.visit((v) => console.log(v));

console.log("minValue: ", root.min());
console.log("maxValue: ", root.max());
console.log("isLeaf: ", root.isLeaf(50));
