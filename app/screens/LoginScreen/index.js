/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInputCustom } from 'components';
import { FormValidation, Alert } from 'utils';
import * as AuthActions from 'actions/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceCall: false,
    };
  }

  emailLogin(): void {
    const params = {
      eMail: this.emailField.getText(),
      password: this.passwordField.getText(),
    };

    const {
      props: { loginEmail },
    } = this;

    if (!FormValidation.isEmpty(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen email giriniz!');
    } else if (!FormValidation.validateEmail(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen geçerli bir email giriniz!');
    } else if (!FormValidation.isEmpty(params.password)) {
      Alert.showInfo('Hata', 'Lütfen şifrenizi giriniz!');
    } else if (!FormValidation.validatePasswordLength(params.password)) {
      Alert.showInfo('Hata', 'Şifre en az 8 karakter olmalıdır!');
    } else {
      this.setState({ serviceCall: true });
      loginEmail(params.eMail, params.password);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.containerView}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Giriş</Text>
            <TextInputCustom
              ref={(ref) => {
                this.emailField = ref;
              }}
              placeholder="E-Mail"
            />
            <TextInputCustom
              ref={(ref) => {
                this.passwordField = ref;
              }}
              placeholder="Şifre"
              secureTextEntry
              returnKeyType="done"
            />
          </View>
          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            text="Login"
            onPress={() => {
              this.emailLogin();
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};
LoginScreen.defaultProps = {};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginEmail: (eMail, password) => dispatch(AuthActions.loginEmail.request(eMail, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
