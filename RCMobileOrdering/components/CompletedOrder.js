import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    SafeAreaView,
    Dimensions,
    FlatList,
    ScrollView
} from "react-native";
import { auth, fireDB, user } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import masterMenu from "../foodlist.js"
import { useState } from 'react';



//use a function that adds the same things to firebase that it does to the
//screen.

//pull from firebase? or use the cart parameter?
//also put total price in checkout screen.

const CompletedOrderScreen = ({ route }) => {
    const navigation = useNavigation();
    const { cart } = route.params;
   
    const result = cart.reduce((total, currentValue) => total = total + currentValue.price, 0);

    const renderListItem = ({ item }) => {
        if (true) {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("ItemDetailsScreen", { itemObj: item })}>
                    <Text>{item.name} ${item.price}</Text>
                </TouchableOpacity>
            );
        }
    };

    return (
        //everything written that we like so far. =========
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: 10 }}>
            <Text> RC Mobile Order </Text>
            <Text> Receipt </Text>
           
            <ScrollView>
                <FlatList
                    data={cart}
                    renderItem={renderListItem}
                />
            </ScrollView>

            <Text>Total: ${result}</Text>
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate("HomeScreen");
                }}
            >
                <Text> Go Back Home </Text>
            </TouchableHighlight>
        </View>

    );
}


export default CompletedOrderScreen;

const style = StyleSheet.create({
    header: {
        //flex: 1,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
    },
    viewer: {
        flex: 1,
        height: "100%",
    },
    listItem: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "grey",
        margin: 1,
    },
    pic: {
        //borderColor: "#0782F9",
        //borderWidth: 3,
        borderRadius: 10,
        height: 40,
        flex: 1,
        width: null,
        resizeMode: "contain",
    },
});
