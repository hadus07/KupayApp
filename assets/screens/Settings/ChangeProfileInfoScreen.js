import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import I18n from '../../i18n';
import colors from '../../colors';
import Template from '../Template';

export default class ChangeProfileInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.inputs = {};
        this.state = {
            name: 'Alex Specimen',
            number: '010-3231-9843',
        };

        this.focusNextField = this.focusNextField.bind(this);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView style={{flex: 1}} behavior='height' enabled>
                    <SafeAreaView style={s.cont}>

                        <View style={s.changeNameCont}>
                            <Text style={s.changeProfileInfoText}>{I18n.t('changeNameInBox')}</Text>
                            <TextInput
                                style={s.inputBox}
                                keyboardType='default'
                                maxLength={30}
                                placeholder='Full Name'
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                onChangeText={name => this.setState({name: name})}
                                value={this.state.name}
                                returnKeyType='done'
                                onSubmitEditing={() => {this.focusNextField('phoneNumber');}}
                                ref={input => {this.inputs.name = input}}
                            />
                        </View>

                        <View style={s.changePhoneNumberCont}>
                            <Text style={s.changeProfileInfoText}>{I18n.t('changePhoneNumberInBox')}</Text>
                            <TextInput
                                style={s.inputBox}
                                keyboardType='phone-pad'
                                maxLength={15}
                                placeholder='+00 000 000 00 00'
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                onChangeText={(number) => this.setState({number})}
                                value={this.state.number}
                                returnKeyType='done'
                                onSubmitEditing={() => {this.focusNextField('password');}}
                                ref={input => {this.inputs.phoneNumber = input}}
                            />
                        </View>

                        <View style={s.loginPasswordCont}>
                            <Text style={s.changeProfileInfoText}>{I18n.t('inputPassword')}</Text>
                            <TextInput
                                password={true}
                                style={s.loginPasswordBox}
                                keyboardType='numeric'
                                maxLength={4}
                                placeholder='••••'
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                returnKeyType='done'
                                ref={input => {this.inputs.password = input}}
                            />
                        </View>

                        <TouchableOpacity>
                            <View style={s.changeButtonCont}>
                                <Text style={s.changeButton}>{I18n.t('change')}</Text>
                            </View>
                        </TouchableOpacity>

                    </SafeAreaView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    changeNameCont: {
        margin: 10,
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 30,
    },
    changeProfileInfoText: {
        color: colors.gray,
        margin: 10,
        textAlign: 'center',
        fontSize: 12,
    },
    changePhoneNumberCont: {
        margin: 10,
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 30,
    },
    inputBox: {
        borderWidth: 1,
        height: 35,
        width: '80%',
        textAlign: 'center',
        borderColor: colors.blue,
        color: colors.green,
        fontSize: 14,
        fontWeight: '600',
        paddingVertical: 4,
        backgroundColor: 'white',
        marginTop: '-1%',
        // marginVertical: 1,
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
        marginTop: '-1%',
    },
    changeButtonCont: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: colors.blue,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        marginBottom: 20,
    },
    changeButton: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 14,
        fontSize: 14
    },
});
