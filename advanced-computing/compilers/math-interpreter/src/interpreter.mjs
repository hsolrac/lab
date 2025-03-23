import { tokenize } from "./tokenize.mjs";
import { parser } from "./parser.mjs";
import { evaluate } from "./evaluator.mjs";

export function interpret(input) {
  const tokens = tokenize(input);
  const ast = parser(tokens);
  return evaluate(ast);
}
