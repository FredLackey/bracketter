import getBracket from './get-bracket.mjs';

const isBracketted = value => {
  const bracket = getBracket(value);
  return (bracket && isValid(value));
};

export default isBracketted;
