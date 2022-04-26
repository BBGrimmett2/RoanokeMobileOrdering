import React from "react";
import { useState } from "react";
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
import { useNavigation } from "@react-navigation/core";
import { fireDB, userID } from "../firebase";



//use a function that adds the same things to firebase that it does to the
//screen.

//pull from firebase? or use the cart parameter?
//also put total price in checkout screen.

const CompletedOrderScreen = ({ route }) => {
    const navigation = useNavigation();
    const { routeCart } = route.params;
   
    const result = routeCart.reduce((total, currentValue) => total = total + currentValue.price, 0);

    const renderListItem = ({ item }) => {
        if (true) {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("ItemDetailsScreen", { itemObj: item })}>
                    <Text>{item.name} ${item.price}</Text>
                </TouchableOpacity>
            );
        }
    };

    let emptyCart = [];
    let [cart, setCart] = useState();
    let [userReceipts, setReceipts] = useState([]);

    var current = new Date();
    let receiptID = current.toLocaleString();

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    getData().then((data) => {
        setCart(data.cart);
        setReceipts(data.receipts);
    });
    
    let newReceipt = {
        id: receiptID,
        cart: cart,
    }

    const clearCart = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        console.log("Data sent");

        // Clear cart and set add to receipt array
        const res = await userRef.update({ cart: emptyCart, receipts: newReceipt });
    };

    const handleCompletedOrder = () => {
        navigation.navigate("HomeScreen");
        
        clearCart();
    };

    return (
        //everything written that we like so far. =========
        <View style={styles.screen}>
           
            <ScrollView>
            <Text> RC Mobile Order </Text>
            <Text> Receipt </Text>
                <FlatList
                    data={cart}
                    renderItem={renderListItem}
                />
            </ScrollView>

            <Text>Total: ${result}</Text>
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
        justifyContent: "center",
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
