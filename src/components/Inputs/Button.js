import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Button = (props) => {
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
        backgroundColor: '#00B807',
        borderRadius: 24,
        width: 268,
        marginTop: 40,
        padding: 12
    },
    texto:{
        fontSize:32,
        color: '#FFFFFF',
        fontWeight:'bold',
        fontStyle:'italic',

    },
    caixa:{
        
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        alignItems:'center'
    }
})

export default Button;

