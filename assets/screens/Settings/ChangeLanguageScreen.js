import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    Picker,
    Alert
} from 'react-native';

import I18n from '../../i18n';
import colors from '../../colors';
import Template from '../Template';
import ModalSelector from 'react-native-modal-selector';

export default class ChangeLanguageScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: ''
        }
    }
    render() {
        const languages = [
            { key: 'international', label: I18n.t('en') },
            { key: 'korean', label: I18n.t('ko') },
            { key: 'uzbekistan', label: I18n.t('uz') },
            { key: 'russia', label: I18n.t('ru') },
            { key: 'kazakhstan', label: I18n.t('kz') },
            { key: 'kyrgyzstan', label: I18n.t('kg') },
            { key: 'tajikistan', label: I18n.t('tj') },
            { key: 'srilanka', label: I18n.t('lk') },
            { key: 'indonesia', label: I18n.t('id') },
            { key: 'bangladesh', label: I18n.t('bd') },
            { key: 'nepal', label: I18n.t('np') },
            { key: 'cambodia', label: I18n.t('kh') },
            { key: 'philippines', label: I18n.t('ph') },
            { key: 'vietnam', label: I18n.t('vn') },
        ];

        return (
            <View style={{flex:1, justifyContent:'space-around', padding:50}}>

                <View style={s.languagesCont}>
                    <Text style={s.languagesText}>{I18n.t('appLanguage')}</Text>

                    <ModalSelector
                        data={languages}
                        selectStyle={s.picker}
                        selectTextStyle={{fontSize: 12}}
                        initValue={I18n.t('selectLanguage')}
                        childrenContainerStyle={s.pickerChildren}
                        optionContainerStyle={s.pickerChildren}
                        cencelContainerStyle={s.pickerChildren}
                        onChange={(option)=>{ Alert.alert(`${option.label} (${option.key.toUpperCase()}) is selected.`) }}>
                    </ModalSelector>

                </View>

                <TouchableOpacity>
                    <View style={s.useSelectedLanguageCont}>
                        <Text style={s.useSelectedLanguageButton}>{I18n.t('useSelectedLanguage')}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
    },
    languagesCont: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    picker: {
        borderColor: colors.blue,
        borderRadius: 0,
    },
    languagesText: {
        color: colors.gray,
        margin: 10,
        textAlign: 'center',
        fontSize: 12,
    },
    useSelectedLanguageCont: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: colors.blue,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 7,
        marginBottom: 20,
    },
    useSelectedLanguageButton: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 14,
        fontSize: 14
    },
    pickerChildren: {
        backgroundColor: 'white',
    }
});
