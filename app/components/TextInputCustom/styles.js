/* @flow */
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = {
  itemView: {
    marginTop: screenHeight / 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 5,
  },
  focusedItemView: {
    marginTop: screenHeight / 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 5,
  },
  textInputStyle: {
    textAlign: 'left',
    fontSize: 17,
    color: '#9A9A9A',
  },
};

export default styles;
