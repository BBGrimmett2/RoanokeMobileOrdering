import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

function CompletedOrderScreen() {
    const navigation = useNavigation();

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text> your order has been submitted</Text>
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
