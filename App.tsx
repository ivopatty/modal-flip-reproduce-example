import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <HomeNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
