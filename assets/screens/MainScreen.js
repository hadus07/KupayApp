import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
import colors from '../colors';
import I18n from '../i18n';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Template from './Template';

export default class MainScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            balance: 10000,
            bonus: 1000,
            name: 'Alex Specimen',
            number: '010-3231-9843',
        };
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={s.statusBarIos} />
                <SafeAreaView style={s.cont}>
                    <StatusBar backgroundColor={colors.blue} barStyle='light-content' />
                    <LinearGradient colors={[colors.blue, colors.green]} style={s.headerCont}>

                        <View style={s.userCont}>
                            <Ionicons name='md-contact' size={28} color='white' />
                            <View style={{marginLeft: 10}}>
                                <Text style={s.userText}>{this.state.name}</Text>
                                <Text style={s.userText}>{this.state.number}</Text>
                            </View>
                        </View>

                        <View style={s.accountStatusCont}>
                            <View style={s.balanceCont}>
                                <Text style={s.accountText}>{I18n.t('balance')}</Text>
                                <Text style={s.accountText}>₩{this.state.balance}</Text>
                            </View>
                            <View style={s.separater}/>
                            <View style={s.balanceCont}>
                                <Text style={s.accountText}>{I18n.t('bonus')}</Text>
                                <Text style={s.accountText}>₩{this.state.bonus}</Text>
                            </View>
                        </View>

                        <View style={s.notificationCont}>
                            <Text style={s.notificationText}>{I18n.t('goodDay')}</Text>
                            <Text style={s.notificationText}>{I18n.t('todayPromotionOnRecharges')}</Text>
                            <Text style={s.notificationText}>{I18n.t('todayPromotionOnOthers')}</Text>
                        </View>

                    </LinearGradient>

                    <View style={s.topupCont}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('RechargeBalance');
                            }}
                        >
                            <View style={s.buttonCont}>
                                <MaterialCommunityIcons name='currency-krw' size={28} style={s.buttonIcon}/>
                                <Text style={s.buttonText}>{I18n.t('rechargeBalance')}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={s.separater} />
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('TransactionHistory');
                            }}
                        >
                            <View style={s.buttonCont}>
                                <MaterialCommunityIcons name='file-document-box' size={28} style={s.buttonIcon}/>
                                <Text style={s.buttonText}>{I18n.t('transactionHistory')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={s.activityCont}>
                        <View style={[s.activityRow, s.horizontalBar]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('RechargeMobileNumbers');
                                }}
                                style={[s.activityTouchableOpacity, s.verticalBar]}
                            >
                                <View style={s.activityButton}>
                                    <Image source={require('../images/recharge.png')}   style={s.activityIcon}/>
                                    <Text style={s.activityText}>{I18n.t('rmn')}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('PayForCommunalBills');
                                }}
                                style={s.activityTouchableOpacity}
                            >
                                <View style={s.activityButton}>
                                    <Image source={require('../images/communal.png')}   style={s.activityIcon}/>
                                    <Text style={s.activityText}>{I18n.t('payForCommunalBills')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={s.activityRow}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('InternationalCallingCard');
                                }}
                                style={[s.activityTouchableOpacity, s.verticalBar]}
                            >
                                <View style={s.activityButton}>
                                    <Image source={require('../images/keypad.png')}   style={s.activityIcon}/>
                                    <Text style={s.activityText}>{I18n.t('internationalCallingCard')}</Text>
                                    <Text style={s.activityText}>{I18n.t('This08411')}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('CurrencyConverter');
                                }}
                                style={s.activityTouchableOpacity}
                            >
                                <View style={s.activityButton}>
                                    <Image source={require('../images/calc.png')}   style={s.activityIcon}/>
                                    <Text style={s.activityText}>{I18n.t('currencyConverter')}</Text>
                                    <Text style={s.activityText}>{I18n.t('realTime')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const s = StyleSheet.create({
    statusBarIos: {
        width: '100%',
        height: 100,
        position: 'absolute',
        backgroundColor: colors.blue,
    },
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerCont: {
        flex: 4,
        backgroundColor: colors.blue,
        width: '100%',
        //alignItems: 'center'
    },
    topupCont: {
        flex: 1.3,
        backgroundColor: colors.blue,
        width: '90%',
        borderRadius: 5,
        marginTop: -40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 1
    },
    activityCont: {
        flex: 6,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    userCont: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        alignSelf: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    userText: {
        color: 'white',
        fontSize: 10,
    },
    accountStatusCont: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    balanceCont: {
        alignItems: 'center',
        width: 100,
    },
    accountText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    separater: {
        backgroundColor: 'white',
        width: 1,
        height: '70%',
        opacity: 0.5
    },
    notificationCont: {
        flex: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    notificationText: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 12,
    },
    buttonCont: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
    },
    buttonIcon: {
        color: 'white',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },

    activityIcon: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    activityText: {
        fontSize: 12,
        color: colors.gray,
    },
    activityButton: {
        alignItems: 'center',
    },
    activityTouchableOpacity: {
        flex: 1,
        justifyContent: 'center',
    },
    activityRow: {
        flexDirection: 'row',
        flex: 1,
    },
    verticalBar: {
        borderRightWidth: 1,
        borderRightColor: 'rgba(1,1,1,0.2)',
    },
    horizontalBar: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(1,1,1,0.2)',
    },
});
