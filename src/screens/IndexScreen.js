import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';


const IndexScreen = () => {

    const articles = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            title : "Post #1",
            content : "This is the first post"
        });
    },[]);

    return(
        <View>
            <FlatList
                data={articles}
                keyExtractor={(article) => article.id}
                renderItem={({ article }) => {
                    <View style={style.row}>
                        <Text style={style.title}>{article.title}</Text>
                        <Feather name="trash" style={style.icon} />
                    </View>
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    row : {
        flexDirection : row,
        justifyContent : 'space-between',
        paddingHorizontal : 5
    },
    title : {
        fontSize : 16
    },
    icon : {
        fontSize : 24
    }
});

export default IndexScreen;