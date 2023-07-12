const getPrefix = (value) => {

  let result  = '';
  let curChar = '';

  value.split('').forEach(ch => {
    if (curChar.length > 0) {
      return;
    }
    if (ch === ' ') {
      result += ch;
    } else {
      curChar = ch;
    }
  });

  return result;
};

export default getPrefix;
