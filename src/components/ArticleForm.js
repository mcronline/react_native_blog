import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ArticleForm = ({initialValues , onSubmit}) => {

    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);
    
    return(
        <View style={style.inputArea}>
            <View>
                <Text style={style.label}>Title</Text>
                <TextInput
                    style={style.input}
                    value={title}
                    placeholder="Title"
                    onChangeText={text => setTitle(text)}
                />
                <Text style={style.label}>Content</Text>
                <TextInput
                    style={style.input}
                    value={content}
                    placeholder="Content"
                    onChangeText={text => setContent(text)}
                />
            </View>
            <Button
                title="Save Article"
                onPress={() => onSubmit(title,content)}
            />
        </View>
    );
}

ArticleForm.defaultProps = {
    initialValues : {
        title : '',
        content : ''
    }
}

const style = StyleSheet.create({
    inputArea : {
        padding : 15
    },
    label : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    input : {
        fontSize : 20,
        marginBottom : 15,
        borderColor : "#555",
        borderWidth : 1,
        paddingLeft : 5,
        height : 40
    }
});

export default ArticleForm;