const trimBracket = (value, bracket) => {

  const result = value.substr(bracket.oPos + 1, bracket.cPos - bracket.oPos - 1); 

  return result;

};

export default trimBracket;
