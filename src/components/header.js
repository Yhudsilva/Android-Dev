import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

function Header (props) {

    return (

        <View style={style.header}>
            <TouchableOpacity onPress={props.acao}>
                <AntDesign name="setting" size={30} color={'#000'} style={{marginLeft:10}}/>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create ({
    header:{
        height:47,
        width:360,
        flexShrink:0,
        borderBottomWidth:1,
        backgroundColor:'#FFF',
      // alignContent:'flex-start',
        justifyContent:'center',
    }
})

export default Header;