import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

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
    const navigation = useNavigation();

    const handleTaskBar = () => {
        navigation.navigate("TaskBar");
    }

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };

    const handleStartOrder = () => {
        navigation.navigate("TypeSelection");
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleStartOrder} style={styles.button}>
                <Text style={styles.buttonText}>Start Order</Text>
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
        backgroundColor: "#0782F9",
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
});
