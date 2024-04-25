import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Correctly importing Picker from @react-native-picker/picker

const StartPage = ({ navigation }) => {
    const [difficulty, setDifficulty] = useState('easy');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Memory Game Instructions</Text>
            <Text style={styles.instructions}>
                Discover matching pairs by flipping cards. Choose a difficulty level to begin your game.
            </Text>
            <Picker
                selectedValue={difficulty}
                style={styles.picker}
                onValueChange={(itemValue) => setDifficulty(itemValue)}
                mode="dropdown" // Optional: specify the picker mode (dialog or dropdown)
            >
                <Picker.Item label="Easy (3x2)" value="easy" />
                <Picker.Item label="Medium (4x3)" value="medium" />
                <Picker.Item label="Hard (4x4)" value="hard" />
            </Picker>
            <Button
                title="Start Game"
                onPress={() => navigation.navigate('GamePage', { difficulty })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 2,
        width: '90%',
        marginLeft: 18,
        marginBottom: 9,
        backgroundColor:'#32a852'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:'red'
    },
    instructions: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color:'pink'
    },
    picker: {
        width: '80%',
        marginBottom: 20,
    },
});

export default StartPage;
