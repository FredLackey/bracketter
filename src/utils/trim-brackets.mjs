import isBracketted from './is-bracketted.mjs';
import getBracket   from './get-bracket.mjs';

const trimBrackets = value => {
  while (isBracketted(value)) {
    const bracket = getBracket(value);
    if (value.length <= (bracket.open.length + bracket.close.length)) {
      return '';
    }
    value = value.substr(bracket.open.length);
    value = value.substr(0, value.length - bracket.close.length);
  }
  return value;
};

export default trimBrackets;
