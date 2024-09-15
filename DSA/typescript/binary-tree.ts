import { assertEquals, assertIsNotUndefined } from "./test/tests";

const DEVELOPMENT_MODE = false;

enum VisitType {
  InOrder,
  PreOrder,
  PostOrder,
}

class EmptyTreeDeleteError extends Error {}

export default class BinaryTree<T> {
  right?: BinaryTree<T>;
  left?: BinaryTree<T>;

  constructor(public value: T) {}

  addLeft(leftValueOrSubtree: T | BinaryTree<T>): BinaryTree<T> {
    const leftSubtree =
      leftValueOrSubtree instanceof BinaryTree
        ? leftValueOrSubtree
        : new BinaryTree<T>(leftValueOrSubtree);

    return (this.left = leftSubtree);
  }

  addRight(rightValueOrSubtree: T | BinaryTree<T>): BinaryTree<T> {
    const rightSubtree =
      rightValueOrSubtree instanceof BinaryTree
        ? rightValueOrSubtree
        : new BinaryTree<T>(rightValueOrSubtree);

    return (this.right = rightSubtree);
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
    let currentMin: BinaryTree<T> = this;

    if (this.left) {
      const leftMin = this.left.min();

      if (leftMin.value < currentMin.value) currentMin = leftMin;
    }

    if (this.right) {
      const rightMin = this.right.min();

      if (rightMin.value < currentMin.value) currentMin = rightMin;
    }

    return currentMin;
  }

  max(): BinaryTree<T> {
    let currentMax: BinaryTree<T> = this;

    if (this.left) {
      const leftMax = this.left.max();

      if (leftMax.value > currentMax.value) currentMax = leftMax;
    }

    if (this.right) {
      const rightMax = this.right.max();

      if (rightMax.value > currentMax.value) currentMax = rightMax;
    }

    return currentMax;
  }

  isLeaf(): boolean {
    return !this.left && !this.right;
  }

  hasSingleSubTree(): boolean {
    return !!((this.left && !this.right) || (!this.left && this.right));
  }

  isNonLeaf(): boolean {
    return !this.isLeaf();
  }

  //       10
  //      /  \
  //     20  30
  //    /  \
  //   40  60
  //  /
  // 50

  leaves(): BinaryTree<T>[] {
    if (this.isLeaf()) return [this];

    const leftLeaves = this.left?.leaves() ?? [];
    const rightLeaves = this.right?.leaves() ?? [];

    return [...leftLeaves, ...rightLeaves];
  }

  nonLeaves(): BinaryTree<T>[] {
    if (this.isLeaf()) return [];

    const leftNonLeaves = this.left?.nonLeaves() ?? [];
    const rightNonLeaves = this.right?.nonLeaves() ?? [];

    return [this, ...leftNonLeaves, ...rightNonLeaves];
  }

  // print(): void {}

  // Equivalent to `forEach()`.
  visit(
    callback: (value: T) => void,
    type: VisitType = VisitType.InOrder
  ): void {
    if (type === VisitType.PreOrder) callback(this.value);
    this.left?.visit(callback, type);
    if (type === VisitType.InOrder) callback(this.value);
    this.right?.visit(callback, type);
    if (type === VisitType.PostOrder) callback(this.value);
  }

  *iterator(type: VisitType = VisitType.InOrder): Generator<T, void, void> {
    if (type === VisitType.PreOrder) yield this.value;
    if (this.left) yield* this.left.iterator(type);
    if (type === VisitType.InOrder) yield this.value;
    if (this.right) yield* this.right.iterator(type);
    if (type === VisitType.PostOrder) yield this.value;
  }

  *[Symbol.iterator]() {
    yield* this.iterator();
  }

