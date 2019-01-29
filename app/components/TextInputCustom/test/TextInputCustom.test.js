import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TextInputCustom from '../index';

test('TextInputCustom renders correctly', () => {
  const tree = renderer
    .create(<TextInputCustom onChangeText={() => {}} placeholder="" secureTextEntry={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
