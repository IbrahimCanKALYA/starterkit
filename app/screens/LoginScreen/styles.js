/* @flow */
import { Dimensions } from 'react-native';

const screenHeight: number = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerView: {
    flex: 0.95,
    backgroundColor: '#fff',
    margin: 15,
  },
  title: {
    color: '#19769F',
    fontSize: 30,
    marginTop: screenHeight / 30,
    marginBottom: screenHeight / 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: '#FFF',
  },
};

export default styles;
