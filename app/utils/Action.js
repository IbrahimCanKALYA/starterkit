/* @flow */
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

function action(type: string, payload: any = {}) {
  return { type, ...payload };
}

module.exports = {
  REQUEST,
  SUCCESS,
  FAILURE,
  createRequestTypes,
  action,
};
