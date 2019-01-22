/* @flow */
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

function action(type, payload = {}) {
  return { type, ...payload };
}

export const LOGIN_EMAIL = createRequestTypes('LOGIN_EMAIL');
export const loginEmail = {
  request: (eMail: string, password: string) => action(LOGIN_EMAIL[REQUEST], { eMail, password }),
  success: () => action(LOGIN_EMAIL[SUCCESS], null),
  failure: (error: {error: boolean, message: string}) => action(LOGIN_EMAIL[FAILURE], { error }),
};
