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
import TaskBar from './components/Taskbar';

import HomeScreen from './components/HomeScreen';
import FoodTypeSelectionScreen from './components/FoodTypeSelector';
import FoodOptions from './components/FoodOptions';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
{/* {/*}      <Tabs/> */}
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

        <Stack.Screen options={{ headerShown: false }} name="TaskBar" component={TaskBar} /> 

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