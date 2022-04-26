import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions, Image} from "react-native";

const FoodTypeSelectionScreen = () => {
    const navigation = useNavigation();
    const types = ["Bowl", "Bag", "Cup", "Other"];
    const typeImages = {
        Bowl: "https://images2.imgbox.com/39/b2/1tYWXtWH_o.png",
        Bag: "https://images2.imgbox.com/5a/18/b9TzH6GM_o.png",
        Cup: "https://images2.imgbox.com/cb/10/1H9YOGAF_o.png",
        Other: "https://images2.imgbox.com/c6/c2/uCUpXGn9_o.png",
    };

    const renderTypeButton = ({item}) => {
        const type = item;
        return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodItemSelectionScreen",{type:type})}>
          <View style={styles.listItems}>
          <View style={styles.listItemContainer}>
              <Image
                  style={styles.pic}
                  source={{ uri: typeImages[type] }}
              />
              <View style={styles.listItemInformationContainer}>
                  <Text style={{ fontSize: 30 }}>{type}</Text>
              </View>
          </View>
          </View>
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
                scrollEnabled = {false}
                numColumns = {2}
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
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    header: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
        width: width,
    },
    button: {
        backgroundColor: "grey",
        width: "47%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        margin: 5
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
        fontSize: 30,
    },
    list: {
        flex: 1,
    },
    listItem: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "grey",
        margin: 1,
    },
    pic: {
        marginLeft: 20,
        height: 100,
        width: 100,
        alignSelf: "center"
    },
    listItemContainer: {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    listItemInformationContainer: {
        alignSelf: "center",
        paddingLeft: 20,
    },
    flatlist: {
        marginBottom: 150 //fix better later not using margin
    },
    listItems: {
        flexDirection: "row",
        backgroundColor: "gray",
        height: 200,
    },
});