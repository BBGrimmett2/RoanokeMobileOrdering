import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fireDB } from "../firebase";

const AccountPage = () => {
    const doTask = async () => {
        const user = await fireDB.collection('accounts').doc('fO3bmS2XEuMRp4M01fR1').get();

        console.log("Test");
        console.log(user);
    };

    doTask()

    return (
        <View>
            <Text>AccountPage</Text>
        </View>
    );
};

export default AccountPage;

const styles = StyleSheet.create({});
