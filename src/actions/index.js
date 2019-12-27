import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    ERROR
} from './types';
import jsonServer from '../api/jsonServer';

export const fetchArticles = () => async dispatch => {
    try{
        const response = await jsonServer.get('/blogposts');
        dispatch({
            type : FETCH_ARTICLES,
            payload : response.data
        });
    }catch(err){
        dispatch({
            type : ERROR,
            payload : err.message
        });
    }
}

export const addArticle = (data, callback) => async dispatch => {
    
    try{
        const response = await jsonServer.post("/blogposts",{ ...data });
        callback();
        dispatch({
            type : ADD_ARTICLE,
            payload : response.data
        });
    }catch(err){
        dispatch({
            type : ERROR,
            payload : err.message
        });
    }
}

export const editArticle = (data, callback) => {
    callback();
    return({
        type : EDIT_ARTICLE,
        payload : data
    });
}

export const deleteArticle = (id, callback) => {
    callback();
    return ({
        type : DELETE_ARTICLE,
        payload : id
    })
}