import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    ERROR
} from './types';
import jsonServer from '../api/jsonServer';
import AlertError from '../components/AlertError';

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
    
    const id = Math.floor(Math.random() * 99999);
    try{
        const response = async () => jsonServer.post("/blogposts",{ id : id, ...data});
        console.log("ADDED");
        console.log(response);
        callback();
        dispatch({
            type : ADD_ARTICLE,
            payload : response.data
        });
    }catch(err){
        console.log("ERROR ON ADD");
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