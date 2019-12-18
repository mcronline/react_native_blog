import React from 'react';
import { StyleSheet } from 'react-native';
import ArticleForm from '../components/ArticleForm';
import { addArticle } from '../actions';
import { useDispatch } from 'react-redux';

const AddArticleScreen = () => {

    const dispatch = useDispatch();

    return(
        <ArticleForm onSubmit={(title, content) => dispatch(addArticle({title, content}))}/>
    );
}

const style = StyleSheet.create({

});

export default AddArticleScreen;