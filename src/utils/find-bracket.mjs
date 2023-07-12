import findBrackets from "./find-brackets.mjs";

const findBracket = (value) => {
  const brackets = findBrackets(value);
  if (brackets.length === 0) {
    return null;
  }
  if (brackets.length === 1) {
    return brackets[0];
  }
  const maxOpen = Math.max(...brackets.map(x => x.oPos));
  const minClose = Math.min(...brackets.map(x => x.cPos));
  const bracket = brackets.find(x => (x.oPos === maxOpen && x.cPos === minClose));
  if (!bracket) {
    throw new Error(`Could not find inner bracket for '${value}'`);
  }
  return bracket;
};

export default findBracket;
