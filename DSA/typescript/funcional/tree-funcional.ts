type Tree<T> =
  | undefined
  | {
      element: T;
      left: Tree<T>;
      right: Tree<T>;
    };

const isEmpty = <T>(tree: Tree<T>): tree is undefined => tree === undefined;

const empty = undefined;

const append = <T>(element: T, tree?: Tree<T>): Tree<T> => {
  if (isEmpty(tree)) {
    return { element: element, left: empty, right: empty };
  }

  if (tree.element > element) {
    tree.left = append(element, tree.left);
  } else if (tree.element < element) {
    tree.right = append(element, tree.right);
  }

  return tree;
};

const find_node = <T>(tree: Tree<T>, element: T): boolean => {
  if (isEmpty(tree)) return false;

  if (tree.element === element) return true;
  else {
    if (tree.element > element) {
      return find_node(tree.left, element);
    } else {
      return find_node(tree.right, element);
    }
  }
};

const map = <T, A>(fn: (element: T) => A, tree: Tree<T>): A[] | undefined => {
  if (isEmpty(tree)) return [];

  for (const element in print_inoorder(tree)) {
    // return [...[fn(element)], ...map(fn, tree.left), ...map(fn, tree.right)];
  }
};

const print_inoorder = <T>(tree: Tree<T>): T[] => {
  if (isEmpty(tree)) return [];

  return [
    ...print_inoorder(tree?.left),
    ...[tree?.element],
    ...print_inoorder(tree?.right),
  ];
};

const tree = append(8, append(9, append(12, append(11))));

console.log(tree);

console.log(find_node(tree, 8));

console.log(print_inoorder(tree));

console.log(map(<T>(el: T) => el?.toString(), tree));
