import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ReceiptScreen from './ReceiptScreen';

const HomeStack = createNativeStackNavigator();
const HomeComponent = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
        <HomeStack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen options={{ headerShown: true, headerBackVisible:false }} name="Receipts" component={ReceiptScreen} /> 
    </HomeStack.Navigator>
  );
}

export default HomeComponent;