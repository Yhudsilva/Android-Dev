import React, {useState} from "react";
import {Text, StyleSheet, View, Alert, Image,} from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen'

import MainButton from "../../components/MainButton";

const user = {
  email: "admin@gmail.com",
  senha: "12345"
}



function Home ({navigation}){
 
  const rota1 = () => {
    navigation.navigate('Organicos')
  }

  const rota2 = () => {
    navigation.navigate('Vantagens')
  }

  const rota3 = () => {
    navigation.navigate('Importancia')
  }



  return (
    <View style={style.box}>
      <View style={style.container}>
        <MainButton value='Os Orgânicos' acao={rota1} ></MainButton>
        <MainButton value='Vantagens' acao={rota2}></MainButton>
        <MainButton value='Qual sua importância' acao={rota3}></MainButton>
      </View>
    </View>
)

}

const style = StyleSheet.create({
    box:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDFA1'
        
    },
    container:{
      backgroundColor:'#FFA800',
      alignItems:'center',
      width:360,
      height:505,
      borderRadius:32,
      borderColor:'#000000',
      borderWidth:2,
      justifyContent:'center'
    }   
})

export default Home; 
