import 'react-native';
import renderer from 'react-test-renderer';
import { Redux } from 'utils';
import { store } from 'store';
import LoginScreen from '../index';

test('LoginScreen renders correctly', () => {
  const tree = renderer.create(Redux.reduxStoreWrapper(LoginScreen, store)).toJSON();
  expect(tree).toMatchSnapshot();
});
