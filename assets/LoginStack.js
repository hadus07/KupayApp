import React from 'react';
import {StackNavigator} from 'react-navigation';

import RootNavigation from './RootNavigation';

import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
import PhoneNumberEntryScreen from './screens/PhoneNumberEntryScreen';
import SplashScreen from './screens/SplashScreen';

const LoginStack = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
        },
        LanguageSelection: {
            screen: LanguageSelectionScreen,
        },
        PhoneNumberEntry: {
            screen: PhoneNumberEntryScreen,
        },
        Root: {
            screen: RootNavigation,
        },
    },
    {
        headerMode: 'none',
    },
);

export default LoginStack;