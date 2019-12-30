import React from 'react';
import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    ERROR,
    LOADING_SCREEN
} from '../actions/types';
import AlertError from '../components/AlertError';
import _ from 'lodash';

const blogReducer = (state=[], action) => {
    
    switch(action.type) {

        case FETCH_ARTICLES:
            return action.payload;

        case FETCH_ARTICLE:
            //state.forEach(item => item.id === action.payload.id ? state : 
            if(!state)
                return action.data;
            else{
                return state.map((article) => {
                    if(article.id === action.payload.id)
                        return action.payload;
                    else
                        return article;
                });
            }

        case ADD_ARTICLE:
            return [...state, action.payload];

        case EDIT_ARTICLE:
            return state.map((article) => {
                if(article.id === action.payload.id)
                    return action.payload;
                else
                    return article;
            });

        case DELETE_ARTICLE:
            return state.filter((article) => article.id !== action.payload);

        case ERROR:
            AlertError(action.payload);

        default:
            return state;
    }
}

const loadingScreenReducer = (state = false, action) => {

    switch(action.type){

        case LOADING_SCREEN:
            return action.payload;

        default:
            return state;
    }
}

export default combineReducers({
    blog : blogReducer,
    loadingScreen : loadingScreenReducer
});