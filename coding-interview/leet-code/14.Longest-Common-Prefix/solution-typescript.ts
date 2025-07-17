const strs = ["flower", "flow", "flight"];

function longestPrefix(strs: string[]) {
  let count = 0;
  let prefix = strs[0][0];

  while (prefix.length > 0) {
    for (let i = 0; i < strs.length; i++) {
      if (i === 0) {
        prefix.concat(strs[i][count]);
      } else if (prefix === strs[i][count]) {
        return;
      } else {
        prefix = "";
      }
    }
    count++;
  }

  return prefix;
}

console.log(longestPrefix(strs));
