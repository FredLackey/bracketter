import isValidArray from './src/utils/is-valid-array.mjs';
import isValidString from './src/utils/is-valid-string.mjs';
import findBracket from './src/utils/find-bracket.mjs';
import trimBracket from './src/utils/trim-bracket.mjs';

const EMPTY_NOT_OKAY = false;
const EMPTY_OKAY = true;
const NEST_LIMIT = 10;

export const getValue = (value, defValue) => {

  if (isValidString(value, EMPTY_NOT_OKAY)) {
    return value;
  }
  if (isValidString(value, EMPTY_OKAY) && value.length > 0) {
    return value;
  }
  if (isValidString(defValue, EMPTY_NOT_OKAY)) {
    return defValue;
  }
  if (isValidString(defValue, EMPTY_OKAY) && value.length > 0) {
    return defValue;
  }

  return undefined;
}

export const replaceInWord = (word, values, defaults, nestLimit) => {

  let loops   = 0;
  let bracket = findBracket(word);
  
  while (bracket && loops < nestLimit) {

    const key    = trimBracket(word, bracket);
    const target = `${bracket.open}${key}${bracket.close}`;
    const value  = getValue(values[key], defaults[key])

    word    = word.replace(target, value);
    bracket = findBracket(word);

    loops += 1;

  }

  return word;

};
export const replaceInLine = (line, values, defaults, nestLimit) => {

  return line
    .split(' ')
    .map(word => replaceInWord(word, values, defaults, nestLimit))
    .join(' ');

};

export const replace = ({ line = '', lines = [], values = {}, defaults = {}, nestLimit = NEST_LIMIT }) => {

  if (!isValidArray(lines, EMPTY_OKAY)) {
    throw new Error(`Use 'lines' for an array of lines, or 'line' for a single line.`);
  }
  if (!isValidString(line, EMPTY_OKAY)) {
    throw new Error(`Use 'line' for a single line, or 'lines' for an array of lines.`);
  }

  let allLines = [];
  if (isValidString(line, EMPTY_NOT_OKAY)) {
    allLines.push(line);
  }
  if (isValidArray(lines, EMPTY_OKAY)) {
    allLines.push(...lines.filter(line => isValidString(line, EMPTY_OKAY)));
  }

  const results  = allLines.map(line => {
    return replaceInLine(line, values, defaults, nestLimit);
  });

  return isValidArray(lines, EMPTY_NOT_OKAY) 
    ? results 
    : (isValidString(line, EMPTY_NOT_OKAY) && results.length > 0)
      ? results[0]
      : '';

}

