import React from "react";
import { View, Text , StyleSheet} from "react-native";

function Importancia ({navigation}) {
    return (
        <View style={style.box}>

        <View style={style.container}>
         
         <Text style={style.Titulo}>

         A Importância dos Alimentos Orgânicos

         </Text>

         <View style={style.caixaTexto}>
            
            <Text style={style.Texto}>

            A saúde do ser humano é a grande questão sobre a importância do consumo 
            dos alimentos orgânicos, essenciais para o desenvolvimento saudável do corpo. 
            Eles são cultivados da maneira mais natural, deixando o alimento mais rico em nutrientes.

            </Text>

            <Text></Text>

            <Text style={style.Texto}>

            Estudos já comprovaram que uma alimentação balanceada e rica em nutrientes traz muitos benefícios 
            ao corpo, aliada à prática regular de exercícios físicos.

            </Text>

            <Text></Text>

            <Text style={style.Texto}>

            A única desvantagem aparente do consumo dos alimentos orgânicos é o preço elevado dos produtos oferecidos.
            
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
        fontSize:16,
        color:'#000',
        fontStyle:'italic',
        fontWeight:900,
        marginTop:22
    },
    Texto:{
        fontSize:14,
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:500,
        textAlign:'center', 
    },
    caixaTexto:{
        display:'flex',
        width:330,
        height:61,
        flexDirection:"column",
        flexShrink:0,
        marginTop:29,
        marginBottom:10,
        flex:1
    },
})

export default Importancia;