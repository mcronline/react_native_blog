import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { addArticle } from '../actions';


const IndexScreen = () => {

    const articles = useSelector( state => state.blog );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addArticle({
            title : "Post #1",
            content : "This is the first post"
        }));
    },[]);
    
    if(articles.length <= 0) return <Text>No Articles</Text>;

    return(
        <View>
            <FlatList
                data={articles}
                keyExtractor={(article) => 'article-'+article.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={style.row}>
                                <Text style={style.title}>{item.title}</Text>
                                <Feather name="trash" style={style.icon} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
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

export default IndexScreen;