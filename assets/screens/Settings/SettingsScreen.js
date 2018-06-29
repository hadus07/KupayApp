// Jobir! Ajoyib deb hisoblayman!

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../colors';
import I18n from '../../i18n';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Template from '../Template';

export default class SettingsScreen extends Component {
    static navigationOptions = {

    }

    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex Specimen',
            number: '010-3231-9843',
        };
    }

    render() {
        return (
            <View style={s.cont}>

                <View style={s.profileInfoCont}>
                    <EvilIcons name='user' className='far' size={120} color={colors.blue} />
                    <View style={s.profileInfoTextCont}>
                      <Text style={s.profileInfoText}>{this.state.name}</Text>
                      <Text style={s.profileInfoText}>{this.state.number}</Text>
                    </View>
                </View>

                <View style={s.changeInfoCont}>
                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('ChangeProfileInfo') } }>
                        <View style={s.iconsCont}>
                            <FontAwesome style={s.settingIcons} name='user-plus' size={20}/>
                            <Text style={s.changeInfoText}>{I18n.t('changeProfileInfo')}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('ChangeLanguage') } }>
                        <View style={s.iconsCont}>
                            <MaterialIcons name='language' size={22} style={s.settingIcons}/>
                            <Text style={s.changeInfoText}>{I18n.t('changeLanguage')}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('ChangePassword') } }>
                        <View style={s.iconsCont}>
                            <MaterialCommunityIcons name='key-change' size={22} style={s.settingIcons}/>
                            <Text style={s.changeInfoText}>{I18n.t('changePassword')}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('Transactions') } }>
                        <View style={s.iconsCont}>
                            <MaterialCommunityIcons name='file-send' size={22} style={s.settingIcons}/>
                            <Text style={s.changeInfoText}>{I18n.t('transactions')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={s.companyInfoCont}>
                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('AboutCompany') } }
                    >
                      <Text style={s.companyInfoText}>{I18n.t('aboutCompany')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={s.companyInfoText}>{I18n.t('contactUs')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => { this.props.navigation.navigate('TermsPrivacy') } }
                    >
                      <Text style={s.companyInfoText}>{I18n.t('privacy')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


const s = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    profileInfoCont: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoTextCont: {
        marginTop: 5,
        alignItems: 'center'
    },
    profileInfoText: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: 'bold',
    },
    changeInfoCont: {
        marginTop: 20,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    changeInfoText: {
        fontSize: 12,
        color: colors.blue,
        fontWeight: 'bold',
    },
    companyInfoCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyInfoText: {
        margin: 12,
        color: colors.gray,
        fontSize: 12,
    },
    iconsCont: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    settingIcons: {
        color: colors.blue,
        marginRight: 3,
    },
    changeProfileInfoIcon: {
        width: 20,
        height: 20,
        borderWidth: 1,
    }
});
