import React from 'react';
import { StyleSheet } from 'react-native';
import ArticleForm from '../components/ArticleForm';
import { editArticle } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const EditArticleScreen = ({ navigation }) => {

    const id = navigation.getParam('id');

    const article = useSelector((state) => state.blog.find((item) => item.id === id))
    const dispatch = useDispatch();

    return(
        <ArticleForm initialValues={article} onSubmit={(title,content) => dispatch(editArticle({id, title, content}, () => navigation.pop()))} />
    );
}

const style = StyleSheet.create({

});

export default EditArticleScreen;