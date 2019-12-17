import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

const navigation = createStackNavigator({
    Index : IndexScreen
},{
    initialRouteName : 'Index',
    defaultNavigationOptions : {
        title : 'Blogs'
    }
})

const store = createStore(reducer);

const Navigation = createAppContainer(navigation);

export default <Provider store={store}>
    <Navigation />
</Provider>