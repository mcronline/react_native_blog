import { combineReducers } from 'redux';
import {
    ADD_ARTICLE,
    EDIT_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from '../actions/types';

const blogReducer = (state=[], action) => {

    switch(action.type) {

        case ADD_ARTICLE:
            return [...state, action.payload]

        case EDIT_ARTICLE:
            return state.map((article) => {
                if(article.id === action.payload.id)
                    return action.payload;
                else
                    return article
            });
    }
}

export default combineReducers({
    blog : blogReducer
});