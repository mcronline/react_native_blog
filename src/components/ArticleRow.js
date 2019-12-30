import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ArticleRow = ({ onDelete, title }) => {

    const [ deleteIcon, setDeleteIcon ] = useState('trash');

    const deleteArticle = () => {
        setDeleteIcon('loader');

        Alert.alert(
            'Delete Article',
            `Are you sure you want to delete article "${title}"?`,
            [
                {text : 'Cancel', onPress : () => setDeleteIcon('trash')},
                {text : 'Delete', onPress : () => onDelete() }
            ]
        )
    }

    return(
        <View style={style.row}>
            <Text style={style.title}>{title}</Text>
            <TouchableOpacity onPress={() => deleteArticle()}>
                {deleteIcon === 'trash' ? 
                    <Feather name={deleteIcon} style={style.icon} /> :
                    <ActivityIndicator size="small" color="#000" />
                }
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1
    },
    title : {
        fontSize : 18
    },
    icon : {
        fontSize : 24
    }
});

export default ArticleRow;