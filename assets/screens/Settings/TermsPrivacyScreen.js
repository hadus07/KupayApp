import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import I18n from '../../i18n';
import colors from '../../colors';

import Template from '../Template';

export default class TermsPrivacyScreen extends Component {
    render() {
        return (
            <ScrollView style={s.cont}>
                <View style={s.innerCont}>
                    <Text style={s.title}>1. Title of the Privacy and Terms</Text>
                    <Text style={s.contentText}>{I18n.t('termsPrivacyContent')}</Text>
                    <Text style={s.title}>2. Title of the Privacy and Terms</Text>
                    <Text style={s.contentText}>{I18n.t('termsPrivacyContent')}</Text>
                    <Text style={s.title}>3. Title of the Privacy and Terms</Text>
                    <Text style={s.contentText}>{I18n.t('termsPrivacyContent')}</Text>
                    <Text style={s.title}>4. Title of the Privacy and Terms</Text>
                    <Text style={s.contentText}>{I18n.t('termsPrivacyContent')}</Text>
                </View>
            </ScrollView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        padding: 20,
    },
    innerCont: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        margin: 5,
        color: colors.blue,
        fontWeight: '600',
    },
    contentText: {
        color: colors.gray,
        textAlign: 'left',
    },


});
