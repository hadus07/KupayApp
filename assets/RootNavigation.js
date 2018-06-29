import React from 'react';
import {
    Text,
    View,
    AsyncStorage
} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom, TabBarTop} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from './colors';
import I18n from './i18n';

import Template from './screens/Template';
import MainScreen from './screens/MainScreen';

import CreditCardScreen from './screens/RechargeBalance/CreditCardScreen';
import BankAccountScreen from './screens/RechargeBalance/BankAccountScreen';
import BonusTransferScreen from './screens/RechargeBalance/BonusTransferScreen';

import RechargeHistoryScreen from './screens/TransactionHistory/RechargeHistoryScreen';
import DepositHistoryScreen from './screens/TransactionHistory/DepositHistoryScreen';

import SettingsScreen from './screens/Settings/SettingsScreen';
import ChangeProfileInfoScreen from './screens/Settings/ChangeProfileInfoScreen';
import ChangeLanguageScreen from './screens/Settings/ChangeLanguageScreen';
import ChangePasswordScreen from './screens/Settings/ChangePasswordScreen';
import AboutCompanyScreen from './screens/Settings/AboutCompanyScreen';
import TermsPrivacyScreen from './screens/Settings/TermsPrivacyScreen';

import RechargeMobileNumberScreen from './screens/RechargeMobileNumberScreen';

import InternationalCallingCardScreen from './screens/InternationalCallingCardScreen';


const RechargeBalanceTab = TabNavigator(
    {
        'Check/Credit Card': {screen: CreditCardScreen},
        'Bank Acoount': {screen: BankAccountScreen},
        'Bonus Transfer': {screen: BonusTransferScreen},
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        lazy: true,
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: false,
            activeTintColor: colors.blue,
            inactiveTintColor: colors.gray,
            showLabel: true,
            style: {
                backgroundColor: 'white',
                elevation: 0,
            },
            indicatorStyle: {
                backgroundColor: colors.blue,
                height: 4,
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 12
            }
        }
    },
);

const TransactionHistoryTab = TabNavigator(
    {
        'Recharge History': {screen: RechargeHistoryScreen},
        'Balance History': {screen: DepositHistoryScreen},
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        lazy: true,
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: false,
            activeTintColor: colors.blue,
            inactiveTintColor: colors.gray,
            swipeEnabled: true,
            showLabel: true,
            style: {
                backgroundColor: 'white',
                elevation: 0,
            },
            indicatorStyle: {
                backgroundColor: colors.blue,
                height: 4,
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 12,
            }
        }
    },
);


//Recharge mobile numbers navigation
const RechargeMobileNumbersTab = TabNavigator(
    {
        '🇧🇩 Bangladesh': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+880' currency='ò/TK' />},
        '🇰🇭 Cambodia': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+855' currency='៛/KHR' />},
        '🇮🇩 Indonesia': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+62' currency='Rp/IDR' />},
        '🇰🇿 Kazakhstan': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+7' currency='KZT' />},
        '🇰🇬 Kyrgyzstan': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+996' currency='тыйын/KGS' />},
        '🇳🇵 Nepal': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+977' currency='रु/NPR' />},
        '🇵🇭 Philippines': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+63' currency='₱/PHP' />},
        '🇷🇺 Russia': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+7' currency='₽/RUB' />},
        '🇱🇰 Sri Lanka': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+94' currency='රු/LKR' />},
        '🇹🇯 Tajikistan': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+992' currency='cомонӣ/TJS' />},
        '🇺🇿 Uzbekistan': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+998' currency="SO'M" />},
        '🇻🇳 Vietnam': {screen: props => <RechargeMobileNumberScreen {...props} countryCode='+84' currency='₫/VND' />},
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        lazy: true,
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            scrollEnabled: true,
            upperCaseLabel: false,
            showIcon: false,
            activeTintColor: colors.blue,
            inactiveTintColor: colors.gray,
            showLabel: true,
            style: {
                backgroundColor: 'white',
                elevation: 0,
                height: 60,
                justifyContent: 'center',
            },
            indicatorStyle: {
                backgroundColor: colors.blue,
                height: 4,
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 12
            },
        },
    },
);


