import findBracket from './find-bracket.mjs';

const isBracketted = value => {
  const bracket = findBracket(value);
  return (bracket && isValid(value));
};

export default isBracketted;
