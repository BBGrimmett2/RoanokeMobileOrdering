import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";

const FoodTypeSelectionScreen = () => {
    const navigation = useNavigation();
    const types = ["Bowl", "Bag", "Cup", "Other", "All"];
    const renderItem = ({ item }) => {
        return (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:item})}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20, marginTop:30}}>Please Select Food Type</Text>
            <FlatList 
                data={types}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
                styles={styles.list}
            />   
        </SafeAreaView>
    );
};

export default FoodTypeSelectionScreen;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
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
    list: {
        flex: 1,
    },
});