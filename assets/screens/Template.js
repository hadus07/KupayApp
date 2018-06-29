import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Template extends Component {
    render() {
        return (
            <View style={s.cont}>
                <Text>Coming soon...</Text>
            </View>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});