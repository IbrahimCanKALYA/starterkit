/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

class TextInputCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      focused: false,
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.getText = this.getText.bind(this);
  }

  onChangeText(text) {
    const {
      props: { onChangeText },
    } = this;
    this.setState({ text });
    onChangeText(text);
  }

  getText() {
    const {
      state: { text },
    } = this;
    return text;
  }

  setText(text) {
    this.setState({ text });
  }

  focus() {
    this.textInput.focus();
  }

  clear() {
    const {
      props: { onChangeText },
    } = this;
    this.text = '';
    onChangeText(this.text);
    this.textInput.clear();
  }

  render() {
    const {
      state: { focused, text },
    } = this;
    const {
      props: { secureTextEntry, placeholder },
    } = this;
    return (
      <View style={focused ? styles.focusedItemView : styles.itemView}>
        <TextInput
          ref={(inputRef) => {
            this.textInput = inputRef;
          }}
          value={text}
          onChangeText={this.onChangeText}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          style={styles.textInputStyle}
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

TextInputCustom.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};
TextInputCustom.defaultProps = {
  onChangeText: () => {},
  placeholder: '',
  secureTextEntry: false,
};

export default TextInputCustom;
