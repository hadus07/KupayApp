import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import I18n from '../../i18n';
import colors from '../../colors';
import Template from '../Template';

export default class ChangePasswordScreen extends Component {

    constructor(props) {
        super(props);
        this.inputs = {};
        this.state = {
            oldPassword: '',
            newPassword: '',
        }
        this.focusNextField = this.focusNextField.bind(this);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{flex: 1}} behavior='height' enabled>
                    <SafeAreaView style={s.cont}>
                        <View style={s.previousLoginPasswordCont}>
                            <Text style={s.text}>{I18n.t('prevPassword1')}</Text>
                            <Text style={s.textSmall}>{I18n.t('prevPassword2')}</Text>
                            <TextInput
                                value={this.state.oldPassword}
                                password={true}
                                style={s.loginPasswordBox}
                                keyboardType='numeric'
                                maxLength={4}
                                placeholder='••••'
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                returnKeyType='done'
                                onSubmitEditing={() => {this.focusNextField('two');}}
                                ref={input => {this.inputs.one = input}}
                            />
                        </View>

                        <View style={s.newLoginPasswordCont}>

                            <View style={s.newPasswordInputCont}>
                                <Text style={s.text}>{I18n.t('inputNewPassword')}</Text>
                                <TextInput
                                    value={this.state.oldPassword}
                                    password={true}
                                    style={s.loginPasswordBox}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='••••'
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    onSubmitEditing={() => {this.focusNextField('three');}}
                                    ref={input => {this.inputs.two = input}}
                                />
                            </View>

                            <View style={s.newPasswordInputCont}>
                                <Text style={s.text}>{I18n.t('pleaseOneMoreTime')}</Text>
                                <TextInput
                                    value={this.state.newPassword}
                                    password={true}
                                    style={s.loginPasswordBox}s
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='••••'
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    ref={input => {this.inputs.three = input}}
                                    onChangeText={input => {this.setState({newPassword: input})}}
                                />
                            </View>
                        </View>

                        <TouchableOpacity>
                            <View style={s.confirmButtonCont}>
                                <Text style={s.confirmButton}>{I18n.t('confirm')}</Text>
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'space-evenly',

    },
    text: {
        color: colors.gray,
        margin: 10,
        textAlign: 'center',
        fontSize: 12,
    },
    textSmall: {
        color: 'red',
        margin: 10,
        fontSize: 12,
        textAlign: 'center',
    },
    previousLoginPasswordCont: {
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    newLoginPasswordCont: {
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    newPasswordInputCont: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    loginPasswordCont: {
        margin: 10,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    loginPasswordBox: {
        borderWidth: 1,
        height: 35,
        width: '30%',
        textAlign: 'center',
        borderColor: colors.blue,
        color: colors.green,
        fontSize: 16,
        paddingVertical: 4,
        backgroundColor: 'white',
        marginVertical: 10,
        marginTop: '-1%'
    },

    confirmButtonCont: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: colors.blue,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        marginBottom: 20,
    },
    confirmButton: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 14,
        fontSize: 14
    },
});
