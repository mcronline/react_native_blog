import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

const store = createStore(reducer, applyMiddleware(thunk));

export default () => {

    const [ loading, setLoading ] = useState(false);
    const BlogContext = React.createContext();

    const value = {
        setLoadingScreen : setLoading
    }

    return (

        <Provider store={store}>
            <BlogContext.Provider value={value}>
                <Navigation />
            </BlogContext.Provider>
            <Modal visible={loading}>
                
            </Modal>
        </Provider>
    )
}