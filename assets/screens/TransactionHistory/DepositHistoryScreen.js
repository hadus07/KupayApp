import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native';
import colors from '../../colors';

export default class RechargeHistoryScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            historyData: [
                {type: 'Deposit Account', date: 'March 19, 21:30', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 20, 21:31', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 23, 20:30', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 18, 21:30', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 24, 21:31', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 25, 20:30', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 17, 21:30', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 26, 21:31', amount: '10000', number: '010-8234-3232'},
                {type: 'Deposit Account', date: 'March 27, 20:30', amount: '10000', number: '010-8234-3232'},
            ],
        };
    }
    
    render() {
        return (
            <SafeAreaView style={s.cont}>
                <FlatList
                    data={this.state.historyData}
                    keyExtractor={(item, date) => item.date}
                    renderItem={({item}) => (
                        <View style={s.mainCont}>
                            <View style={s.leftInfoCont}>
                                <Text style={[s.leftInfo, {color: 'black'}]}>{item.type}</Text>
                                <Text style={[s.leftInfo, {color: colors.gray}]}>{item.date}</Text>
                                <Text style={[s.leftInfo, {color: colors.green}]}>{item.amount}</Text>
                            </View>
                            <View style={s.rightInfoCont}>
                                <Text style={s.rightInfo}>{item.number}</Text>
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const s = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    mainCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#555',
        shadowOffset: {height: 2},
        shadowOpacity: 0.3,
        elevation: 1,
        marginVertical: 3,
        marginHorizontal: 8
    },
    leftInfoCont: {
        marginLeft: 10,
        paddingVertical: 7,
        width: '50%'
    },
    rightInfoCont: {
        paddingRight: 10,
    },
    leftInfo: {
        color: colors.gray,
        fontSize: 12,
    },
    rightInfo: {
        color: colors.green,
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
    }
});