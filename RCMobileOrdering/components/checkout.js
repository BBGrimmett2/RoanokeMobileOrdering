import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { auth, fireDB, user } from "../firebase";


import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*

function CompletedOrderScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> your order has been submitted</Text>
      </View>
    );
  }

*/

function Checkout({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello Username</Text>
            <Text>order: Items list and cost</Text>
            <Text>Time: Estimated time</Text>
            <Text>payment: Estimated payment</Text>
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate('CompletedOrderScreen', {
                    })
                }}>

                {/* onPress={navigation.navigate('CompletedOrderScreen')}> */}
                {/* {/*}           // style={styles.r_corner}>* */}
                <Text> COMPLETE ORDER </Text>
            </TouchableHighlight>


        </View>
    );
};

/*
const Stack = createNativeStackNavigator();
function Checkout() {
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ title: 'Hello Username'}} />
        <Stack.Screen name="CompletedOrderScreen" component={CompletedOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

*/


export default Checkout;