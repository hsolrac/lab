const DEVELOPMENT_MODE = false;
import BinaryTree from "./binary-tree";
import {
  assertEquals,
  assertIsNotUndefined,
  assertRaisesException,
} from "./test/tests";

enum ParentSubTreePropType {
  left = "left",
  right = "right",
}

class EmptyTreeDeleteError extends Error {}

// BST = Binary Search Tree
class BST<T> extends BinaryTree<T> {
  right?: BST<T>;
  left?: BST<T>;

  add(newValue: T): void {
    if (newValue <= this.value) {
      if (this.left) this.left.add(newValue);
      else this.left = new BST<T>(newValue);
    } else {
      // newValue > this.value
      if (this.right) this.right.add(newValue);
      else this.right = new BST<T>(newValue);
    }

    if (DEVELOPMENT_MODE) {
      if (!this.isValid()) throw new Error("Invalid BST detected after add");
    }
  }

  min(): BST<T> {
    return this.leftMost() as BST<T>;
  }

  max(): BST<T> {
    return this.rightMost() as BST<T>;
  }

  find(searchedValue: T, breadcrumbs: T[] = []): T[] | undefined {
    const updatedBreadcrumbs = [...breadcrumbs, this.value];

    if (searchedValue === this.value) return updatedBreadcrumbs;
    else if (searchedValue < this.value)
      return this.left?.find(searchedValue, updatedBreadcrumbs);
    // searchedValue > this.value
    else return this.right?.find(searchedValue, updatedBreadcrumbs);
  }

  // //       5
  // //      / \
  // //     3   6
  // //    / \
  // //   2   4
  // //  /
  // // 1

  delete(
    searchedValue: T,
    parent?: BST<T>,
    side?: ParentSubTreePropType
  ): boolean {
    if (this.value > searchedValue) {
      return (
        this.left?.delete(searchedValue, this, ParentSubTreePropType.left) ??
        false
      );
    } else if (this.value < searchedValue) {
      return (
        this.right?.delete(searchedValue, this, ParentSubTreePropType.right) ??
        false
      );
    }

    if (this.isLeaf()) {
      if (!parent)
        throw new EmptyTreeDeleteError("Cannot remove root leaf node");
      assertIsNotUndefined(side);

      parent[side] = undefined;
      return true;
    }

    if (this.hasSingleSubTree()) {
      const tempNode = this.left ?? this.right;
      assertIsNotUndefined(tempNode);
      this.value = tempNode.value;
      this.left = tempNode.left;
      this.right = tempNode.right;

      return true;
    }

    //Current node has both subtrees
    if (Math.random() < 0.5) {
      assertIsNotUndefined(this.left);
      const inOrderPredecessor = this.left.max();

      const predecessorValue = inOrderPredecessor.value;
      this.left.delete(predecessorValue, this, ParentSubTreePropType.left);

      this.value = predecessorValue;
    } else {
      assertIsNotUndefined(this.right);
      const inOrderSuccessor = this.right.min();

      const successorValue = inOrderSuccessor.value;
      this.right.delete(successorValue, this, ParentSubTreePropType.right);

      this.value = successorValue;
    }

    return true;
  }

  isValid(): boolean {
    return this.isBST();
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------

//       10
//      /  \
//     20  30
//    /  \
//   40  60
//  /
// 50

// Pre-order: 10, 20, 40, 50, 60, 30 (left)
// In-order: 50, 40, 20, 60, 10, 30 (bottom)
// Post-order: 50, 40, 60, 20, 30, 10 (right)
//
//

// //       5
const bst = new BST(5);

// //       5
// //      /
// //     3
bst.add(3);

// //       5
// //      / \
// //     3   6
bst.add(6);

// //       5
// //      / \
// //     3   6
// //    /
// //   2
bst.add(2);

// //       5
// //      / \
// //     3   6
// //    /
// //   2
// //  /
// // 1
bst.add(1);

// //       5
// //      / \
// //     3   6
// //    / \
// //   2   4
// //  /
// // 1
bst.add(4);

// bst.print();

////////////////////////////// TESTS CASE //////////////////////////////////////////////

assertEquals(bst.delete(6), true);
assertEquals([...bst], [1, 2, 3, 4, 5]);
assertEquals(bst.delete(10), false);
assertEquals([...bst], [1, 2, 3, 4, 5]);

bst.add(6);

assertEquals([...bst], [1, 2, 3, 4, 5, 6]);
assertEquals(bst.delete(6), true);
assertEquals(bst.isValid(), true);

assertEquals(bst.delete(1), true);
assertEquals(bst.isValid(), true);
assertEquals([...bst], [2, 3, 4, 5]);

assertEquals(bst.delete(3), true);
assertEquals([...bst], [2, 4, 5]);

assertEquals(bst.delete(2), true);
assertEquals(bst.isValid(), true);
assertEquals([...bst], [4, 5]);
assertEquals(bst.delete(5), true);
assertEquals([...bst], [4]);

assertRaisesException(() => bst.delete(4), EmptyTreeDeleteError);

/////// TEST: Largest BST /////////////////

//        10
//      /    \
//     8      11
//    / \    /  \
//   6   9  15   12
//  / \     / \
// 5   7   16  20
