import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";


const MainButton = (props) => {
    return (
        <View >
          <TouchableOpacity style={style.button} onPress={props.acao} >
            <Text style={style.texto}>{props.value}</Text>
          </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create ({
    button:{
        alignItems: 'center',
        borderRadius:23,
        width:344,
        height:85,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#000000',
        marginTop:25,
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
        fontSize:32,
        fontWeight:'bold',
        color:'#000000'
    }
})


export default MainButton;