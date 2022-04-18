//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import Taskbar from './components/taskbar';
import CompletedOrderScreen from './components/CompletedOrder'

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Taskbar" component={Taskbar} /> 
        <Stack.Screen options={{ headerShown: false }} name="CompletedOrderScreen" component={CompletedOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;