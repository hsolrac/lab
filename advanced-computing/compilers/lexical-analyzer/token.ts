export enum TokenType {
  IDENTIFIER = "IDENTIFIER",
  KEYWORD = "KEYWORD",
  NUMBER = "NUMBER",
  STRING = "STRING",
  SYMBOL = "SYMBOL",
  EOF = "EOF",
}

export interface Token {
  type: TokenType;
  value: string;
  position: {
    line: number;
    column: number;
  };
}

export const KEYWORDS = new Set([
  "function",
  "const",
  "let",
  "var",
  "return",
  "import",
  "export",
  "default",
  "useState",
]);
