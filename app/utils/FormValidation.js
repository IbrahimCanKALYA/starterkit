/* @flow */

// Validates an email...
const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Validates that text has minimum 3 character...
const validateText = (text: string): boolean => !(text.length < 3);

// Validates that password has minimum 8 character...
const validatePasswordLength = (password: string): boolean => !(password.length < 8);

// Validates that password has a special character...
const validatePasswordHaveSpecialChar = (password: string): boolean => {
  const re = /^[a-zA-Z0-9 ]*$/;
  return !re.test(password);
};

// Validates that text is not empty...
const isEmpty = (text: string): boolean => !(text.length === 0);

// Validates that identity number has 11 number...
const validateIdentityNumberLength = (number: string): boolean => !(number.length !== 11);

// Validates that identity characters are numeric...
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
