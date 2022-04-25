import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from "react-native";
import { auth, fireDB, user } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function CompletedOrderScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <View style={styles.text}>
                <Text style={{fontSize:20, fontWeight:"700"}}> Your order has been submitted</Text>
            </View>
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate("FoodTypeSelectionScreen");
                }}
            >
                <Text> Go Back Home </Text>
            </TouchableHighlight>
        </View>
    );
}

export default CompletedOrderScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    },
    text: {
        height: '20%',
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
    }
});
