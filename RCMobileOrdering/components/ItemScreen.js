import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { render } from "react-dom";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeScreenContainer } from "react-native-screens";
import { auth, fireDB, userID } from "../firebase";

const Customization = (props) => {
    //will need to lift state of customSelected to keep selections

    let tempBool = [];
    for (let i = 0; i < props.objOpts.length; i++) {
        tempBool.push(false);
    }
    const permBool = tempBool;
    const [customSelected, handleSelection] = useState(permBool);
    const updateCustomize = (index) => {
        let tempList = [];
        for (let i = 0; i < customSelected.length; i++) {
            if (i === index) {
                tempList.push(!customSelected[i]);
            } else {
                tempList.push(customSelected[i]);
            }
        }
        const newList = tempList;
        handleSelection(newList);
    };

    const customObj = props.objOpts;
    const mapTest = customObj.map((element) => (
        <View key={element.number}>
            <TouchableOpacity
                onPress={() => updateCustomize(element.number)}
                style={
                    customSelected[element.number]
                        ? [styles.button, styles.buttonOutlineAlt]
                        : [styles.button, styles.buttonOutline]
                }
            >
                <Text
                    style={
                        customSelected[element.number]
                            ? styles.customizingSelected
                            : styles.customizingUnselected
                    }
                >
                    {element.option}
                </Text>
            </TouchableOpacity>
        </View>
    ));

    return <View style={styles.customOutline}>{mapTest}</View>;
};

const Item = ({ route }) => {
    const { itemObj } = route.params;
    const [nutrFacts, handleNFshow] = useState(false);
    const [customize, handleCustomizeshow] = useState(false);
    const navigation = useNavigation();

    function showNF() {
        handleNFshow((nutrFacts) => !nutrFacts);
    }
    function showCustom() {
        handleCustomizeshow((customize) => !customize);
    }

    const handleAddToCart = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        // Set the 'userID' field of the cart
        const res = await userRef.update({ cart: itemObj.name });

        navigation.navigate("TaskBar");
    };

    const handleToCheckout = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        // Set the 'userID' field of the cart
        const res = await userRef.update({ cart: itemObj.name });

        navigation.navigate("Cart");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <Text style={styles.title}>{itemObj.name} </Text>
                <Image
                    style={styles.pic}
                    source={{uri: itemObj.itemImageFile}}
                />
                <View>
                    <Text style={styles.desc}>{itemObj.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={showNF}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>
                            Nutrition Facts
                        </Text>
                    </TouchableOpacity>
                </View>
                {nutrFacts && (
                    <Image
                        style={styles.nutrition}
                        source={{ uri: itemObj.nFactsPicFile }}
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
                    <Customization objOpts={itemObj.custObj}/>
                )}
                <View style={styles.buttonContainer}>{/* go to begining of selection and add item to cart */}

                    <TouchableOpacity
                        onPress={handleAddToCart}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Add to Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>{/* go to cart and add item to cart */}
                    <TouchableOpacity
                        onPress={handleToCheckout}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Item;

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 15,
    },
    pic: {
        borderColor: "#0782F9",
        borderWidth: 3,
        borderRadius: 10,
        height: 200,
        flex: 1,
        width: null,
        resizeMode: "contain",
    },
    nutrition: {
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
        width: width,
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
    buttonOutlineAlt: {
        backgroundColor: "#0782F9",
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
    customizingUnselected: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 14,
    },
    customizingSelected: {
        color: "white",
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
    },
});
