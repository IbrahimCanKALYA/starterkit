import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

test('Button renders correctly', () => {
  const tree = renderer.create(<Button text="Button" buttonStyle={{}} buttonTextStyle={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
