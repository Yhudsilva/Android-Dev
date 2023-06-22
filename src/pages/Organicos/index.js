import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Organicos ({navigation}) {
    
    return(
         <View style={style.box}>

          <View style={style.container}>

          <Text style={style.Titulo}>
                Os Orgânicos
                </Text>

            <View style={style.caixaTexto}>

               <Text style={style.Texto}>
               Os alimentos orgânicos são obtidos por um processo de produção não prejudicial ao ecossistema. Em outras palavras, o foco é na sustentabilidade.
               </Text>

            </View>

            <Text style={style.SubTitulo}>Porque eles ajudam na sustentabilidade?</Text>

            <View style={style.caixaTexto2}>

                <Text style={style.Texto}>
                Os recursos naturais são limitados e as práticas da produção orgânica ajudam a preservar o solo e o meio ambiente. Uma produção sustentável garante, por consequência, que as futuras gerações terão acesso a solos agriculturáveis por mais tempo, garantindo seu sustento. Um fato evidente é que nossos hábitos de consumo influenciam o futuro da humanidade.
                </Text>

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
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      width:360,
      height:505,
      borderRadius:32,
      borderColor:'#000000',
      borderWidth:2,
      justifyContent:'center',
      padding:30
    } ,
    Titulo:{
        fontSize:32,
        color:'#000',
        fontStyle:'italic',
        fontWeight:800,
        marginTop:22
    },
    Texto:{
        fontSize:14,
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:600
    },
    caixaTexto2:{
        display:'flex',
        width:330,
        height:61,
        flexDirection:"column",
        flexShrink:0,
        marginTop:29,
        marginBottom:10,
        flex:1
    },
    SubTitulo:{
        textAlign:'center',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:900
    },
    caixaTexto:{
        display:'flex',
        width:330,
        height:61,
        flexDirection:"column",
        flexShrink:0,
        marginTop:30,
        marginBottom:10,
    },
})


export default Organicos;