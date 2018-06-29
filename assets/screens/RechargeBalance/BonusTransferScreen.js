import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from 'react-native';
import colors from '../../colors';
import I18n from '../../i18n';
import Entypo from 'react-native-vector-icons/Entypo';

export default class BonusTransferScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bonus: '10000',
            balance: '0',
        };
    };

    render() {
        return (
            <SafeAreaView style={s.cont}>
                <View style={s.mainCont}>
                    <View style={s.infoCont}>
                        <Text style={s.boldText}>{I18n.t('bonus')}</Text>
                        <View style={s.boxCont}>
                            <Text style={{padding: 10, textAlign: 'center'}}>{this.state.bonus}</Text>
                        </View>
                    </View>
                    <Entypo name='arrow-bold-right' size={30} color={colors.blue}/>
                    <View style={s.infoCont}>
                        <Text style={s.boldText}>{I18n.t('balance')}</Text>
                        <View style={s.boxCont}>
                            <Text style={{padding: 10, textAlign: 'center'}}>{this.state.balance}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        temp = this.state.bonus;
                        if(temp!==0) {
                            this.setState({
                                balance: temp,
                                bonus: 0
                            });
                        }
                    }}
                >
                    <View style={s.buttonCont}>
                        <Text style={s.buttonText}>{I18n.t('transferBonus')}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    mainCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    infoCont: {
        width: '50%',
        alignItems: 'center',
    },
    boxCont: {
        borderWidth: 1,
        borderColor: colors.blue,
        width: '50%',
        borderRadius: 2,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonCont: {
        width: '80%',
        backgroundColor: colors.blue,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
    },
    buttonText: {
        color: 'white',
        padding: 20,
    },
    boldText: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: -5,
    },
});