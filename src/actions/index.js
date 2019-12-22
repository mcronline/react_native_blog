import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from './types';

export const addArticle = (data, callback) => {

    const id = Math.floor(Math.random() * 99999);
    
    return({
        type : ADD_ARTICLE,
        payload : { id, ...data }
    });
}

export const editArticle = (data, callback) => {

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