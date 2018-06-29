import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    AsyncStorage,
} from 'react-native';
import colors from '../colors';
import I18n from '../i18n';


export default class LanguageSelection extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {langName: '🇺🇿 O\'zbek', locale: 'uz'},
                {langName: '🇺🇸 English', locale: 'en'},
                {langName: '🇷🇺 Русский', locale: 'ru-RU'},
                {langName: '🇰🇷 한국어', locale: 'ko-KR'},
            ],
            selectedLanguage: '',
        };
    }

    render() {
        return (
            <SafeAreaView style={s.cont}>
                <StatusBar barStyle='default' backgroundColor={colors.blue}/>
                <FlatList
                    data={this.state.data}
                    contentContainerStyle={s.list}
                    keyExtractor={(item, locale) => item.locale}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                I18n.locale = item.locale;
                                this.props.navigation.navigate('PhoneNumberEntry');
                            }}
                        >
                            <View style={s.langCont}>
                                <Text style={s.langText}>{item.langName}</Text>
                            </View>
                        </TouchableOpacity>
                        
                )}/>
            </SafeAreaView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 9,
        justifyContent: 'center',
    },
    langCont: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 1,
        padding: 10,
    },
    langText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.blue,
        marginTop: 10,
    },
});
