import { KEYWORDS, Token, TokenType } from "./token";

interface SymbolMap {
  [key: string]: {
    type: TokenType;
    value: string;
  };
}

export class Lexer {
  private code: string;
  private position: number;
  private line: number;
  private column: number;

  constructor(code: string) {
    this.code = code;
    this.position = 0;
    this.line = 1;
    this.column = 1;
  }

  private isWhitespace(char: string): boolean {
    return char === " " || char === "\t" || char === "\n" || char === "\r";
  }

  private isIdentifierStart(char: string): boolean {
    return /a-zA-Z/.test(char);
  }

  private isIdentifierPart(char: string): boolean {
    return /a-zA-Z0-9/.test(char);
  }

  private isDigit(char: string): boolean {
    return /0-9/.test(char);
  }

  private skipWhitespace(): void {
    while (
      this.position < this.code.length &&
      this.isWhitespace(this.code[this.position])
    ) {
      if (this.code[this.position] === "\n") {
        this.line++;
        this.column = 1;
      } else {
        this.column++;
      }
    }
  }

  private readIdentifier(): string {
    let start = this.position;
    while (
      this.position < this.code.length &&
      this.isIdentifierPart(this.code[this.position])
    ) {
      this.position++;
      this.column++;
    }
    return this.code.slice(start, this.position);
  }

  private readNumber(): string {
    let start = this.position;
    while (
      this.position < this.code.length &&
      this.isDigit(this.code[this.position])
    ) {
      this.position++;
      this.column++;
    }
    return this.code.slice(start, this.position);
  }

  private readString(): string {
    const start = this.position;
    const quote = this.code[this.position];
    this.position++;
    this.column++;

    while (this.position < this.code.length) {
      if (this.code[this.position] === quote) {
        this.position++;
        this.column++;
        return this.code.slice(start + 1, this.position - 1);
      }
      this.position++;
      this.column++;
    }

    throw new Error(`problema line ${this.line}`);
  }

  nextToken(): Token {
    this.skipWhitespace();

    if (this.position >= this.code.length) {
      return {
        type: TokenType.EOF,
        value: "EOF",
        position: { line: this.line, column: this.column },
      };
    }

    const char = this.code[this.position];

    if (this.isIdentifierStart(char)) {
      const identifier = this.readIdentifier();
      return {
        type: KEYWORDS.has(identifier)
          ? TokenType.KEYWORD
          : TokenType.IDENTIFIER,
        value: identifier,
        position: { line: this.line, column: this.column - identifier.length },
      };
    }

    if (this.isDigit(char)) {
      const number = this.readNumber();
      return {
        type: TokenType.NUMBER,
        value: number,
        position: { line: this.line, column: this.column - number.length },
      };
    }

    if (char === '"' || char === "'") {
      const string = this.readString();
      return {
        type: TokenType.STRING,
        value: string,
        position: { line: this.line, column: this.column - string.length - 2 },
      };
    }

    const symbols: SymbolMap = {
      "(": { type: TokenType.SYMBOL, value: "(" },
      ")": { type: TokenType.SYMBOL, value: ")" },
      "{": { type: TokenType.SYMBOL, value: "{" },
      "}": { type: TokenType.SYMBOL, value: "}" },
      "[": { type: TokenType.SYMBOL, value: "[" },
      "]": { type: TokenType.SYMBOL, value: "]" },
      "=": { type: TokenType.SYMBOL, value: "=" },
      "+": { type: TokenType.SYMBOL, value: "+" },
      "-": { type: TokenType.SYMBOL, value: "-" },
      "*": { type: TokenType.SYMBOL, value: "*" },
      "/": { type: TokenType.SYMBOL, value: "/" },
      "<": { type: TokenType.SYMBOL, value: "<" },
      ">": { type: TokenType.SYMBOL, value: ">" },
      ",": { type: TokenType.SYMBOL, value: "," },
      ";": { type: TokenType.SYMBOL, value: ";" },
      ":": { type: TokenType.SYMBOL, value: ":" },
    };

    if (symbols[char]) {
      this.position++;
      this.column++;
      return {
        ...symbols[char],
        position: { line: this.line, column: this.column - 1 },
      };
    }

    throw new Error(
      `Invalid character '${char}' at line ${this.line}, column ${this.column}`
    );
  }

  tokenize(): Token[] {
    const tokens: Token[] = [];
    let token: Token;
    while ((token = this.nextToken()).type !== TokenType.EOF) {
      tokens.push(token);
    }
    return tokens;
  }
}
