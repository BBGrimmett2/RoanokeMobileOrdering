import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    SafeAreaView,
    Dimensions,
    FlatList,
    ScrollView
} from "react-native";
import { auth, fireDB, user } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import masterMenu from "../foodlist.js"
import { useState } from 'react';

const CompletedOrderScreen = ({ route }) => {
    const navigation = useNavigation();
    const { cart } = route.params;
    const [totalCost, setTotalCost] = useState(0);
    console.log(cart);
    const result = cart.reduce((total, currentValue) => total = total + currentValue.price,0);
    console.log(result);
   

    const renderListItem = ({item}) => { //whats showing up in the terminal and what is showing up in the app are different.
        // might be a problem. need to talk about with the group tomorrow. dont know why that is happening???????
        //setTotalCost(totalCost+item.price);
        if(true){
            return (
                <TouchableOpacity onPress={() => navigation.navigate("ItemDetailsScreen", {itemObj:item})}>
                    <Text>{item.name} ${item.price}</Text>
                    {/* <Text style={{ fontSize: 30 }}>{item.price}</Text> */}
                    
                </TouchableOpacity>
            );
        }
    };

    return (
        //everything written that we like so far. =========
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: 10 }}>
            <Text> RC Mobile Order </Text>
            <Text> Receipt </Text>
            
          
            {/* //========================= */}

            {/* //starting new stuff ================== */}
           
           
            {/* <SafeAreaView> */}
                  
               
                <ScrollView>
                    <FlatList
                        data={masterMenu}
                        renderItem={renderListItem}
                    />
                </ScrollView>
                
                
            {/* </SafeAreaView> */}
            <Text>Total: ${result}</Text> 
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate("HomeScreen");
                }}
            >
                <Text> Go Back Home </Text>
            </TouchableHighlight>
            {/* make a function that calculates total cost and make it look pretty */}
            {/* //==================== */}
        </View>

    );
}

//shenaganis start here ------------------ /*
{/*
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
            <View style={style.header}>
                <Text style={{ fontSize: 50, color: "grey" }}>
                    {type}
                </Text>
            </View>
            <ScrollView>
                <FlatList
                    data={masterMenu}
                    renderItem={renderListItem}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

*/}
export default CompletedOrderScreen;

const style = StyleSheet.create({
    header: {
        //flex: 1,
        borderWidth: 2,
        borderColor: "black",
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
        //borderColor: "#0782F9",
        //borderWidth: 3,
        borderRadius: 10,
        height: 40,
        flex: 1,
        width: null,
        resizeMode: "contain",
    },
});
