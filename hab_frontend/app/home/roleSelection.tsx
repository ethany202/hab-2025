import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import UserType from '../types/UserType';

const RoleSelection: React.FC = () => {
    const router = useRouter();

    const navigation = useNavigation();
    const previousRouteName = navigation.getState()?.routes[navigation.getState()?.index - 1]?.name;

    const handleRoleSelection = (role: UserType) => {
        Alert.alert('Role Selected', `You have selected: ${role}`);
        // Here, you can navigate to a specific dashboard or home screen
        if (role === UserType.Patient) {
            // Replace this with AppContext in the future
            // Push to PatientHome
            router.replace('/exercises/yourExercises');
        } else {
            // Push to CaregiverHome
            router.replace('/exercises/setExercises');
        }
    };

    const handleBackButton = () => {
        if (previousRouteName) {
            router.replace(previousRouteName);
        } else {
            router.replace('/');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>How would you like to use this app?</Text>

            <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection(UserType.Patient)}>
                <Text style={styles.buttonText}>As a Patient</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 10 }} />
            <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection(UserType.Caregiver)}>
                <Text style={styles.buttonText}>As a Caregiver</Text>
            </TouchableOpacity>            <View style={{ marginVertical: 20 }} />
            <Button title="Back" onPress={() => handleBackButton()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
    backgroundColor: '#F6FAFF', // Background color
    alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#12539B',
        fontFamily: 'Avenir',
    },
    button: {
        backgroundColor: '#669EDD',
        padding: '5%',
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 20,
        textAlign: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    role: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default RoleSelection;
