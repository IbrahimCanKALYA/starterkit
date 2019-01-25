/* @flow */
import {
  createRequestTypes, action, REQUEST, SUCCESS, FAILURE,
} from '../actionUtil';

export const LOGIN_EMAIL = createRequestTypes('LOGIN_EMAIL');
export const loginEmail = {
  request: (eMail: string, password: string) => action(LOGIN_EMAIL[REQUEST], { eMail, password }),
  success: () => action(LOGIN_EMAIL[SUCCESS], null),
  failure: (error: { error: boolean, message: string }) => action(LOGIN_EMAIL[FAILURE], { error }),
};
