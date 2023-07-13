import findBracket from './find-bracket.mjs'

const constainsBracket = valueOrValues => {
  const values = [].concat(valueOrValues);
  for (let i = 0; i < values.length; i++) {
    const bracket = findBracket(values[i]);
    if (bracket?.close && bracket?.open) {
      return true;
    }
  }
  return false;
};

export default constainsBracket;
