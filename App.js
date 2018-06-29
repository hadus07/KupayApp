import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import RootNavigation from './assets/RootNavigation';
import LoginStack from './assets/LoginStack'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state ={};
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('logged').then(value => {
            this.setState({ isLoggedIn: value });
        });
    }
    render() {
        if(this.state.isLoggedIn === 'true') {
            return <RootNavigation />;
        }else {
            return <LoginStack />;
        }
    }
}