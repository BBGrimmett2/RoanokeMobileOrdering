import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { auth, fireDB, userID } from "../firebase";


import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*


Luke notes: in itemScreen.js use the functions to add to cart.
get tab bar working in all screens
test
checkout firebase
cleanup
checkout screen congrats should go back to original list


function CompletedOrderScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> your order has been submitted</Text>
      </View>
    );
  }

*/

// const changeData = async () => {
//   const cityRef = fireDB.collection("users").doc(userID);

//   // Set the 'userID' field of the cart
//   const res = await cityRef.update({ cart: "Cup food" });
// };

// changeData();

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