import React from 'react';
import { Text, View } from 'react-native';
import Login from './login/login'; // Import the Login component
import YourExercises from './exercises/yourExercises';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <YourExercises/>
    </View>
  );
}