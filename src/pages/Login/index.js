import React, {useState} from "react";
import {Text, StyleSheet, View, Alert, Image} from "react-native";

import InputLogin from "../../components/Inputs/InputLogin";
import Button from "../../components/Inputs/Button";



function Login ({navigation}){



return (
    <View style={style.boxLogin}>

    <Image style={style.imagem}
    source={require('../../../assets/Logo.png.png')}/>

     <Text style={style.Titulo} >Login</Text>

    <InputLogin 
      label="E-mail"
      placeHolder="exemplo@gmail.com"
      comMascara={false}>
    </InputLogin>
    <InputLogin 
      label="Senha"
      placeHolder="1234"
      comMascara={true}>
    </InputLogin>

    <Button 
    value={"ENTRAR"}
    ></Button>
  </View>
)

}

const style = StyleSheet.create({
    boxLogin:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA800'
        
    },
    Titulo:{
        fontSize:48,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#000000',
        fontStyle: 'italic',
    
    },
    imagem:{
        width: 200,
        height: 200,
       
        
    }
})

export default Login; 
