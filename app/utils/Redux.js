/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';


// For wrapping components with redux...
type Props = any;
function reduxStoreWrapper(MyComponent: any, store: any, ...props: any) {
  return () => class StoreWrapper extends Component<Props> {
    render() {
      return (
        <Provider store={store}>
          <MyComponent
            {...{
              ...this.props,
              ...props,
            }}
          />
        </Provider>
      );
    }
  };
}

module.exports = {
  reduxStoreWrapper,
};
