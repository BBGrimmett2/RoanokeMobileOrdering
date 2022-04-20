import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetailsScreen from './ItemDetailsScreen';
import FoodTypeSelectionScreen from './FoodTypeSelectionScreen';
import FoodItemSelectionScreen from './FoodItemSelectionScreen';

const OrderStack = createNativeStackNavigator();
const Order = () => {
  return (
    <OrderStack.Navigator initialRouteName="FoodTypeSelectionScreen">
        <OrderStack.Screen options={{ headerShown: false }} name="ItemDetailsScreen" component={ItemDetailsScreen} />
        <OrderStack.Screen options={{ headerShown: false }} name="FoodTypeSelectionScreen" component={FoodTypeSelectionScreen} />
        <OrderStack.Screen options={{ headerShown: false }} name="FoodItemSelectionScreen" component={FoodItemSelectionScreen} /> 
    </OrderStack.Navigator>
  );
}

export default Order;