import React from 'react';
import { Text, View } from 'react-native';
import Login from './login'; // Import the Login component

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Login /> {/* Render the Login component */}
    </View>
  );
}