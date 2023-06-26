import React, {useState} from "react";
import {Text, StyleSheet, View, Alert, Image, StatusBar} from "react-native";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";


import MainButton from "../../components/MainButton";
import OtherButton from "../../components/Inputs/OtherButton";



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

  const rota4 = () => {
    navigation.navigate('Configs')
  }

  const rota5 = () => {
    navigation.navigate('Locais')
  }

  return (

  <View style={style.box}>

<Header acao={rota4}></Header>
    <View style={style.box}>

      <StatusBar barStyle={'light-content'} translucent={false}></StatusBar>

      <View style={style.container}>
        <MainButton value='Os Orgânicos' acao={rota1} ></MainButton>
        <MainButton value='Vantagens' acao={rota2}></MainButton>
        <MainButton value='Agricultura Sustentável' acao={rota3}></MainButton>
        <OtherButton value={<AntDesign name="isv" size={24}  ><Text style={{fontSize:20,fontWeight:'bold'}}>  Orgânicos perto de você</Text></AntDesign>} acao={rota5}></OtherButton>
      </View>
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
    },
   
})


export default Home; 
