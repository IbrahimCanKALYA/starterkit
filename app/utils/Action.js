/* @flow */
import { constants } from 'resources';

// Creates request type for a giving base...
function createRequestTypes(base: any) {
  return [constants.REQUEST, constants.SUCCESS, constants.FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

// Creates an action for giving type...
function action(type: any, payload: any = {}) {
  return { type, ...payload };
}

module.exports = {
  createRequestTypes,
  action,
};
