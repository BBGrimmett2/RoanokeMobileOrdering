import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { auth, fireDB, user } from "../firebase";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CompletedOrderScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> your order has been submitted</Text>
        <TouchableHighlight
         onPress={() => {
             navigation.navigate('TypeSelection');  //get it to go back to selection screen. have it get stuff
         
            }}>

            {/* onPress={navigation.navigate('CompletedOrderScreen')}> */}
{/* {/*}           // style={styles.r_corner}>* */}
            <Text> Go Back Home </Text>
      </TouchableHighlight>
      </View>
    );
  }

  export default CompletedOrderScreen;