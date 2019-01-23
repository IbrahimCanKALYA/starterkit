/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

type Props = any;

type State = {
  text: string,
  focused: boolean,
};
class TextInputCustom extends Component<Props, State> {
  static defaultProps: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      focused: false,
    };

    (this: any).onChangeText = this.onChangeText.bind(this);
    (this: any).getText = this.getText.bind(this);
  }

  onChangeText(text: string): void {
    const {
      props: { onChangeText },
    } = this;
    this.setState({ text });
    onChangeText(text);
  }

  getText(): string {
    const {
      state: { text },
    } = this;
    return text;
  }

  setText(text: string): void {
    this.setState({ text });
  }

  focus(): void {
    (this: any).textInput.focus();
  }

  clear(): void {
    const {
      props: { onChangeText },
    } = this;
    (this: any).text = '';
    onChangeText((this: any).text);
    (this: any).textInput.clear();
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
            (this: any).textInput = inputRef;
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
