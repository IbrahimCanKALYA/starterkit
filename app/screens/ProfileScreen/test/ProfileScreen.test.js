import 'react-native';
import renderer from 'react-test-renderer';
import { Redux } from 'utils';
import { store } from 'store';
import ProfileScreen from '../index';

test('ProfileScreen renders correctly', () => {
  const tree = renderer.create(Redux.reduxStoreWrapper(ProfileScreen, store)).toJSON();
  expect(tree).toMatchSnapshot();
});
