/*
Adopted From:
Carl Victor Fontanos
April 17, 2022
React Native Cart System
https://carlofontanos.com/react-native-cart-system/

Firebase Documentation
https://firebase.google.com/docs/firestore/manage-data/add-data
*/

import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import masterMenu from "../foodlist";
import { auth, fireDB, userID } from "../firebase";


//cart gets data when renderd
const Cart = () => {
    let [cart, setCart] = useState();

    const navigation = useNavigation();
    const result = cart.reduce((total, currentValue) => total = total + currentValue.price, 0);

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    getData().then((data) => {
        setCart(data.cart);
    });

    const updateFirestoreCart = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        // Set the 'userID' field of the cart
        const res = await userRef.update({ cart: cart });
    };


    const deleteHandler = (index) => {
        Alert.alert(
            "Are you sure you want to delete this item from your cart?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                {
                    text: "Delete",

                    onPress: () => {
                        let updatedCart = cart; /* Clone it first */

                        if (updatedCart.length === 1) {
                            updatedCart.length = 0;
                            setCart([]);
                        } else {
                            updatedCart.splice(
                                index,
                                1
                            ); /* Remove item from the cloned cart state */
                        }

                        setCart(updatedCart); /* Update the state */

                        updateFirestoreCart();
                    },
                },
            ]
        );
    };

    const handleCompltedOrder = () => {
        navigation.navigate("CompletedOrderScreen", { cart });
    };

    const emptyComponent = () => {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyMessage}>Order some food!</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                // keyExtractor={(item) => item.id}
                extraData={cart}
                ListEmptyComponent={emptyComponent}
                renderItem={({ item }) => (
                    <View style={styles.cartItems}>
                        <View style={styles.cartItemContainer}>
                            <View>
                                <Image
                                    style={styles.cartItemImage}
                                    source={{ uri: item.itemImageFile }}
                                />
                            </View>
                            <View style={styles.cartItemInformationContainer}>
                                <Text>{item.name}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        </View>

                        <View style={styles.iconContainer}>
                            <TouchableOpacity
                                style={styles.cartTrashIcon}
                                onPress={() => deleteHandler(item.id)}
                            >
                                <Ionicons
                                    name="md-trash"
                                    size={30}
                                    color="#800000"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.buttonContainer}>
                {/* price could go here. */}
                <Text>Total: ${result}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleCompltedOrder()}
                >
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    },
    cartItemContainer: {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: "center",
    },
    cartItems: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 120,
    },
    cartItem: {
        flexDirection: "row",
        alignSelf: "center",
    },
    cartItemImage: {
        marginLeft: 20,
        height: 60,
        width: 60,
        backgroundColor: "#eeeeee",
    },
    cartItemInformationContainer: {
        alignSelf: "center",
        paddingLeft: 20,
    },
    iconContainer: {
        paddingRight: 30,
        paddingTop: 30,
    },
    cartTrashIcon: {
        width: 32,
        height: 32,
    },
    checkoutBtnContainer: {
        width: "100%",
        backgroundColor: "gray",
    },
    buttonContainer: {
        marginBottom: 20,
        alignSelf: "center",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#800000",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#800000",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    emptyContainer: {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: "center",
        marginVertical: 20,
    },
    emptyMessage: {
        fontSize: 24,
    },
});

export default Cart;
