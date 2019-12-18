import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from './types';

export const addArticle = (data) => {

    const id = Math.floor(Math.random() * 99999);
    
    return({
        type : ADD_ARTICLE,
        payload : { id, ...data }
    });
}

export const editArticle = (data) => {

    return({
        type : EDIT_ARTICLE,
        payload : data
    });
}