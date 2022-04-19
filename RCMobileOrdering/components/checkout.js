// Luke notes: in itemScreen.js use the functions to add to cart.
// get tab bar working in all screens
// checkout firebase
// cleanup
// checkout screen congrats should go back to original list

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
    ScrollView,
    Image,
    Alert,
    FlatList,
    Empty,
    TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import masterMenu from "../foodlist";
import { useNavigation } from "@react-navigation/core";

const Item = (item) => {};

const Cart = () => {
    let [cartItems, setCartItems] = useState([
        {
            id: 0,
            name: masterMenu[0].name,
            thumbnailImage: masterMenu[0].itemImageFile,
            salePrice: masterMenu[0].price,
        },
        {
            id: 1,
            name: masterMenu[1].name,
            thumbnailImage: masterMenu[1].itemImageFile,
            salePrice: masterMenu[1].price,
        },
        {
            id: 2,
            name: masterMenu[1].name,
            thumbnailImage: masterMenu[1].itemImageFile,
            salePrice: masterMenu[1].price,
        },
    ]);

    const navigation = useNavigation();

    const deleteHandler = (index) => {
        Alert.alert(
            "Are you sure you want to delete this item from your cart?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Delete",

                    onPress: () => {
                        let updatedCart = cartItems; /* Clone it first */

                        if (updatedCart.length === 1) {
                            updatedCart.length = 0;
                            setCartItems([]);
                        } else {
                            updatedCart.splice(
                                index,
                                1
                            ); /* Remove item from the cloned cart state */
                        }

                        setCartItems(updatedCart); /* Update the state */
                    },
                },
            ]
        );
    };

    const handleCompltedOrder = () => {
        navigation.navigate("CompletedOrderScreen");
    };

    const emptyComponent = () => {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyMessage}>Order some food!</Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                extraData={cartItems}
                ListEmptyComponent={emptyComponent}
                renderItem={({ item }) => (
                    <View style={styles.cartItems}>
                        <View style={styles.cartItemContainer}>
                            <View>
                                <Image
                                    style={styles.cartItemImage}
                                    source={{ uri: item.thumbnailImage }}
                                />
                            </View>
                            <View style={styles.cartItemInformationContainer}>
                                <Text>{item.name}</Text>
                                <Text>${item.salePrice}</Text>
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleCompltedOrder()}
                >
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 85,
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
