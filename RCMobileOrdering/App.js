import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './components/LoginScreen';
// import HomeScreen from './components/HomeScreen';
// import AccountScreen from './components/AccountScreen';
// import Tabs from './components/taskbar';
import MyTabs from './components/taskbar';

import HomeScreen from './components/HomeScreen';
import FoodTypeSelectionScreen from './components/FoodCategories';
import FoodOptions from './components/FoodListItems';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TaskBar" component={MyTabs} /> 
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> 
        <Stack.Screen options={{ headerShown: false }} name="TypeSelection" component={FoodTypeSelectionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ItemSelection" component={FoodOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;