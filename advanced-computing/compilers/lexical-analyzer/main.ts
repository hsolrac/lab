import { Lexer } from "./mod";
import { type Token } from "./token";

const main = () => {
  const code = `
    function MyComponet() {
        const [count, setCount] = useState(0);
        return <div>{count}</div>;
    }
    `;

  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  console.log(tokens);

  tokens.forEach((token: Token): void => {
    console.log(
      `${token.type}: ${token.value} (line: ${token.position.line}, column: ${token.position.column})`
    );
  });
};

main();
