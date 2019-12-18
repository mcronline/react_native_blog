import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const ArticleForm = ({initialvalues = {title : '', content : ''}, onSubmit}) => {

    const { title, setTitle } = useState(initialvalues.title);
    const { content, setContent } = useState(initialvalues.content);
    const dispatch = useDispatch();

    return(
        <View style={style.inputArea}>
            <View>
                <Text style={style.label}>Title</Text>
                <TextInput
                    style={style.input}
                    value={title}
                    placeholder="Title"
                    onChangeText={setTitle}
                />
                <Text style={style.label}>Content</Text>
                <TextInput
                    style={style.input}
                    value={content}
                    placeholder="Content"
                    onChangeText={setContent}
                />
            </View>
            <Button
                title="Save Article"
                onPress={() => dispatch(onSubmit({title,content}))}
            />
        </View>
    );
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