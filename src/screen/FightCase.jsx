import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const FightCase = () => {
    const [userInput, setUserInput] = useState('');
    const [questions, setQuestions] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // First API call
            const response1 = await axios.post('https://f00e-34-145-18-211.ngrok-free.app/generate', { input: userInput });
            const output = response1.data.output;

            // Second API call with the required data structure
            const response2 = await axios.post('http://10.0.2.2:8080/api/responses', { userInput: userInput, response: output });
            setQuestions([response2.data.question1, response2.data.question2, response2.data.question3, response2.data.question4]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your text"
                value={userInput}
                onChangeText={setUserInput}
            />
            <Button title="Submit" onPress={handleSubmit} disabled={loading} />
            <ScrollView contentContainerStyle={styles.questionsContainer}>
                {questions.map((question, index) => (
                    <View key={index} style={styles.questionBox}>
                        <Text>{question}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    questionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    questionBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FightCase;