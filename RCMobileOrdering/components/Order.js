import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './ItemScreen';
import FoodTypeSelectionScreen from './FoodCategories';
import FoodOptions from './FoodListItems';

const OrderStack = createNativeStackNavigator();
function Order() {
  return (
    <OrderStack.Navigator>
        <OrderStack.Screen options={{ headerShown: false }} name="Item" component={Item} />
        <OrderStack.Screen options={{ headerShown: false }} name="TypeSelection" component={FoodTypeSelectionScreen} />
        <OrderStack.Screen options={{ headerShown: false }} name="ItemSelection" component={FoodOptions} /> 
    </OrderStack.Navigator>
  );
}

export default Order;