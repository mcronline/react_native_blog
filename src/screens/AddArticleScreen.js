import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArticleForm from '../components/ArticleForm';
import { AddArticle } from '../actions';

const AddArticleScreen = () => {

    return(
        <View>
            <ArticleForm onSubmit={(title, content) => AddArticle(title, content)}/>
        </View>
    );
}

const style = StyleSheet.create({

});

export default AddArticleScreen;