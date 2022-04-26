import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { fireDB, userID } from "../firebase";

const ReceiptScreen = () => {
    let [cart, setCart] = useState([]);
    const navigation = useNavigation();
    let totalPrice = 0;
    let [dataTime, setDateTime] = useState(null);

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    getData().then((data) => {
        setCart(data.receipts.cart);
        setDateTime(data.receipts.id);
    });

    const totalCart = () => {
        totalPrice = cart.reduce(
            (total, currentValue) => (total = total + currentValue.price),
            0
        );
    };

    totalCart();

    const handleNavigation = () => {
        navigation.navigate("HomeScreen");
    };

    const renderCartItem = ({ item, index }) => {
        return (
            <View style={styles.cartItems}>
                <View style={styles.cartItemContainer}>
                    <Image
                        style={styles.cartItemImage}
                        source={{ uri: item.itemImageFile }}
                    />
                    <View style={styles.cartItemInformationContainer}>
                        <Text>{item.name}</Text>
                        <Text>${item.price}</Text>
                    </View>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        style={styles.cartTrashIcon}
                    ></TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.idText}>{dataTime}</Text>
                <FlatList
                    data={cart}
                    extraData={cart}
                    renderItem={renderCartItem}
                />
                <View style={styles.buttonContainer}>
                    <Text>Total: ${totalPrice}</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNavigation()}
                    >
                        <Text style={styles.buttonText}>Go Home</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default ReceiptScreen;

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
    idText: {
        fontSize: 24,
        justifyContent: "center",
    },
});
