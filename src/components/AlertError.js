import React from 'react';
import { Alert } from 'react-native';

export default message => {

    Alert.alert(
        'We got a problem...',
        message,
        [
            {text : 'Close', onPress : () => {}}
        ]
        
    );
};