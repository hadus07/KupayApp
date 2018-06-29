import React from 'react';
import { 
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Keyboard,
    Image,
    TouchableOpacity
} from 'react-native';
import colors from '../colors';
import I18n from '../i18n';
import ModalSelector from 'react-native-modal-selector';


export default class InternationalCallingCardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bonusAmount: '',
            phoneNumber: '',
            amount: '',
        };
    }

    render() {
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={s.cont}>
                    
                    <View style={s.cardCont}>
                        <Image source={require('../images/this-card.png')} style={s.cardImage}/>
                        <Text style={s.cardText}>THIS CARD 08411</Text>
                    </View>

                    <View>
                        <Text style={{color: colors.gray}}>{I18n.t('enterPhoneNumber')}</Text>
                        <TextInput
                            value={this.state.phoneNumber}
                            style={s.phoneNumber}
                            keyboardType='numeric'
                            maxLength={13}
                            placeholder='010-2912-2434'
                            underlineColorAndroid='transparent'
                            textBreakStrategy='highQuality'
                            returnKeyType='done'
                            onChangeText={input => {
                                if(input.length === 3 || input.length === 8) {
                                    input = input + '-';
                                }
                                this.setState({phoneNumber: input});
                            }}
                        />
                        
                        <ModalSelector
                            data={amounts} 
                            initValue={I18n.t('chooseAmount')}
                            onChange={(option) => {this.setState({amount: option.label})}}
                            style={s.picker}
                            childrenContainerStyle={s.pickerChildren}
                            optionContainerStyle={s.pickerChildren}
                            cencelContainerStyle={s.pickerChildren}
                            selectTextStyle={{fontSize: 12}}
                            selectStyle={{borderRadius: 0,}}
                        />
                    </View>

                    <View style={s.infoCont}>
                        <Text style={{color: 'black'}}>{I18n.t('bonusAmount')}</Text>
                        <Text style={{color: colors.green}}>{this.state.bonusAmount}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {alert(this.state.amount)}}>
                        <View style={s.confirmCont}>
                            <Text style={s.confirmText}>{I18n.t('confirm')}</Text>
                        </View>
                    </TouchableOpacity>

                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
};

const s = StyleSheet.create({
    cont: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    cardCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.green,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.7,
        elevation: 6,
        padding: 15,
    },
    cardImage: {
        width: 100,
        height: 60,
    },
    cardText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    phoneNumber: {
        borderWidth: 1,
        height: 40,
        textAlign: 'center',
        borderColor: colors.blue,
        borderRadius: 2,
        color: colors.green,
        fontSize: 14,
        paddingVertical: 6,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    picker: {
        borderWidth: 1,
        borderColor: colors.blue,
    },
    pickerChildren: {
        backgroundColor: 'white',
        borderRadius: 5
    },
    infoCont: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.blue,
        justifyContent: 'space-between',
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
});