import 'react-native';
import renderer from 'react-test-renderer';
import { Redux } from 'utils';
import { store } from 'store';
import WelcomeScreen from '../index';

test('WelcomeScreen renders correctly', () => {
  const tree = renderer.create(Redux.reduxStoreWrapper(WelcomeScreen, store)).toJSON();
  expect(tree).toMatchSnapshot();
});
