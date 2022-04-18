import { useNavigation } from "@react-navigation/core";
import {Image,  TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import masterMenu from "../foodlist.js"


const FoodList = (props) => {
    const navigation = useNavigation();
    console.log(props.type);

    const renderItem = ({ item }) => {
        console.log("test2");
        if((item.type == props.type) || (props.type == "All")){
            console.log("test");
            console.log(item);
            return (
                <TouchableOpacity style={style.listItem} onPress={() => navigation.navigate("Item", {itemObj:item})}>
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
                    {props.type}
                </Text>
            </View>
            <View>
                <FlatList
                    data={props.list}
                    //extraData={props.list}
                    renderItem={renderItem}
                    /*ItemSeparatorComponent={() => (
                        <View
                            style={{ height: 1, backgroundColor: "white" }}
                        ></View>
                    )}*/
                />
            </View>
        </SafeAreaView>
    );
};

const FoodOptions = ({route}) => {
    const {type} = route.params;
    //const food = [masterMenu.bestdrink,masterMenu.bestfood];
    //use of masterMenu is temporary. Eventually we want to use firebase.
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
