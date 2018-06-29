import React from 'react';
import {
    View,
    StatusBar,
    Text
} from 'react-native';

import colors from '../colors';
import I18n from '../i18n';

export default class SpalshScreen extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LanguageSelection');
        },1000);
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content' backgroundColor={colors.blue}/>
                <View style={{flex: 1, backgroundColor: colors.blue, alignItems: 'center'}}>
                    <View style={{flex: 4, justifyContent: 'flex-end',}}>
                        <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>{I18n.t('appName')}</Text>
                    </View>

                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', fontSize: 12}}>{I18n.t('moto')}</Text>
                    </View>

                    <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 10}}>
                        <Text style={{color: 'white', fontSize: 12}}>{I18n.t('copyright')}</Text>
                    </View>
                </View>
            </View>
        );
    }
}