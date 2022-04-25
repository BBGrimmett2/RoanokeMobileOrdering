import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions} from "react-native";



const FoodTypeSelectionScreen = () => {
    const navigation = useNavigation();
    const types = ["Bowl", "Bag", "Cup", "Other"];

    const renderTypeButton = ({ item }) => {
        return (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:item})}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text style={{ fontSize: 50, color: "grey" }}>Please Select Food Type</Text>
            </View>
            <FlatList 
                data={types}
                renderItem={renderTypeButton}
                numColumns={2}
                keyExtractor={(type) => type.toString()}
                styles={styles.list}
            />  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:"All"})}>
                <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity> 
        </SafeAreaView>
    );
};

export default FoodTypeSelectionScreen;


var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    header: {
        //flex: 1,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "grey",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 16,
    },
    list: {
        flex: 1,
    },
});