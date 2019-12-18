import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ArticleForm = (props) => {

    const { title, setTitle } = useState(props.title);
    const { content, setContent } = useState(props.content);

    return(
        <View>
            <Text>Title</Text>
            <TextInput
                value={title}
                placeholder="Title"
                onChangeText={setTitle}
            />
            <Text>Content</Text>
            <TextInput
                value={content}
                placeholder="Content"
                onChangeText={setContent}
            />
            <Button
                title="Save Article"
                onPress={onSubmit}
            />
        </View>
    );
}

const style = StyleSheet.create({

});

export default ArticleForm;