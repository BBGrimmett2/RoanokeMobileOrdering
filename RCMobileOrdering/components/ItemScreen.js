import { useNavigation } from "@react-navigation/core";
import React, {useState} from "react";
import { render } from "react-dom";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeScreenContainer } from "react-native-screens";
import { auth } from "../firebase";

const Nutrition = (props) => {
    const nf = 'cokeNutritionFacts2.webp';
    return(
        <View>
            <Image 
                source={require(`../assets/items/exampleItems/${nf}`)}
                style={styles.nutrition}
            />  
        </View>
        
    );
}

const Customization = (props) => {
    return(
        <Text>Customize here I guess. `\(-_-)/`</Text>
    );
}

const Item = (item) => {
    const [nutrFacts, handleNFshow] = useState(false);
    const [customize, handleCustomizeshow] = useState(false);
    const nf = 'cokeNutritionFacts2.webp';
    function showNF() {
        handleNFshow(nutrFacts => !nutrFacts);
    }
    function showCustom(){
        handleCustomizeshow(customize => !customize);
    }
    const description = "This is a description. It is very descriptive. It definitely makes you want to order this food, doesn't it? Order it now, coward.";
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
             <Image
                style={styles.pic}
                source={require('../assets/items/exampleItems/drinkCupExample.jpg')} //?
            />
            <View style={styles.desc}>
                <Text>
                    {description}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={showNF} 
                    style={[styles.button, styles.buttonOutline]}
                    // style={styles.button}
                >
                    <Text style={styles.buttonOutlineText}>Nutrition Facts</Text>
                </TouchableOpacity>
            </View>
            {nutrFacts && (
                <Nutrition loc={nf} />
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={showCustom}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Customize</Text>
                </TouchableOpacity>
            </View>
            {customize && (
                <Customization />
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    // onPress={}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add to Order</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Item;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    pic: {
        height: 200,
        flex: 1,
        width: null,
    },
    nutrition:{

    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
});