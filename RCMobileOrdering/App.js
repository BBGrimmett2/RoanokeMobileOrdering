import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './components/LoginScreen';
import { LogBox } from 'react-native';
import MyTabs from './components/taskbar';
import Item from './components/ItemScreen';
import FoodTypeSelectionScreen from './components/FoodCategories';
import FoodOptions from './components/FoodListItems';
import CompletedOrder from './components/CompletedOrder';

LogBox.ignoreLogs(['Setting a timer', 'AsyncStorage has been extracted']);

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen options={{ headerShown: false }} name="TaskBar" component={MyTabs} /> 
        <Stack.Screen options={{ headerShown: false }} name="TypeSelection" component={FoodTypeSelectionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ItemSelection" component={FoodOptions} />
        <Stack.Screen options={{ headerShown: false }} name="CompletedOrderScreen" component={CompletedOrder} /> 
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