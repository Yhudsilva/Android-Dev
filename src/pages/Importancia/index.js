import React from "react";
import { View, Text , StyleSheet} from "react-native";

function Importancia ({navigation}) {
    return (
        <View style={style.box}>
        <View style={style.container}>

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
      justifyContent:'center'
    }   
})

export default Importancia;