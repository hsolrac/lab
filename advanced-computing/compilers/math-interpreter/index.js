import { interpret } from "./src/interpreter.mjs";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma expressão matemética:\n", (input) => {
  try {
    const result = interpret(input);
    console.log(`Resultado: ${result}`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
  } finally {
    rl.close();
  }
});
