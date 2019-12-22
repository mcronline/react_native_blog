import React from 'react'
import { View, Text, StyleSheet} from 'react-native';

const ArticleRow = (props) => {

    return(
        <View style={style.row}>
            <Text style={style.title}>{item.title}</Text>
            <Feather name="trash" style={style.icon} />
        </View>
    );
}

const style = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1
    },
    title : {
        fontSize : 18
    },
    icon : {
        fontSize : 24
    }
});

export default ArticleRow;