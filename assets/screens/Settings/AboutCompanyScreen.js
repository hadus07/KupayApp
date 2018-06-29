import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import I18n from '../../i18n';
import colors from '../../colors';

import Template from '../Template';

export default class AboutCompanyScreen extends Component {
    render() {
        return (
            <SafeAreaView style={s.cont}>
                <View style={s.companyInfoCont}>
                    <View style={{alignItems: 'flex-start', alignSelf: 'center', width: '80%', marginLeft: 30}}>
                        <View style={s.iconTextCont}>
                            <MaterialCommunityIcons name='gmail' size={16} style={s.aboutIcons}/>
                            <Text style={s.companyInfoText}>{I18n.t('email')}: kupay.kr@gmail.com</Text>
                        </View>

                        <View style={s.iconTextCont}>
                            <FontAwesome name='phone-square' size={16} style={s.aboutIcons}/>
                            <Text style={s.companyInfoText}>{I18n.t('phone')}: 010 1234 5678</Text>
                        </View>

                        <View style={s.iconTextCont}>
                            <MaterialCommunityIcons name='file-multiple' size={16} style={s.aboutIcons}/>
                            <Text style={s.companyInfoText}>{I18n.t('license')}: 123-45-67890</Text>
                        </View>

                        <View style={s.iconTextCont}>
                            <Entypo name='location' size={16} style={s.aboutIcons}/>
                            <Text style={s.companyInfoText}>{I18n.t('address')}: 123 Room, 123 Name Road, Region-name, City</Text>
                        </View>
                    </View>

                    <Text style={s.logoText}>KUPAY</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyInfoCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTextCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    aboutIcons: {
        color: colors.blue,

    },
    companyInfoText: {
        color: colors.gray,
        margin: 5,
        textAlign: 'left',
        maxWidth: '70%'
    },
    logoText: {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: colors.blue,
        fontFamily: 'Arial',
        marginTop: 100,
        marginBottom: 100,
        alignSelf: 'center'
    },

});
