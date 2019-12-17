import React from 'react';
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

export default createAppContainer(navigation);