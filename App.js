import React from 'react';

import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import AddArticleScreen from './src/screens/AddArticleScreen';
import EditArticleScreen from './src/screens/EditArticleScreen';

import LoadingModal from './src/components/LoadingModal';

const rootStack = createStackNavigator({
    Index : IndexScreen,
    ShowArticle : ArticleScreen,
    AddArticle : AddArticleScreen,
    EditArticle : EditArticleScreen
},{
    initialRouteName : 'Index',
    defaultNavigationOptions : {
        title : 'Blog'
    }
});

const Navigation = createAppContainer(rootStack);

const store = createStore(reducer, applyMiddleware(thunk));

export default () => {

    return (

        <Provider store={store}>
            <Navigation />
            <LoadingModal message="Please Wait..." />
        </Provider>
    )
}