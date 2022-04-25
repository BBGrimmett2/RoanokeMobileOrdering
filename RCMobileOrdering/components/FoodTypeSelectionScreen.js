import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions} from "react-native";



const FoodTypeSelectionScreen = () => {
    const navigation = useNavigation();
    const types = ["Bowl", "Bag", "Cup", "Other"];
    const typeImages = {
        Bowl: "https://images2.imgbox.com/39/b2/1tYWXtWH_o.png",
        Bag: "https://images2.imgbox.com/5a/18/b9TzH6GM_o.png",
        Cup: "https://images2.imgbox.com/cb/10/1H9YOGAF_o.png",
        Other: "https://images2.imgbox.com/c6/c2/uCUpXGn9_o.png",
        All: "https://images2.imgbox.com/9c/f2/sS7zcjLV_o.png"
    };

    const renderTypeButton = ({item}) => {
        const type = item;
        return (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:type})}>
            <Text style={styles.buttonText}>{type}</Text>
            {/* <Image source={{uri: typeImages.item}} /> */}
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
            <TouchableOpacity style={styles.buttonAll} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:"All"})}>
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
        borderRadius: 5,
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "grey",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
    },
    buttonAll: {
        backgroundColor: "grey",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 30,
    },
    list: {
        flex: 1,
    },
});