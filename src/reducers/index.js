import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from '../actions/types';

const blogReducer = (state=[], action) => {
    
    switch(action.type) {

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
            return state.filter((article) => article.id !== action.payload.id);

        default:
            return state;
    }
}

export default combineReducers({
    blog : blogReducer
});