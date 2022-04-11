import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const foodItems = [
    { name: "pizza", key: 1 },
    { name: "taco", key: 2 },
    { name: "salad", key: "3" },
];

const FoodList = (props) => {
    console.log(props.list);
    return (
        <View>
            <View style={style.container}>
                <Text style={{ fontSize: 50, color: "grey" }}>
                    {props.type}
                </Text>
            </View>
            <View>
                <FlatList
                    data={props.list}
                    extraData={props.list}
                    renderItem={({ item }) => (
                        <View style={style.listItem}>
                            <Text style={{ fontSize: 30 }}>{item.key}</Text>
                            <Text style={{ fontSize: 30 }}>{item.name}</Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{ height: 1, backgroundColor: "white" }}
                        ></View>
                    )}
                />
            </View>
        </View>
    );
};

const FoodOptions = () => {
    return (
        <View style={{ height: "100%" }}>
            <FoodList type="Cup" list={foodItems} />
        </View>
    );
};

export default FoodOptions;

const style = StyleSheet.create({
    container: {
        flex: 1,
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
