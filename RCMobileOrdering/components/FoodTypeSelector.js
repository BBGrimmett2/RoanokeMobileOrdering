import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

const FoodTypeSelectionScreen = () => {
    const navigation = useNavigation();
    //const foodMasterList = this.props.foodMasterList;
    const types = ["Bowl", "Bag", "Cup", "Other"]
    const handleSelection = (type) => {
        //navigation.navigate("FoodTypeList", {type: type});
        navigation.navigate("Home");
    };

    const renderItem = ({ item }) => {
        return (
          /*<TouchableOpacity style={styles.button} onPress={handleSelection(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>*/
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
      };

    return (
        <View style={styles.container}>
            <Text>Please Select Food Type</Text>
            <FlatList 
                data={types}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
                styles={styles.list}
            />     
        </View>
    );
};
/*<FlatList 
                data={types}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
                //styles={styles.list}
            /> */
export default FoodTypeSelectionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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