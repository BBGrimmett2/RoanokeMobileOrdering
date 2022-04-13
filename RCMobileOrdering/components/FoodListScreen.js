import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { auth } from "../firebase";

const FoodList = ({navigation}) => {
    const {list,type} = route.params;
    console.log(list);
    return(
      <View>
        <View style={style.container}>
          <Text style={{fontSize:50,color:'grey'}}>{type}</Text>
        </View>
        <View>
          <FlatList data={list} extraData={list} renderItem={({item})=><View style={style.listItem}><Text style={{fontSize:30}}>{item.key}</Text><Text style={{fontSize:30}}>{item.name}</Text></View>} ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'white'}}></View>}/>
        </View>
      </View>
    )
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'maroon',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewer:{
      flex:1,
      height:'100%'
    },
    listItem:{
      flex: 1,
      borderRadius: 15,
      backgroundColor: '#61DBFB'
    }
  });
  