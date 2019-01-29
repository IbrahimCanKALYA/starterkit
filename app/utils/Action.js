/* @flow */
import { constants } from 'resources';

function createRequestTypes(base: any) {
  return [constants.REQUEST, constants.SUCCESS, constants.FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

function action(type: any, payload: any = {}) {
  return { type, ...payload };
}

module.exports = {
  createRequestTypes,
  action,
};
