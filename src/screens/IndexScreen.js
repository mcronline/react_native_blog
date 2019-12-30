import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { fetchArticles, deleteArticle } from '../actions';
import ArticleRow from '../components/ArticleRow';

const IndexScreen = ({ navigation }) => {

    const articles = useSelector( state => state.blog );
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchArticles());
    },[]);
    
    if(articles.length <= 0) return <Text>No Articles</Text>;

    return(
        <View>
            <FlatList
                data={articles}
                keyExtractor={(article) => 'article-'+article.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowArticle', {id : item.id})}>
                            <ArticleRow
                                onDelete={() => dispatch(deleteArticle(item.id, () => navigation.navigate('Index')))}
                                title={item.title}
                        />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight :
            <TouchableOpacity onPress={() => navigation.navigate('AddArticle')}>
                <Feather name="plus" size={30} style={{marginRight : 15}} />
            </TouchableOpacity>
    };
}

const style = StyleSheet.create({
    
});

export default IndexScreen;