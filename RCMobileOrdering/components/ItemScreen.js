import { useNavigation } from "@react-navigation/core";
import React, {useState} from "react";
import { render } from "react-dom";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeScreenContainer } from "react-native-screens";
import { auth } from "../firebase";

const Customization = (props) => {
    const options = props.opts;
    // let tempBool = [];
    // for(let i=0; i<options.length; i++){
    //     tempBool.push(false);
    // }
    // const permBool = tempBool;
    // const [customSelected, handleSelection] = useState({permBool});
    // const updateCustomize = (index) => {
    //     let tempList = [];
    //     for(let i=0; i<customSelected.length; i++){
    //         if(i===index){
    //             tempList.push(!customSelected[i]);
    //         }
    //         else{
    //             tempList.push(customSelected[i]);
    //         }
    //     }
    //     const newList = tempList;
    //     handleSelection(newList);
    // }
    const map = options.map(element => 
        <View>
            <TouchableOpacity
                // onPress={updateCustomize(0)}
                style={
                    [styles.button, styles.buttonOutline]
                }
            >
                <Text style={styles.customizing}>{element}</Text>
            </TouchableOpacity>
            
        </View>
        
    );
    return(
        <View style={styles.customOutline}>
            {/* <Text>Customize here I guess. `\(-_-)/`</Text> */}
            {map}
        </View>
        
    );
    // return(
    //     <View>
    //         {options.map(({ id }) => {
    //             return (
    //                 <MyButton content={id} />
    //             );
    //         })}
    //     </View>
    // );
}

// format of itemObj:
// const itemObj = {
//     name: "test item",
//     description: "This is a description. It is very descriptive. It definitely makes you want to order this food, doesn't it? Order it now, coward.",
//     itemImageFile: require("../assets/items/exampleItems/drinkCupExample.jpg"),
//     nFactsPicFile: "cokeNutritionFacts2.webp",
//     customizations: ["flavor", "color", "taste", "size"],
// };

const Item = ({route}) => {
    const {itemObj} = route.params;
    const [nutrFacts, handleNFshow] = useState(false);
    const [customize, handleCustomizeshow] = useState(false);
    function showNF() {
        handleNFshow(nutrFacts => !nutrFacts);
    }
    function showCustom(){
        handleCustomizeshow(customize => !customize);
    }  
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <Text style={styles.title}>{itemObj.name} </Text>
                <Image
                    style={styles.pic}
                    source={{uri: itemObj.itemImageFile}}
                />
                <View>
                    <Text style={styles.desc}>
                        {itemObj.description}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={showNF} 
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Nutrition Facts</Text>
                    </TouchableOpacity>
                </View>
                {nutrFacts && (
                    <Image
                        style={styles.nutrition}
                        source={{uri: itemObj.nFactsPicFile}}
                    />   
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
                    <Customization opts={itemObj.customizations} numberopts={itemObj.numberCustomOpts}/>
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
    title: {
        fontSize: 25,
        fontWeight: "700",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 30,
    },
    pic: {
        borderColor: "#0782F9",
        borderWidth: 3,
        borderRadius: 10,
        height: 200,
        flex: 1,
        width: null,
        resizeMode:  "contain",
    },
    nutrition:{
        borderColor: "black",
        borderWidth: 6,
        borderRadius: 10,
        height: 335,
        width: null,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
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
    customizing: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 14,
    },
    customOutline: {
        marginTop: 7,
        marginHorizontal: 45,
    },
    desc: {
        fontSize: 16,
        padding: 5,
        marginTop: 10,
    }
});