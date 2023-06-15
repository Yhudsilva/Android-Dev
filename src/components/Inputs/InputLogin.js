import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text, Alert} from "react-native";

const InputLogin = (props) => {
    return (
        <SafeAreaView>
            <Text style={style.text}>{props.label}</Text>
            <TextInput style={style.input} 
            placeholder={props.placeHolder} 
            secureTextEntry={props.comMascara} 
            onChangeText={valor => props.setValor(valor)}
            
            ></TextInput>
        </SafeAreaView> 
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 3,
        padding: 10,
        width: 320,
        fontSize: 18,
        backgroundColor: "#D9D9D9",
        borderRadius: 47
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        fontStyle: 'italic',
    
        
    }
});

export default InputLogin;