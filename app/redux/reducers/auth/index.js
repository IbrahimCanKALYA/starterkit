/* @flow */
import * as ActionTypes from 'actions/auth';

const initialState = {
  isLoading: false,
  error: false,
  errorDescription: '',
  login: false,
};

export default function auth(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN_EMAIL.REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
        errorDescription: '',
      };
    }
    case ActionTypes.LOGIN_EMAIL.SUCCESS: {
      return {
        ...state,
        login: true,
        isLoading: false,
        error: false,
        errorDescription: '',
      };
    }
    case ActionTypes.LOGIN_EMAIL.FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorDescription: action.error.message,
      };
    }
    default:
      return state;
  }
}
