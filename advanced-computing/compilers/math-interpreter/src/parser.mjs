import { Node } from "./node.mjs";

export function parser(tokens) {
  let current = 0;

  const walk = () => {
    let token = tokens[current];

    if (/\d+/.test(token)) {
      current++;
      return new Node(Number(token));
    }

    if (token === "(") {
      current++;
      const node = walk();
      current++;
      return node;
    }

    if (["+", "-", "*", "/"].includes(token)) {
      current++;
      const node = new Node(token);
      node.left = walk();
      node.right = walk();
      return node;
    }

    throw new Error(`Unexpected token: ${token}`);
  };

  return walk();
}
