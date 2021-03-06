import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fireDB, userID } from "../firebase";

const DisplayItemInfo = (props) => {
    const item = props.item;
    const image = props.itemUri;
    const desc = props.desc;
    return(
        <>
        <Text style={styles.title}>{item}</Text>
        <View style={styles.picContainer}>
            <Image
                style={styles.pic}
                source={{uri: image}}
            />
        </View>
        <Text style={styles.desc}>{desc}</Text>
        </>
    );
}

const DropDown = (props) => {
    const handleToggle = props.handler;
    const trigger = props.trigger;
    const type = props.type;
    const content = props.content;
    
    return(
        <>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleToggle}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>
                    {type}
                </Text>
            </TouchableOpacity>
        </View>
        {trigger && content}
        </>
    );
}

const FinishItem = (props) => {
    const handleAddToCart = props.addToCart;
    const handleToCheckout = props.toCheckout;
    return(
        <>
        <View style={styles.buttonContainer}>
            {/* go to begining of selection and add item to cart */}
            <TouchableOpacity
                onPress={handleAddToCart}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add to Order</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            {/* go to cart and add item to cart */}
            <TouchableOpacity
                onPress={handleToCheckout}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

const ItemDetailsScreen = ({ route }) => {
    const { itemObj } = route.params;
    const [nutrFacts, handleNFshow] = useState(false);
    const [customize, handleCustomizeshow] = useState(false);
    const navigation = useNavigation();
    const [userCart, setuserCart] = useState([]);

    function showNF() {
        handleNFshow((nutrFacts) => !nutrFacts);
    }
    function showCustom() {
        handleCustomizeshow((customize) => !customize);
    }

    const getData = async () => {
        const userRef = fireDB.collection("users").doc(userID);
        const doc = await userRef.get();

        return doc.data();
    };

    const addItemToCart = async () => {
        const userRef = fireDB.collection("users").doc(userID);

        userCart.push(itemObj);

        // Set the 'userID' field of the cart
        const res = await userRef.update({ cart: userCart });
    };

    const handleAddToCart = async () => {
        addItemToCart();

        navigation.navigate("FoodTypeSelectionScreen");
    };

    const handleToCheckout = async () => {
        addItemToCart();

        navigation.navigate("Cart");
    };

    // Getting FireStore cart
    getData().then((data) => {
        setuserCart(data.cart);
    });

    // handling customization selections
    let tempBool = [];
    for (let i = 0; i < itemObj.custObj.length; i++) {
        tempBool.push(false);
    }
    const permBool = tempBool;
    const [customSelected, handleSelection] = useState(permBool);
    const updateCustomize = (index) => {
        let dummyList = customSelected;
        dummyList[index] = !dummyList[index];
        const updatedSelection = dummyList;

        handleSelection(updatedSelection);
    }

    const customMap = itemObj.custObj.map((element) => (
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <DisplayItemInfo item={itemObj.name} itemUri={itemObj.itemImageFile} desc={itemObj.description}/>
                <DropDown   type={"Nutrition Facts"} handler={showNF} trigger={nutrFacts}
                            content={<Image style={styles.nutrition} source={{ uri: itemObj.nFactsPicFile }}/>}
                />
                <DropDown   type={"Customize"} handler={showCustom} trigger={customize}
                            content={<View style={styles.customOutline}>{customMap}</View>}
                />
                <FinishItem addToCart={handleAddToCart} toCheckout={handleToCheckout} />            
            </ScrollView>
        </SafeAreaView>
    );
};

export default ItemDetailsScreen;

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
    picContainer: {
        height: 200,
        width: null,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    pic: {
        borderColor: "#800000",
        flex:1,
        borderWidth: 3,
        borderRadius: 10,
        width: 200,
        resizeMode: "contain",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
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
        backgroundColor: "#800000",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#800000",
        borderWidth: 2,
    },
    buttonOutlineAlt: {
        backgroundColor: "#800000",
        marginTop: 5,
        borderColor: "#800000",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "#800000",
        fontWeight: "700",
        fontSize: 16,
    },
    customizingUnselected: {
        color: "#800000",
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
