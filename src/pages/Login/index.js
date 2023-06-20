import React, {useState} from "react";
import {Text, StyleSheet, View, Alert, Image} from "react-native";

import InputLogin from "../../components/Inputs/InputLogin";
import Button from "../../components/Inputs/Button";

const user = {
  email: "admin@gmail.com",
  senha: "12345"
}



function Login ({navigation}){

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const logar = () => {
    
    if(!email || !senha) {

      Alert.alert(`O e-mail e senha devem ser preenchidos.`);

     } else if (email !== user.email || senha !== user.senha) {

      Alert.alert(`O e-mail ou senha estão incorretos.`);

     } else {

      navigation.navigate('Home')

     }

}

return (
    <View style={style.boxLogin}>

    <Image style={style.imagem}
    source={require('../../../assets/Logo.png.png')}/>

     <Text style={style.Titulo} >Login</Text>

    <InputLogin 
      label="E-mail"
      placeHolder="exemplo@gmail.com"
      comMascara={false}
      Valor = {email}
      setValor= {setEmail}>
    </InputLogin>
    <InputLogin 
      label="Senha"
      placeHolder="1234"
      comMascara={true}
      Valor = {senha}
      setValor= {setSenha}>
    </InputLogin>

    <Button 
    value={"ENTRAR"}
    acao={logar}
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
