import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {WebView} from "react-native-webview"


function Locais  () {
    const [Go,SetGo] = useState(false);

    if (Go == false) {
     return (
        <View style={style.box}>
           <View style={style.container}>
            <Text style={style.Titulo}>Orgânicos perto de você</Text>

            <TouchableOpacity onPress={() => SetGo(true)} style={style.button}><AntDesign name="shoppingcart" size={30}> <Text style={{fontWeight:'bold'}}>  Feira </Text></AntDesign></TouchableOpacity>
           </View>
        </View>
     )
    } else {
        return (
            <WebView
            source={{uri:'https://goo.gl/maps/PsRdLHxSFQESk8uA6'}}
            />
        )
    }
}

const style = StyleSheet.create ({
  box : {
    flex: 1,
    backgroundColor:'#FFDFA1',
    justifyContent:'center',
    alignItems:'center',
  },
  container : {
    backgroundColor:'#FFF',
   //justifyContent:'center',
    alignItems:'center',
    width:360,
    height:550,
    flexShrink:0,
    borderWidth:1
  },
  Titulo :{
    fontSize:27,
    fontWeight:'700',
    marginTop:30,
    marginBottom:50
  },
  button :{
    width:360,
    height:58,
    borderWidth:1,
    justifyContent:'center'
  }
})

export default Locais;