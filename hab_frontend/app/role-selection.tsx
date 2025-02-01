import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const RoleSelection: React.FC = () => {
    const router = useRouter();

    const handleRoleSelection = (role: string) => {
        Alert.alert('Role Selected', `You have selected: ${role}`);
        // Here, you can navigate to a specific dashboard or home screen
        // if (role === 'Patient') {
        //     router.push('/patient-home');
        // } else {
        //     router.push('/caregiver-home');
        // }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select Your Role</Text>

            <Button title="I am a Patient" onPress={() => handleRoleSelection('Patient')} />
            <View style={{ marginVertical: 10 }} />
            <Button title="I am a Caregiver" onPress={() => handleRoleSelection('Caregiver')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#F5FAFF',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#12539B',
    },
});

export default RoleSelection;
