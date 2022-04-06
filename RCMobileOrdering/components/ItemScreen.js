import { useNavigation } from "@react-navigation/core";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeScreenContainer } from "react-native-screens";
import { auth } from "../firebase";

function Description({item}){
    
}

function Nutrition({item}){

}

function Item({item, route, navigation}){



    return(
        <SafeAreaView>
            <Image
                style={styles.pic}
                source={require('../items/exampleItems/drinkCupExample')} //?
            /> {/* food picture */}
            <Description>

            </Description>
            <Nutrition>

            </Nutrition>
            <View style={styles.price}>

            </View>
            <TouchableHighlight>
                ADD TO CART
            </TouchableHighlight>
            <View>
                {/* constant screen items */}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end', 
        flexDirection: 'column'
      },
});