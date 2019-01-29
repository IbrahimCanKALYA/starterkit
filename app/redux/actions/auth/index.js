/* @flow */

import { Action } from 'utils';

export const LOGIN_EMAIL = Action.createRequestTypes('LOGIN_EMAIL');
export const loginEmail = {
  request: (eMail: string, password: string) => {
    Action.action(LOGIN_EMAIL[Action.REQUEST], { eMail, password });
  },
  success: () => {
    Action.action(LOGIN_EMAIL[Action.SUCCESS], null);
  },
  failure: (error: { error: boolean, message: string }) => {
    Action.action(LOGIN_EMAIL[Action.FAILURE], { error });
  },
};
