import 'react-native';
import renderer from 'react-test-renderer';
import { Redux } from 'utils';
import { store } from 'store';
import MessagingScreen from '../index';

test('MessagingScreen renders correctly', () => {
  const tree = renderer.create(Redux.reduxStoreWrapper(MessagingScreen, store)).toJSON();
  expect(tree).toMatchSnapshot();
});
