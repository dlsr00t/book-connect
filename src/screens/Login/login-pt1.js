import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MeuInput from '../../components/MeuInput/input.js';
import MeuButton from '../../components/MeuButton/button.js';

const LoginPt1 = ({navigation}) =>{
  const logar = () =>{
    navigation.navigate('HomeDrawer');
  }  
  
  const estilo2 = StyleSheet.create({
        overall: {
            /*backgroundColor:'#1a1a1a',*/
            backgroundColor:'white',
            display:'flex',
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        titulo:{
          fontWeight:800,
          fontSize:40,
          color:'#6558f5',
          marginBottom:15,
        }
      
      });
    return (
        <View style={estilo2.overall}>
          <Text style={estilo2.titulo}>Padaria do seu zé</Text>
          <MeuInput 
          label="Usuário"
          placeHolder="admin@admin.com"
          Esconder={ false }
          />
    
          <MeuInput 
          label="Senha"
          placeHolder="12345"
          Esconder={ true }
          />
          <MeuButton value="Entrar" onclick={logar}/>
        </View>
      );
}

export default LoginPt1;
