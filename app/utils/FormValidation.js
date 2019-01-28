/* @flow */
const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateText = (text: string): boolean => !(text.length < 3);

const validatePasswordLength = (password: string): boolean => !(password.length < 8);

const validatePasswordHaveSpecialChar = (password: string): boolean => {
  const re = /^[a-zA-Z0-9 ]*$/;
  return !re.test(password);
};

const isEmpty = (text: string): boolean => !(text.length === 0);

const validateIdentityNumberLength = (number: string): boolean => !(number.length !== 11);

const validateIdentityNumberNumeric = (number: string): boolean => {
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
