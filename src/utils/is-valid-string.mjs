const isValidString = (value, isEmptyOkay) => {
  if (typeof value !== 'string') {
    return false;
  };

  return (typeof value === 'string') && (isEmptyOkay || value.trim().length > 0);
};  

export default isValidString;
