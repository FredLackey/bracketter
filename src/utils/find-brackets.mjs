import { BRACKETS } from '../constants.mjs';

const find = (value, bracket) => {

  if (!value.includes(bracket.open) || !value.includes(bracket.close)) {
    return null;
  }

  const oPos = value.indexOf(bracket.open);
  const cPos = value.lastIndexOf(bracket.close);
  
  if (oPos > cPos) {
    return {};
  }
  
  return {
    ...bracket,
    oPos,
    cPos,
    length: value.length,
  }
}

const findBrackets = (value) => {

  return BRACKETS
    .map(bracket => {
      return find(value, bracket);
    })
    .filter(x => (x && x.open));

};

export default findBrackets;
