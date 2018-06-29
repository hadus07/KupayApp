import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    AsyncStorage,
} from 'react-native';
import colors from '../colors';
import I18n from '../i18n';
import Checkbox from 'react-native-checkbox';

export default class PhoneNumberEntryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '🇰🇷 +82',
            code: '',

            acceptedTerms: false,
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={s.cont}>
                    <StatusBar barStyle='default' />
                    <View style={s.inputCont}>
                        <TextInput
                            keyboardType='phone-pad'
                            value={this.state.phoneNumber}
                            style={s.phoneNumber}
                            maxLength={18}
                            underlineColorAndroid='transparent'
                            textBreakStrategy='highQuality'
                            returnKeyType='done'
                            onChangeText={input => {
                                this.setState({phoneNumber: input});
                            }}
                        />
                        <TextInput
                            keyboardType='numeric'
                            value={this.state.code}
                            style={s.code}
                            maxLength={6}
                            underlineColorAndroid='transparent'
                            textBreakStrategy='highQuality'
                            returnKeyType='done'
                            onChangeText={input => {
                                this.setState({code: input});
                            }}
                        />
                    </View>
                    <View style={s.buttonCont}>
                        <Checkbox
                            label={I18n.t('iAcceptAgreement')}
                            labelStyle={s.checkBoxLabel}
                            checkboxStyle={s.checkBox}
                            onChange={(checked) => {
                                this.setState({acceptedTerms: checked});
                            }}
                        />
                        <TouchableOpacity
                            style={{width: '100%', marginTop: 10}}
                            onPress={() => {
                                if(this.state.acceptedTerms === true) {
                                    AsyncStorage.setItem('logged', 'true');
                                    this.props.navigation.navigate('Root');
                                }
                            }}
                        >
                            <View style={s.button}>
                                <Text style={{color: 'white', fontSize: 12, textAlign:'center'}}>{I18n.t('login')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}
const s = StyleSheet.create({
    cont: {
        flex: 1,
    },
    inputCont: {
        flex: 5,
        justifyContent: 'center',
    },
    buttonCont: {
        justifyContent: 'flex-end',
        alignItems:'center',
        flex: 1
    },
    phoneNumber: {
        width: '80%',
        borderBottomWidth: 1,
        textAlign: 'center',
        borderBottomColor: colors.blue,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        alignSelf: 'center',
    }, 
    code: {
        width: '40%',
        borderBottomWidth: 1,
        textAlign: 'center',
        borderBottomColor: colors.blue,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        alignSelf: 'center',
    },
    checkBox: {
        borderColor: colors.blue,
        borderWidth: 1,
        width: 12,
        height: 12,
    },
    checkBoxLabel: {
        color: colors.gray,
        fontSize: 12,
    },
    button: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
    },
});