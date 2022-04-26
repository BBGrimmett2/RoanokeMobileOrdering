import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fireDB, userID } from "../firebase";

const itemObj = {
    name: "the best drink",
    description: "This is a description. It is very descriptive. It definitely makes you want to order this food, doesn't it? Order it now, coward.",
    itemImageFile: "https://drive.google.com/uc?id=196FrjyjzWVOqjmwVIjiEW1UrZBdxYY5X",
    nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
    custObj: [
        {number: 0, option: "add so much flavor"},
        {number: 1, option: "make it so colorful"},
        {number: 2, option: "make it the tastiest"},
        {number: 3, option: "extra super large"},
    ]
};

const HomeScreen = () => {
    let [name, setName] = useState();
    let [swipes, setSwipes] = useState();
    const navigation = useNavigation();

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    getData().then((data) => {
        setName(data.name);
        setSwipes(data.swipes);
    });

    const handleViewReciepts = () => {
        navigation.navigate("CompletedOrderScreen");
    };

    const handleStartOrder = () => {
        navigation.navigate("Order");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Welcome, {name}!</Text>
            {/* <Text style={styles.description}>
                        Swipes Remaining: {swipes}
                    </Text> */}
            <TouchableOpacity onPress={handleStartOrder} style={styles.button}>
                <Text style={styles.buttonText}>Start Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleViewReciepts} style={styles.button}>
                <Text style={styles.buttonText}>View Reciepts</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#800000",
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
    description: {
        fontSize: 16,
        marginTop: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "600",
    },
});
