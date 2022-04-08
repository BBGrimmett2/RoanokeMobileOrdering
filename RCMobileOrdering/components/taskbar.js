import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 import LoginScreen from './LoginScreen';
 import HomeScreen from './HomeScreen';
 import AccountScreen from './AccountScreen';


  const Tab = createBottomTabNavigator();
  
  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={LoginScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  }
  
  export default MyTabs;

//   /* make account order and cart
 

const styles = StyleSheet.create({

    taskbar: {
        flex: 1,
//        position: 'absolute',
        bottom: 0
      //  bottom: 75,
//        right: 75,
       // alignItems: "center",
      //  backgroundColor: "blue",
    //    padding: 10,
//        borderRadius: 50
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
  //      right: 75,
//        bottom: 75,
        backgroundColor: "#0782F9",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});