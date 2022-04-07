import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

const TaskBar = () => {
    const navigation = useNavigation();

    const handleBack = () => {

        //some type of poping the stack. look at the reading
        
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };

    const handleAccount = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };

    const handleCheckout = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };



    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };


    return (
         <View>
            <View style={styles.container}>
                <Text>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                    <Text style={styles.buttonText}>evidence of change</Text>
                </TouchableOpacity>
             </View>

            <View style={styles.taskbar}> 
                <TouchableOpacity onPress={handleBack} style={styles.button}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>  
                
                <TouchableOpacity onPress={handleAccount} style={styles.button}>
                    <Text style={styles.buttonText}>Account</Text>
                </TouchableOpacity>  
                
                <TouchableOpacity onPress={handleCheckout} style={styles.button}>
                    <Text style={styles.buttonText}>checkout</Text>
                </TouchableOpacity>
               
            </View>
             
        </View>
    );
};

export default TaskBar;

const styles = StyleSheet.create({

    taskbar: {
        flex: 1,
//        position: 'absolute',
        bottom: 0
      //  bottom: 75,
//        right: 75,
       // alignItems: "center",
      //  backgroundColor: "blue",
    //    padding: 10,
//        borderRadius: 50
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
  //      right: 75,
//        bottom: 75,
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
