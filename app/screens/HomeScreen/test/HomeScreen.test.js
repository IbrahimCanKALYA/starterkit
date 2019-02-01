import 'react-native';
import renderer from 'react-test-renderer';
import { Redux } from 'utils';
import { store } from 'store';
import HomeScreen from '../index';

test('HomeScreen renders correctly', () => {
  const tree = renderer
    .create(Redux.reduxStoreWrapper(HomeScreen, store))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
