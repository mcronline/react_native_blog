import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import Loader from '../../assets/img/loaders/tail-spin.svg';

const LoadingModal = ({ message }) => {

    const visible = useSelector( state => state.loadingScreen );
    
    return(
        <Modal 
            visible={visible}
            transparent={true}
        >
            <View style={style.modal}>
                <View style={style.box}>
                    <ActivityIndicator size="large" color="#000" />
                    <Text style={style.message}>{message}</Text>
                </View>
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    modal : {
        width : '100%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    box : {
        backgroundColor : 'white',
        borderRadius : 10,
        padding:25,
        justifyContent : 'center',
        alignItems : 'center'
    },  
    message : {
        paddingTop : 15
    },
    icon : {
        width : 100,
        height : 100
    }
});

export default LoadingModal;