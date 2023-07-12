const isValid = (value, isEmptyOkay = false) => {
  return (
    (typeof value === 'object') &&
    (value !== null) &&
    (value instanceof Array) &&
    (isEmptyOkay || value.length > 0)
  );
};

export default isValid;
