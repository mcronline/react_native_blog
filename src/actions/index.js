import React, { useContext } from 'react';
import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    ERROR,
    LOADING_SCREEN
} from './types';
import jsonServer from '../api/jsonServer';

export const loadingScreen = value => async dispatch => {
    dispatch({
        type : LOADING_SCREEN,
        payload : value
    });
}

export const fetchArticles = () => async dispatch => {
    dispatch(loadingScreen(true));
    try{
        const response = await jsonServer.get('/blogposts');
        dispatch(loadingScreen(false));
        dispatch({
            type : FETCH_ARTICLES,
            payload : response.data
        });
    }catch(err){
        dispatchError(err.message, dispatch);
    }
}

export const addArticle = (data, callback) => async dispatch => {
    dispatch(loadingScreen(true));
    try{
        const response = await jsonServer.post("/blogposts",{ ...data }); 
        dispatch(loadingScreen(false));
        callback();
        dispatch({
            type : ADD_ARTICLE,
            payload : response.data
        });
    }catch(err){
        dispatchError(err.message, dispatch);
    }
}

export const editArticle = (id, data, callback) => async dispatch => {
    dispatch(loadingScreen(true));
    try{
        console.log(id);
        console.log(data);
        const response = await jsonServer.put(`/blogposts/${id}`,{...data});
        dispatch(loadingScreen(false));
        callback();
        dispatch({
            type : EDIT_ARTICLE,
            payload : data
        });
    }catch(err){
        dispatchError(err.message, dispatch);
    }
}

export const deleteArticle = (id, callback) => async dispatch => {
    try{
        const response = await jsonServer.delete(`/blogposts/${id}`);
        callback();
        console.log('delete '+id);
        dispatch ({
            type : DELETE_ARTICLE,
            payload : id
        })
    }catch(err){
        dispatchError(err.message, dispatch);
    }
}

const dispatchError = (message, dispatch) => {
    dispatch(loadingScreen(false));
    dispatch({
        type : ERROR,
        payload : message
    });
}