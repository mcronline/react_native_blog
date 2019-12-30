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
        dispatchError();
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
        dispatch(loadingScreen(false));
        dispatch({
            type : ERROR,
            payload : err.message
        });
    }
}

export const editArticle = (data, callback) => async dispatch => {
    dispatch(loadingScreen(true));
    try{
        const response = await jsonServer.put(`/blogposts/${id}`,{...data});
        dispatch(loadingScreen(false));
        callback();
        dispatch({
            type : EDIT_ARTICLE,
            payload : data
        });
    }catch(err){
        dispatch(loadingScreen(false));
        dispatch({
            type : ERROR,
            payload : err.message
        });
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
        dispatch(loadingScreen(false));
        dispatch({
            type : ERROR,
            payload : err.message
        });
    }
}

const dispatchError = () => {
    dispatch(loadingScreen(false));
    dispatch({
        type : ERROR,
        payload : err.message
    });
}