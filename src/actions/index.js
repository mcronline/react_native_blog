import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from './types';

export const addArticle = (data) => dispatch => {

    const id = Math.floor(Math.random() * 99999);

    dispatch({
        type : ADD_ARTICLE,
        payload : { id, ...data }
    });
}

export const editArticle = (data) => dispatch => {

    dispatch({
        type : EDIT_ARTICLE,
        payload : data
    });
}