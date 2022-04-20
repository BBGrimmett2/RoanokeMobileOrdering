import { useNavigation } from "@react-navigation/core";
import {Image,  TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import masterMenu from "../foodlist.js"


const FoodItemSelectionScreen = ({route}) => {
    const navigation = useNavigation();
    const {type} = route.params;

    const renderListItem = ({item}) => {
        if((item.type == type) || (type == "All")){
            return (
                <TouchableOpacity style={style.listItem} onPress={() => navigation.navigate("ItemDetailsScreen", {itemObj:item})}>
                    <Text style={{ fontSize: 30 }}>{item.name}</Text>
                    <Text style={{ fontSize: 30 }}>{item.price}</Text>
                    <Image
                        style={style.pic}
                        source={{uri: item.itemImageFile}}
                    />
                </TouchableOpacity>
            );
        }
    };

    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text style={{ fontSize: 50, color: "grey" }}>
                    {type}
                </Text>
            </View>
            <View>
                <FlatList
                    data={masterMenu}
                    renderItem={renderListItem}
                />
            </View>
        </SafeAreaView>
    );
};

export default FoodItemSelectionScreen;

const style = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: "maroon",
        alignItems: "center",
        justifyContent: "center",
    },
    viewer: {
        flex: 1,
        height: "100%",
    },
    listItem: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "#61DBFB",
        margin: 1,
    },
    pic: {
        //borderColor: "#0782F9",
        //borderWidth: 3,
        borderRadius: 10,
        height: 40,
        flex: 1,
        width: null,
        resizeMode:  "contain",
    },
});