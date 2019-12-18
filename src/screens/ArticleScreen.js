import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';

const ArticleScreen = ({ navigation }) => {

    const id = navigation.getParam('id');

    const article = useSelector((state) => state.blog.find((item) => item.id === id));

    return(
        <View style={style.view}>
            <Text style={style.title}>{article.title}</Text>
            <Text style={style.content}>{article.content}</Text>
        </View>
    );
}

ArticleScreen.navigationOptions = ({ navigation }) => {

    const id = navigation.getParam('id');
    
    return {
        headerRight : <TouchableOpacity onPress={() => navigation.navigate('EditArticle', {id : id})}>
                <Feather name="edit" size={30} style={{marginRight : 15}} />
            </TouchableOpacity>
    };
}

const style = StyleSheet.create({
    view : {
        padding : 15
    },
    title : {
        fontSize : 24
    },
    content : {
        fontSize : 18
    }
});

export default ArticleScreen;