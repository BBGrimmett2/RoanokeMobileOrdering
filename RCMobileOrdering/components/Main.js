import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { auth } from "../firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import Checkout from "./checkout";
import Order from "./Order"

const Tab = createBottomTabNavigator();

//NEXT STEPS: get at the bottom of home, no example screen.
//            tests
//            correct screens



//Most of the content in this component comes from:
//https://www.youtube.com/watch?v=gPaBicMaib4
//made by:
//Pradip Debnath
const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Order"
            backBehavior="order"

            screenOptions={{
                showLabel: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: "flex",
                    },
                    null,
                ],
                style: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen  //make order component to hold order navigation stack
                name="Order"
                component={Order}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 0,
                            }}
                        >
                            <Image
                                // Image found from:
                                // https://www.pngitem.com/middle/JhRxm_my-account-account-vector-icon-png-transparent-png/
                                source={require("../assets/home.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    // tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#e32f45" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Order
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Checkout}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 0,
                            }}
                        >
                            <Image
                                // Image found from:
                                // https://www.pinterest.com/pin/319122323605875875/
                                source={require("../assets/cart.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    // tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#e32f45" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Cart
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 0,
                            }}
                        >
                            <Image
                                // image found from:
                                // https://www.pngitem.com/middle/JhRxm_my-account-account-vector-icon-png-transparent-png/
                                source={require("../assets/account_icon.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    // tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#e32f45" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Account
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    taskbar: {
        flex: 1,
        //        position: 'absolute',
        bottom: 0,
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

//   /* make account order and cart
export default Main;