  print(level: number = 0, showIndentationGuides: boolean[] = []): void {
    const SUBTREE_CONNECTOR = "─ x ─┐";

    const indentation = showIndentationGuides.reduce(
      (acc, showIndentationGuide) =>
        acc +
        (showIndentationGuide ? "|" : " ") +
        " ".repeat(SUBTREE_CONNECTOR.length - 1),
      ""
    );

    console.log(indentation + this.value);

    if (this.left) {
      console.log(
        indentation +
          (this.right ? "├" : "└") +
          SUBTREE_CONNECTOR.replaceAll("x", "⇦")
      );

      this.left.print(level + 1, [...showIndentationGuides, !!this.right]);
    }

    if (this.right) {
      console.log(indentation + "└" + SUBTREE_CONNECTOR.replaceAll("x", "⇨"));

      this.right.print(level + 1, [...showIndentationGuides, false]);
    }
  }

  map<U>(callback: (value: T) => U, type: VisitType = VisitType.InOrder) {
    const result: U[] = [];
    this.visit((value: T) => result.push(callback(value)), type);
    return result;
  }

  // find(searchedValue: T): T[] | undefined {}
  isBST(): boolean {
    if (this.left) {
      if (this.left.value >= this.value || !this.left.isBST()) {
        return false;
      }
    }

    if (this.right) {
      if (this.right.value <= this.value || !this.right.isBST()) {
        return false;
      }
    }

    return true;
  }

  largestBST(): BinaryTree<T> {
    if (this.isBST()) return this;

    const leftLargest = this.left?.largestBST();
    const rightLargest = this.right?.largestBST();

    const leftLargestCount = leftLargest?.count() ?? 0;
    const rightLargestCount = rightLargest?.count() ?? 0;

    if (leftLargestCount >= rightLargestCount) {
      assertIsNotUndefined(leftLargest);
      return leftLargest;
    }

    assertIsNotUndefined(rightLargest);

    return rightLargest;
  }
}

// Top-down
const root = new BinaryTree(10);
const node20 = root.addLeft(20);
const node30 = root.addRight(30);
const node40 = node20.addLeft(40);
const node50 = node40.addLeft(50);
const node60 = new BinaryTree(60);
node20.addRight(node60);

// root.print()
assertEquals(root.count(), 6);
assertEquals(root.height(), 4);
assertEquals(node40.height(), 2);

assertEquals(root.leftMost(), node50);
assertEquals(root.rightMost(), node30);
//console.log(root.isBST());

assertEquals(root.leaves(), [node50, node60, node30]);
assertEquals(root.nonLeaves(), [root, node20, node40]);

// console.log(root.leaves());

// console.log("Map: ", root.map((v) => v * 2)
// console.log(
//   "sum: ",
//   root.sum((v) => v),
// );

// console.log("min: ", root.min().value);
// console.log("max: ", root.max().value);

// console.log("in-order:");
// root.visit((v) => console.log(v));

// console.log("pre-order:");
// root.visit((v) => console.log(v), VisitType.PreOrder);

// console.log("post-order:");
// root.visit((v) => console.log(v), VisitType.PostOrder);

// root.print();

// console.log([...root]);
// console.log([...root.iterator(VisitType.PreOrder)]);
// console.log([...root.iterator(VisitType.PostOrder)]);

const binaryTree = new BinaryTree(10);
const node8 = binaryTree.addLeft(8); // bst is here
const node11 = binaryTree.addRight(11);
const node6 = node8.addLeft(6);
node8.addRight(9);

node6.addLeft(5);
node6.addRight(7);

const node15 = node11.addLeft(15);
node11.addRight(12);
node15.addLeft(16);
node15.addRight(20);

assertEquals([...binaryTree], [5, 6, 7, 8, 9, 10, 16, 15, 20, 11, 12]);
assertEquals(binaryTree.count(), 11);
assertEquals(binaryTree.largestBST(), node8);

const bt2 = new BinaryTree(1);
const node10 = bt2.addLeft(10);

assertEquals(bt2.largestBST(), node10); // leaf is BST
