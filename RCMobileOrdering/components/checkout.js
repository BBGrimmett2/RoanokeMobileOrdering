
// Luke notes: in itemScreen.js use the functions to add to cart.
// get tab bar working in all screens
// test
// checkout firebase
// cleanup
// checkout screen congrats should go back to original list

/*

function CompletedOrderScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> your order has been submitted</Text>
      </View>
    );
  }

*/


// https://firebase.google.com/docs/firestore/manage-data/add-data
// const changeData = async () => {
//   const userRef = fireDB.collection("users").doc(userID);

//   // Set the 'userID' field of the cart
//   const res = await userRef.update({ cart: "Cup food" });
// };

/*
Adopted From:
Carl Victor Fontanos
April 17, 2022
React Native Cart System
https://carlofontanos.com/react-native-cart-system/
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import masterMenu from "../foodlist";
import { useNavigation } from "@react-navigation/core";

const Cart = () => {
    let [cartItems, setCartItems] = useState([
        {
            name: masterMenu[0].name,
            thumbnailImage: masterMenu[0].itemImageFile,
            salePrice: masterMenu[0].price,
        },
        {
            name: masterMenu[1].name,
            thumbnailImage: masterMenu[1].itemImageFile,
            salePrice: masterMenu[1].price,
        },
        {
            name: masterMenu[2].name,
            thumbnailImage: masterMenu[2].itemImageFile,
            salePrice: masterMenu[2].price,
        },
    ]);

    const navigation = useNavigation();

    let imageSrc = masterMenu[0].itemImageFile;

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
                        updatedCart.splice(
                            index,
                            1
                        ); /* Remove item from the cloned cart state */
                        setCartItems(updatedCart); /* Update the state */
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const handleCompltedOrder = () => {
      navigation.navigate('CompletedOrderScreen');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {cartItems.map((item, i) => (
                    <View key={i} style={styles.cartItems}>
                        <View
                            style={{
                                flexDirection: "row",
                                flexGrow: 1,
                                flexShrink: 1,
                                alignSelf: "center",
                            }}
                        >
                            <View style={styles.cartItemImage}>
                                <Image
                                // source=
                                //     "https://drive.google.com/uc?id=196FrjyjzWVOqjmwVIjiEW1UrZBdxYY5X"
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
                                onPress={() => deleteHandler(i)}
                            >
                                <Ionicons
                                    name="md-trash"
                                    size={30}
                                    color="#800000"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleCompltedOrder()}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
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
        marginTop: 40,
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
});

export default Cart;
