const replaceBracket = (value, replacement, bracket) => {
  
  const left  = value.substring(0, bracket.oPos);
  const right = value.substring(bracket.cPos + 1);

  return `${left}${replacement}${right}`;

};

export default replaceBracket;
