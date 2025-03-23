export function evaluate(node) {
  if (!node) return 0;

  if (typeof node.value === "number") {
    return node.value;
  }

  const left = evaluate(node.left);
  const right = evaluate(node.right);

  switch (node.value) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;

    case "/":
      return left / right;

    default:
      throw new Error(`Unknown operator: ${node.value}`);
  }
}
