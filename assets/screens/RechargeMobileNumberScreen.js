import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import I18n from '../i18n';
import colors from '../colors';
import ModalSelector from 'react-native-modal-selector';

export default class RechargeMobileNumberScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: this.props.countryCode,
            amount: '',
            deductedAmount: '',
            bonusAmount: '',
        };
    }

    customRender = () => {

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

        if(this.props.countryCode === '+998') {
            return (
                <TextInput
                    value={this.state.amount}
                    style={s.amountBox}
                    keyboardType='numeric'
                    maxLength={7}
                    placeholder='10000'
                    underlineColorAndroid='transparent'
                    textBreakStrategy='highQuality'
                    returnKeyType='done'
                    onChangeText={input => {this.setState({amount: input})}}
                />
            );
        }else {
            return (
                <ModalSelector data={amounts} initValue={I18n.t('chooseAmount')}
                    onChange={option => {this.setState({amount: option.label})}}
                    style={s.picker}
                    childrenContainerStyle={s.pickerChildren}
                    optionContainerStyle={s.pickerChildren}
                    cencelContainerStyle={s.pickerChildren}
                    selectTextStyle={{fontSize: 12}}
                    selectStyle={{borderRadius: 0}}
                />
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <SafeAreaView style={s.cont}>

                        <View>
                            <View style={s.phoneNumberCont}>
                                <Text style={s.phoneNumberText}>{I18n.t('enterPhoneNumber')}</Text>
                                <View style={s.phoneNumberCountryCode}>
                                    <TextInput
                                        style={s.phoneNumberBox}
                                        keyboardType='phone-pad'
                                        maxLength={13}
                                        underlineColorAndroid='transparent'
                                        textBreakStrategy='highQuality'
                                        returnKeyType='done'
                                        value={this.state.phoneNumber}
                                        onChangeText={input => {this.setState({phoneNumber: input})}}
                                    />
                                </View>
                            </View>

                            <View style={s.amountCont}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                                    <View
                                        style={{
                                            backgroundColor: colors.blue,
                                            height: 37,
                                            width: '30%',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{fontSize: 12, color: 'white', textAlign: 'center',}}>{this.props.currency}</Text>
                                    </View>
                                    {this.customRender()}
                                </View>
                            </View>
                        </View>
                        <View style={s.infoCont}>
                            <View style={s.infoRow}>
                                <Text style={s.infoTitle}>{I18n.t('deductedFromBalance')}</Text>
                                <Text style={s.infoText}>{this.state.deductedAmount}</Text>
                            </View>
                            <View style={s.infoRow}>
                                <Text style={s.infoTitle}>{I18n.t('bonusAmount')}</Text>
                                <Text style={s.infoText}>{this.state.bonusAmount}</Text>
                            </View>
                        </View>

                        <View style={s.buttonPos}>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={s.confirmCont}>
                                    <Text style={s.confirmText}>{I18n.t('makePayment')}</Text>
                                </View>
                            </TouchableOpacity>
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
        justifyContent: 'space-around',
    },
    phoneNumberCountryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoCont: {
        borderColor: colors.blue,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    phoneNumberBox: {
        borderWidth: 1,
        height: 40,
        width: '100%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 12,
        paddingVertical: 6,
        backgroundColor: 'white',
    },
    amountBox: {
        borderWidth: 1,
        height: 40,
        width: '70%',
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        backgroundColor: 'white',
    },
    phoneNumberText: {
        color: colors.gray,
        marginBottom: 5,
    },
    amountText: {
        color: colors.gray,
        marginBottom: 5
    },
    infoText: {
        color: colors.green
    },
    infoTitle: {
        color: 'black'
    },
    confirmCont: {
        width: '100%',
        backgroundColor: colors.blue,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        //elevation: 7,
    },
    confirmText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 14,
        fontSize: 14
    },
    amountCont: {
        marginTop: 10,
    },
    picker: {
        borderWidth: 1,
        borderColor: colors.blue,
        width: '70%',
    },
    pickerChildren: {
        backgroundColor: 'white',
    }
});