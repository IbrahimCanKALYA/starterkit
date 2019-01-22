const validateEmail = (email) => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateText = text => !(text.length < 3);

const validatePasswordLength = password => !(password.length < 8);

const validatePasswordHaveSpecialChar = (password) => {
  const re = /^[a-zA-Z0-9 ]*$/;
  return !re.test(password);
};

const isEmpty = text => !(text.length === 0);

const validateIdentityNumberLength = number => !(number.length !== 11);

const validateIdentityNumberNumeric = (number) => {
  const re = /^\d+$/;
  return re.test(number);
};

module.exports = {
  validateEmail,
  validateText,
  validatePasswordLength,
  validatePasswordHaveSpecialChar,
  isEmpty,
  validateIdentityNumberLength,
  validateIdentityNumberNumeric,
};
