import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { auth } from "../firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import FoodOptions from "./FoodOptions";

const Tab = createBottomTabNavigator();

//doesnt work the first time you hit the button it doesnt go to the login screen.
//do not know why

//NEXT STEPS: get at the bottom of home, no example screen.
//            tests
//            correct screens
const MyTabs = () => {
    return (
        <Tab.Navigator
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
            <Tab.Screen
                name="Home"
                component={FoodOptions}
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
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={LoginScreen}
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
                                source={require("../assets/settings_icon.png")}
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
                                Settings
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
        shadowColor: "#800000",
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
export default MyTabs;
