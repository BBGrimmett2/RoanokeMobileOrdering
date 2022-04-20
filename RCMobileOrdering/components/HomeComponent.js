import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CompletedOrderScreen from './CompletedOrder';

const HomeStack = createNativeStackNavigator();
const HomeComponent = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
        <HomeStack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen options={{ headerShown: false }} name="CompletedOrderScreen" component={CompletedOrderScreen} /> 
    </HomeStack.Navigator>
  );
}

export default HomeComponent;