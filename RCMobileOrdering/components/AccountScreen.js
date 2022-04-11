import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { auth, fireDB, user } from "../firebase";

const AccountPage = () => {
    let DATA = {
        name: "Brian Grimmett",
        email: "brian@test.com",
        swipes: 14,
        studentID: 1012238,
    };

    let imageSrc =
        "https://shared.roanoke.edu/headshots/filtered/" +
        DATA.studentID +
        ".jpg";

    const getData = async () => {
        auth.onAuthStateChanged(
            (user = async () => {
                if (user) {
                    // User logged in already or has just logged in.
                    let userID = user.uid;
                    console.log(userID);

                    const userJSON = await fireDB
                        .collection("accounts")
                        .doc("L9QTg4aZqIhqYIcft3bo")
                        .get();
                    console.log(userJSON);
                } else {
                    // User not logged in or has just logged out.
                }
            })
        );
    };

    //getData();

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
                    <Text style={styles.name}>{DATA.name}</Text>
                    <Text style={styles.email}>Email: {DATA.email}</Text>
                    <Text style={styles.description}>
                        Swipes Remaining: {DATA.swipes}
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </View>
    );
};

export default AccountPage;

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
