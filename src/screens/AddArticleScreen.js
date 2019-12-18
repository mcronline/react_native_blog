import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArticleForm from '../components/ArticleForm';
import { AddArticle } from '../actions';

const AddArticleScreen = () => {

    return(
        <View>
            <ArticleForm title="" content="" onSubmit={AddArticle}/>
        </View>
    );
}

const style = StyleSheet.create({

});

export default AddArticleScreen;