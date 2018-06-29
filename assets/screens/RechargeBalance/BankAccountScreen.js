import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Picker,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import colors from '../../colors';
import I18n from '../../i18n';
import ModalSelector from 'react-native-modal-selector';

export default class BankAccountScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bank: '-',
            amount: '-',
            accountNumber: '123456789012345',
            receiver: 'Kupay',
        };
    }

    render() {
        const banks = [
            {key: 'bank-of-korea', label: 'Bank of Korea'},
            {key: 'korea-eximbank', label: 'Korea Eximbank'},
            {key: 'hana-bank', label: 'Hana bank'},
            {key: 'kb', label: 'Kookmin Bank (KB)'},
            {key: 'keb', label: 'Korea Exchange Bank (KEB)'},
            {key: 'kyongnam-bank', label: 'Kyongnam Bank'},
            {key: 'shinhan-bank', label: 'Shinhan Bank'},
            {key: 'pusan-bank', label: 'Pusan Bank'},
            {key: 'american-express', label: 'American Express'},
            {key: 'ibk', label: 'International Bank of Korea (IBK)'},
            {key: 'woori-bank', label: 'Woori Bank'},
            {key: 'deagu-bank', label: 'Deagu Bank'},
            {key: 'sc', label: 'Standard Chartered Bank (SC)'},
            {key: 'nh', label: 'Nong Hyup Bank (NH)'},
            {key: 'korea-development-bank', label: 'Korea Development Bank'},
            {key: 'hsbc', label: 'HSBC'},
        ];

        const amounts = [
            {key: 1000, label: '1000'},
            {key: 2000, label: '2000'},
            {key: 3000, label: '3000'},
            {key: 5000, label: '5000'},
            {key: 10000, label: '10.000'},
            {key: 20000, label: '20.000'},
            {key: 50000, label: '50.000'},
            {key: 100000, label: '100.000'},
            {key: 500000, label: '500.000'},
            {key: 1000000, label: '1.000.000'},
        ];
        return (
            <KeyboardAvoidingView style={{flex: 1}} enabled behavior='height'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={s.cont}>
                    <ModalSelector data={banks} initValue={I18n.t('selectBank')}
                        onChange={(option) => {this.setState({bank: option.label})}}
                        style={s.picker}
                        childrenContainerStyle={s.pickerChildren}
                        optionContainerStyle={s.pickerChildren}
                        cencelContainerStyle={s.pickerChildren}
                        selectTextStyle={{fontSize: 12}}
                        selectStyle={{borderRadius: 0,}}
                    />
                    <ModalSelector data={amounts} initValue={I18n.t('inputAmount')}
                        onChange={(option) => {this.setState({amount: option.label})}}
                        style={s.picker}
                        childrenContainerStyle={s.pickerChildren}
                        optionContainerStyle={s.pickerChildren}
                        cencelContainerStyle={s.pickerChildren}
                        selectTextStyle={{fontSize: 12}}
                        selectStyle={{borderRadius: 0,}}
                    />
                    <TouchableOpacity>
                        <View style={s.getButtonCont}>
                            <Text style={s.getButtonText}>{I18n.t('receiveAccount')}</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{marginBottom: -10, marginTop: 20, color: colors.gray, fontSize: 12}}>{I18n.t('sendAccountNumber')}</Text>

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={s.smsCont}>
                            <TextInput
                                style={s.phoneNumber}
                                keyboardType='phone-pad'
                                maxLength={13}
                                placeholder='+821074325653'
                                underlineColorAndroid='transparent'
                                textBreakStrategy='highQuality'
                                returnKeyType='done'   
                            />
                            <TouchableOpacity>
                                <View style={s.sendButton}>
                                    <Text style={{color: 'white'}}>Send</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>

                    <Text style={{marginBottom: -3, marginTop: 20, color: colors.gray, fontSize: 12}}>{I18n.t('bankAccountInfo')}</Text>
                    <View style={s.infoBox}>
                        <View style={s.infoItem}>
                            <Text style={{color: 'black', fontSize: 12}}>{I18n.t('bankName')}</Text>
                            <Text style={{color: colors.green, fontSize: 12}}>{this.state.bank}</Text>
                        </View>
                        <View style={s.infoItem}>
                            <Text style={{color: 'black', fontSize: 12}}>{I18n.t('amount')}</Text>
                            <Text style={{color: colors.green, fontSize: 12}}>{this.state.amount}</Text>
                        </View>
                        <View style={s.infoItem}>
                            <Text style={{color: 'black', fontSize: 12}}>{I18n.t('accountNumber')}</Text>
                            <Text style={{color: colors.green, fontSize: 12}}>{this.state.accountNumber}</Text>
                        </View>
                        <View style={s.infoItem}>
                            <Text style={{color: 'black', fontSize: 12}}>{I18n.t('receiver')}</Text>
                            <Text style={{color: colors.green, fontSize: 12}}>{this.state.receiver}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
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
    getButtonCont: {
        width: '70%',
        backgroundColor: colors.blue,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        borderRadius: 2,
    },
    getButtonText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 15,
        borderRadius: 2,
    },
    infoBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.blue,
        alignSelf: 'center',
        borderRadius: 2,
        // shadowColor: 'black',
        // shadowOffset: {width: 2, height: 2},
        // shadowOpacity: 0.7,
        // elevation: 5,
        backgroundColor: 'white',
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    smsCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    phoneNumber: {
        borderWidth: 1,
        height: '60%',
        width: '50%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        backgroundColor: 'white',
    },
    sendButton: {
        backgroundColor: colors.blue,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 2,
    },
    picker: {
        borderWidth: 1,
        borderColor: colors.blue,
        //borderRadius: 5,
    },
    pickerChildren: {
        backgroundColor: 'white',
        //borderRadius: 5,
    }
});
