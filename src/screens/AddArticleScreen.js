import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArticleForm from '../components/ArticleForm';
import { addArticle } from '../actions';
import { useDispatch } from 'react-redux';

const AddArticleScreen = () => {

    const dispatch = useDispatch();

    return(
        <View>
            <ArticleForm onSubmit={(title, content) => dispatch(addArticle({title, content}))}/>
        </View>
    );
}

const style = StyleSheet.create({

});

export default AddArticleScreen;