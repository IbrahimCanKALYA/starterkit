/* @flow */
import { constants } from 'resources';
import { Action } from 'utils';

export const LOGIN_EMAIL = Action.createRequestTypes('LOGIN_EMAIL');
export const loginEmail = {
  request: (eMail: string, password: string) => Action.action(LOGIN_EMAIL[constants.REQUEST], { eMail, password }),
  success: () => Action.action(LOGIN_EMAIL[constants.SUCCESS], null),
  failure: (error: { error: boolean, message: string }) => Action.action(LOGIN_EMAIL[constants.FAILURE], { error }),
};
