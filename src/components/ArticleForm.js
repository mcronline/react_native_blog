import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IndexScreen = ({ title, content, onSubmit }) => {

    const { title, setTitle } = useState('');
    const { content, setContent } = useState('');

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

export default IndexScreen;