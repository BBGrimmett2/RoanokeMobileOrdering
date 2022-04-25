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
        <View style={styles.screen}>
            <View style={styles.text}>
                <Text style={{fontSize:20, fontWeight:700}}> Your order has been submitted</Text>
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
        borderColor: "black",
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
    }
});
