import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { fireDB, userID } from "../firebase";

function CompletedOrderScreen() {
    const navigation = useNavigation();

    let emptyCart = [];
    let [cart, setCart] = useState();
    let [userReceipts, setReceipts] = useState([]);

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    getData().then((data) => {
        setCart(data.cart);
        setReceipts(data.receipts);
    });
    
    const clearCart = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        // Clear cart and set add to receipt array
        const res = await userRef.update({ cart: emptyCart });
    };

    const handleCompletedOrder = () => {
        clearCart();

        navigation.navigate("HomeScreen");
    };

    return (
        <View style={styles.screen}>
            <View style={styles.text}>
                <Text style={{fontSize:20, fontWeight:"700", color: "#FFFFFF"}}> Your order has been submitted</Text>
            </View>
            <TouchableHighlight
                onPress={handleCompletedOrder}
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
        color: "#FFFFFF"
    }
});