const MainScreenStack = StackNavigator(
    {
        Home: {screen: MainScreen},
        RechargeBalance: {
            screen: RechargeBalanceTab,
            navigationOptions: {
                headerTitle: I18n.t('rechargeBalance'),
            },
        },
        TransactionHistory: {
            screen: TransactionHistoryTab,
            navigationOptions: {
                headerTitle: I18n.t('transactionHistory'),
            },
        },
        RechargeMobileNumbers: {
            screen: RechargeMobileNumbersTab,
            navigationOptions: {
                headerTitle: I18n.t('rmn'),
            },
        },
        InternationalCallingCard: {
            screen: InternationalCallingCardScreen,
            navigationOptions: {
                headerTitle: I18n.t('internationalCallingCard'),
            },
        },
        PayForCommunalBills: {
            screen: Template,
            navigationOptions: {
                headerTitle: I18n.t('payForCommunalBills'),
            },
        },
        CurrencyConverter: {
            screen: Template,
            navigationOptions: {
                headerTitle: I18n.t('currencyConverter'),
            },
        },
    },
    {
        headerMode: 'screen',
        headerTintColor: 'white',
            gestureEnabled: true,
            navigationOptions: {
                headerTitle: I18n.t('rechargeBalance'),
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                    height: 60,
                    elevation: 0,
                },
                headerTitleStyle: {
                    fontSize: 14
                },
            },
    },
);


// Settings Navigation
const SettingsScreenStack = StackNavigator(
    {
        SettingsHome: {
            screen: SettingsScreen,
            navigationOptions: {
                headerTitle: I18n.t('settings'),
            },
        },
        ChangeProfileInfo: {
            screen: ChangeProfileInfoScreen,
            navigationOptions: {
                headerTitle: I18n.t('changeProfileInfo'),
            },
        },
        ChangeLanguage: {
            screen: ChangeLanguageScreen,
            navigationOptions: {
                headerTitle: I18n.t('changeLanguage'),
            },
        },
        ChangePassword: {
            screen: ChangePasswordScreen,
            navigationOptions: {
                headerTitle: I18n.t('changePassword'),
            },
        },
        Transactions: {
            screen: TransactionHistoryTab,
            navigationOptions: {
                headerTitle: I18n.t('transactionHistory'),
            },
        },
        AboutCompany: {
            screen: AboutCompanyScreen,
            navigationOptions: {
                headerTitle: I18n.t('aboutCompany'),
            },
        },
        // ContactUs: {screen: ContactUsScreen},
        TermsPrivacy: {
            screen: TermsPrivacyScreen,
            navigationOptions: {
                headerTitle: I18n.t('privacy'),
            },
        }
    },
    {
        headerTintColor: 'white',
        gestureEnabled: true,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.blue,
                height: 60,
                elevation: 0,
            },
            headerTitleStyle: {
                fontSize: 14
            },
        },
    }
);


const RootNavigation = TabNavigator(
    {
        Main: {screen: MainScreenStack},
        Explore: {screen: Template},
        Messages: {screen: Template},
        Settings: {screen: SettingsScreenStack},
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: colors.darkblue,
            inactiveTintColor: '#777',
            showIcon: true,
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 10,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderTopColor: 'rgba(1,1,1,0.2)',
                paddingTop: 3
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({tintColor}) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Main') {
                    iconName = `ios-home`;
                }else if (routeName === 'Explore') {
                    iconName = `ios-compass`;
                }else if (routeName === 'Messages') {
                    iconName = `ios-mail`;
                }else if (routeName === 'Settings') {
                    iconName = `ios-settings`;
                }
                return (<Ionicons name={iconName} size={30} color={tintColor} />);
            },
        }),
    }
);

export default RootNavigation;