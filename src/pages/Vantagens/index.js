import React from "react";
import { View, Text, StyleSheet} from "react-native";

function Vantagens ({navigation}) {
    return (
        <View style={style.box}>

         <View style={style.container}>

           <Text style={style.Titulo}>

            Vantagens 

           </Text>

           <View style={style.List}>

            <Text style={style.Texto}>

            1 - Viabiliza a conservação e fertilidade do solo, garantindo o equilíbrio ambiental;

            </Text>

            <Text style={style.Texto}>

            2 - Minimiza o impacto sobre o meio ambiente;

            </Text>

            <Text style={style.Texto}>

            3 - Otimiza o uso dos recursos naturais, garantindo a sustentabilidade ecológica;

            </Text>

            <Text style={style.Texto}>

            4 - Elimina o uso de Agrotóxicos.

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
      justifyContent:'flex-start'
    } ,
    Titulo:{
        fontSize:32,
        color:'#000',
        fontStyle:'italic',
        fontWeight:800,
        marginTop:40,
        marginBottom:30
    },
    
    SubTitulo:{
        textAlign:'center',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:900
    },
    List:{
        display:'flex',
        width:262,
        height:82,
        flexShrink:0,
        flexDirection:'column'
    },
    Texto:{
        fontSize:15,
        fontStyle:'italic',
        fontWeight:600,
        marginBottom:20
    }
})


export default Vantagens;