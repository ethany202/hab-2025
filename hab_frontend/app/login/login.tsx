import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Login: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSignUp = () => {
    if (!name || !username || !password || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'You have successfully signed up!', [
      { text: 'OK', onPress: () => router.push('/role-selection') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5FAFF', // Background color
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#12539B', // Header color
    fontFamily: 'Avenir', // Font family
  },
  label: {
    color: '#12539B', // Label color
    fontSize: 16,
    fontFamily: 'Avenir', // Font family
    fontWeight: '400',
    wordWrap: 'break-word',
    marginBottom: 8, // Spacing below the label
  },
  input: {
    height: 40,
    borderColor: '#94BBE5', // Input border color
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4, // Rounded corners
    backgroundColor: '#F5FAFF', // Input background color
  },
});

export default Login;