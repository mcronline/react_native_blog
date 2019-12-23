import React from 'react';
import { Alert } from 'react-native';

const AlertError = ({ message }) => {

    return Alert.alert(
        'We got a problem...',
        message,
        [
            {text : 'Close', onPress : () => {}}
        ]
        
    );
}

export default AlertError;