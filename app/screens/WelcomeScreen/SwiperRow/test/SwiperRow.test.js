import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SwiperRow from '../index';

test('SwiperRow renders correctly', () => {
  const tree = renderer
    .create(<SwiperRow text="" button={false} buttonText="Start" onPressButton={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
