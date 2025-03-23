export function tokenize(input) {
  const expr = /\s*([()+\-*/]|\d+)\s*/g;

  console.log(
    `TOKENS>>>>>>>>>>>> ${input.split(expr).filter((token) => token)}`
  );
  return input.split(expr).filter((token) => token);
}
