/*
Adopted From:
Bootdey by Deyson
April 11, 2022
Profile UI Example
https://www.bootdey.com/react-native-snippet/23/Profile-ui-example
*/

import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { auth, fireDB, userID } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const AccountScreen = () => {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [swipes, setSwipes] = useState();
    let [studentID, setStudentID] = useState();

    const navigation = useNavigation();
    
    let imageSrc =
        "https://shared.roanoke.edu/headshots/filtered/" + studentID + ".jpg";

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    useEffect(() => {
        getData().then((data) => {
            setName(data.name);
            setEmail(data.email);
            setSwipes(data.swipes);
            setStudentID(data.studentID);
        });
    });

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("LoginScreen");
            })
            .catch((error) => alert(error.message));
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{
                    uri: imageSrc,
                }}
            />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>Email: {email}</Text>
                    <Text style={styles.description}>
                        Swipes Remaining: {swipes}
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSignOut}
                    >
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#800000",
        height: 100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        marginLeft: 30,
        position: "absolute",
        marginTop: 30,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "600",
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        color: "#696969",
        padding: 30,
    },
    name: {
        fontSize: 28,
        fontWeight: "600",
    },
    email: {
        fontSize: 16,
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 30,
    },
    button: {
        backgroundColor: "#696969",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
});
