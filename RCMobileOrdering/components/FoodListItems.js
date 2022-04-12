import { useNavigation } from "@react-navigation/core";
import {  TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import masterMenu from "../foodlist.js"
//import { TouchableOpacity } from "react-native-gesture-handler";

const foodItems = [
    { name: "pizza", key: 1 },
    { name: "taco", key: 2 },
    { name: "salad", key: 3 },
];


const FoodList = (props) => {
    const navigation = useNavigation();
    console.log(props.type);

    const renderItem = ({ item }) => {
        if(item.type == props.type){
            return (
                <TouchableOpacity style={style.listItem} onPress={() => navigation.navigate("Item",{itemObj:item})}>
                    <Text style={{ fontSize: 30 }}>{item.name}</Text>
                    <Text style={{ fontSize: 30 }}>{item.price}</Text>
                </TouchableOpacity>
            );
        }
      };

    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text style={{ fontSize: 50, color: "grey" }}>
                    {props.type}
                </Text>
            </View>
            <View>
                <FlatList
                    data={props.list}
                    //extraData={props.list}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{ height: 1, backgroundColor: "white" }}
                        ></View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const FoodOptions = ({route}) => {
    const {type} = route.params;
    //const food = [masterMenu.bestdrink,masterMenu.bestfood];
    return (
        <View style={{ height: "100%" }}>
            <FoodList type={type} list={masterMenu} />
        </View>
    );
};

export default FoodOptions;

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
    },
});
