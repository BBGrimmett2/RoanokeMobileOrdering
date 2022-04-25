import { useNavigation } from "@react-navigation/core";
import {Image,  TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import masterMenu from "../foodlist.js"


const FoodItemSelectionScreen = ({route}) => {
    const navigation = useNavigation();
    const {type} = route.params;

    const renderListItem = ({item}) => {
        if((item.type == type) || (type == "All")){
            return (
                <TouchableOpacity style={style.listItem} onPress={() => navigation.navigate("ItemDetailsScreen", {itemObj:item})}>
                    <View style={style.listItems}>
                    <View style={style.listItemContainer}>
                        <Image
                            style={style.pic}
                            source={{ uri: item.itemImageFile }}
                        />
                        <View style={style.listItemInformationContainer}>
                            <Text style={{ fontSize: 30 }}>{item.name}</Text>
                            <Text style={{ fontSize: 30 }}>${item.price}</Text>
                        </View>
                    </View>
                    </View>
                </TouchableOpacity>
            );
        }
    };

    return (
        <SafeAreaView>
            <View style={style.header}>
                <Text style={{ fontSize: 50, color: "grey" }}>
                    {type}
                </Text>
            </View>
            <View>
                <FlatList
                    data={masterMenu}
                    renderItem={renderListItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    );
};

export default FoodItemSelectionScreen;

const style = StyleSheet.create({
    header: {
        //flex: 1,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#800000",
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
        backgroundColor: "grey",
        margin: 1,
    },
    pic: {
        marginLeft: 20,
        height: 60,
        width: 60,
    },
    listItemContainer: {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: "center",
    },
    listItemInformationContainer: {
        alignSelf: "center",
        paddingLeft: 20,
    },
    listItems: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 120,
    },
});
