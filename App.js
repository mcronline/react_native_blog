import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import AddArticleScreen from './src/screens/AddArticleScreen';
import EditArticleScreen from './src/screens/EditArticleScreen';

const rootStack = createStackNavigator({
    Index : IndexScreen,
    ShowArticle : ArticleScreen,
    AddArticle : AddArticleScreen,
    EditArticle : EditArticleScreen
},{
    initialRouteName : 'Index',
    defaultNavigationOptions : {
        title : 'Blogs'
    }
})

const Navigation = createAppContainer(rootStack);

const store = createStore(reducer);

export default () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}