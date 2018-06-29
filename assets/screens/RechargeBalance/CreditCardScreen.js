import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Picker,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import I18n from '../../i18n';
import Checkbox from 'react-native-checkbox';
import colors from '../../colors';

export default class Template extends Component {

    constructor(props) {
        super(props);
        this.inputs = {};
        this.state = {
            one: '',
            two: '',
            three: '',
            four: '',

            accountNumber: '',
            validDate: '',
            saveCardInfo: false,
            amount: '',
            birthDate: '',
            password: '',
        };

        this.focusNextField = this.focusNextField.bind(this);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='height' enabled>
                <SafeAreaView style={s.cont}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={s.cardNumberCont}>
                            <Text style={{fontSize: 12,color: colors.gray}}>{I18n.t('cardNumber')}</Text>
                            <View style={s.cardNumberBoxesCont}>
                                <TextInput
                                    value={this.state.one}
                                    style={s.cardNumberBox}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='1234'
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('two');}}
                                    ref={input => {this.inputs.one = input}}
                                    onChangeText={(input) => {
                                        this.setState({one: input});
                                    }}
                                />
                                <TextInput
                                    value={this.state.two}
                                    style={s.cardNumberBox}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='1234'
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('three');}}
                                    ref={input => {this.inputs.two = input}}
                                    onChangeText={(input) => {
                                        this.setState({two: input});
                                    }}
                                />
                                <TextInput
                                    value={this.state.three}
                                    style={s.cardNumberBox}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='12••'
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('four');}}
                                    ref={input => {this.inputs.three = input}}
                                    onChangeText={(input) => {
                                        this.setState({three: input});
                                    }}
                                />
                                <TextInput
                                    value={this.state.four}
                                    style={s.cardNumberBox}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    placeholder='••••'
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('validDate');}}
                                    ref={input => {this.inputs.four = input}}
                                    onChangeText={(input) => {
                                        this.setState({four: input});
                                        this.setState({
                                            accountNumber: this.state.one + this.state.two + this.state.three + this.state.four,
                                        });
                                    }}
                                />
                            </View>

                            <View style={s.validityCont}>
                                <View style={{width: '50%'}}>
                                    <Text style={{fontSize: 12,color: colors.gray}}>{I18n.t('validThru')}</Text>
                                    <TextInput
                                        value={this.state.validDate}
                                        style={s.cardValidBox}
                                        keyboardType='numeric'
                                        maxLength={5}
                                        placeholder='01/01'
                                        underlineColorAndroid='transparent'
                                        textBreakStrategy='highQuality'
                                        returnKeyType='done'
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => {this.focusNextField('amount');}}
                                        ref={input => {this.inputs['validDate'] = input}}
                                        onChangeText={input => {
                                            if(input.length === 2) {
                                                input = input + '/';
                                            }
                                            this.setState({validDate: input});
                                        }}
                                    />
                                </View>
                                <Checkbox
                                    label={I18n.t('savecardinfo')}
                                    labelStyle={s.checkBoxLabel}
                                    checkboxStyle={s.checkBox}
                                    onChange={() => {this.setState({saveCardInfo: !this.state.saveCardInfo})}}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                            <View style={s.amounCont}>
                                <Text style={{fontSize: 12,color: colors.gray}}>{I18n.t('inputAmount')}</Text>
                                <TextInput
                                    value={this.state.amount}
                                    style={s.amountBox}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    placeholder='10000'
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('birthDate')}}
                                    ref={input => {this.inputs['amount'] = input}}
                                    onChangeText={input => {this.setState({amount: input})}}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                            <View style={s.birthDateCont}>
                                <Text style={{fontSize: 12,color: colors.gray}}>{I18n.t('inputBirthDate')}</Text>
                                <TextInput
                                    value={this.state.birthDate}
                                    style={s.birthDateBox}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    placeholder='1995/10/18'
                                    underlineColorAndroid='transparent'
                                    textBreakStrategy='highQuality'
                                    returnKeyType='done'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {this.focusNextField('password');}}
                                    ref={input => {this.inputs['birthDate'] = input}}
                                    onChangeText={input => {
                                        if(input.length === 4) {
                                            input = input + '/'
                                        }
                                        if(input.length === 7) {
                                            input = input + '/'
                                        }
                                        this.setState({birthDate: input})
                                    }}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={s.cardPasswordCont}>
                            <Text style={{fontSize: 12,color: colors.gray}}>{I18n.t('twoDigitPassword')}</Text>
                            <TextInput
                                style={s.cardPasswordBox}
                                keyboardType='numeric'
                                maxLength={2}
                                placeholder='••'
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                secureTextEntry={true}
                                returnKeyType='done'
                                ref={input => {this.inputs['password'] = input}}
                                onChangeText={input => {this.setState({password: input})}}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <Text style={s.warning}>{I18n.t('warningCard')}</Text>

                    <TouchableOpacity onPress={() => {}}>
                        <View style={s.confirmCont}>
                            <Text style={s.confirmText}>{I18n.t('confirm')}</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    cardNumberBoxesCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    cardNumberBox: {
        borderWidth: 1,
        width: '22%',
        height: 30,
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        backgroundColor: 'white',
    },
    validityCont: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginTop: 20,
    },
    cardValidBox: {
        borderWidth: 1,
        height: 30,
        width: '44%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        backgroundColor: 'white',
    },
    amounCont: {
        width: '50%'
    },
    amountBox: {
        borderWidth: 1,
        height: 30,
        width: '80%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        backgroundColor: 'white',
    },
    birthDateCont: {
        width: '50%',
    },
    birthDateBox: {
        borderWidth: 1,
        height: 30,
        width: '80%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        backgroundColor: 'white',
    },
    cardPasswordBox: {
        borderWidth: 1,
        height: 30,
        width: '22%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        backgroundColor: 'white',
    },
    warning: {
        color: 'red',
        textAlign: 'center',
        fontSize: 12,
    },
    confirmCont: {
        width: '100%',
        backgroundColor: colors.blue,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
    },
    confirmText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 14,
        fontSize: 14
    },
    checkBox: {
        borderColor: colors.blue,
        borderWidth: 1,
        width: 18,
        height: 18,
    },
    checkBoxLabel: {
        color: colors.gray,
        fontSize: 12,
    },
});
