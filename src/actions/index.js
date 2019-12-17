import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from './types';

export const addArticle = ({title, content}) => dispatch => {

    const id = Math.floor(Math.random * 99999) + 99999;

    dispatch({
        type : ADD_ARTICLE,
        payload : {
            id,
            title,
            content
        }
    });
}

export const editArticle = ({id, title, content}) => {

    dispatch({
        type : EDIT_ARTICLE,
        payload : {
            id,
            title,
            content
        }
    });
}