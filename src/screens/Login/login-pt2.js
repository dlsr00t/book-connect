import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import logo from "../../../assets/logoMaior.png";
import fotoBiblioteca from "../../../assets/fotoBiblioteca.jpg";
import loginLETTERS from "../../../assets/loginLETTERS.png";
import fotoUsuario from "../../../assets/userFoto.png";
import MeuInput from "../../components/MeuInput/input.js"


import {
    useFonts,
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic,
  } from '@expo-google-fonts/jost';
  
import {  
    BalooTammudu2_400Regular,
    BalooTammudu2_500Medium,
    BalooTammudu2_600SemiBold,
    BalooTammudu2_700Bold,
    BalooTammudu2_800ExtraBold } from "@expo-google-fonts/baloo-tammudu-2"
  


const LoginPt2 = ({navigation}) =>{
    let [fontsLoaded] = useFonts({
        Jost_100Thin,
        Jost_200ExtraLight,
        Jost_300Light,
        Jost_400Regular,
        Jost_500Medium,
        Jost_600SemiBold,
        Jost_700Bold,
        Jost_800ExtraBold,
        Jost_900Black,
        Jost_100Thin_Italic,
        Jost_200ExtraLight_Italic,
        Jost_300Light_Italic,
        Jost_400Regular_Italic,
        Jost_500Medium_Italic,
        Jost_600SemiBold_Italic,
        Jost_700Bold_Italic,
        Jost_800ExtraBold_Italic,
        Jost_900Black_Italic,
      });
    
    const estilo = StyleSheet.create({
        headerRedondo:{
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
            /*
            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.55)',
            */
            top:-250,
            right:40,
            width:'120%',
                        
            height:500,
            
            borderRadius:9999,
            
        },
        conteudo:{
            top:330,
            justifyContent:"center", 
            alignItems:"center", 
            textAlign:'center',
            
        },
        degrade:{
            top:-250,
            height:500,
            borderRadius:9999,
            zIndex:111,
        },
        titulo:{
            /*
            top:-250,
            */
            color:'white',
            width:259,
            height:65,
            fontWeight:400,
            fontSize:40,
            left:80,
            fontFamily:'Jost_300Light',
            top:-120,
        },
        subtitulo:{
            color:'white',
            fontSize:20,
            fontWeight: 400,
            fontFamily: 'BalooTammudu2_700Bold',
            left:120,
            top:-130,
        },
        loginLetters:{
            display:'flex',
            justifyContent:'center',
            alignSelf:'center',
            top:-280,
        },
        modalManual:{
            width:'100%',
            height:460,
            opacity:0.72,
            top:-400,
            zIndex:-1,
            borderRadius:16,
        }


    })

    return(
        <View>
                <LinearGradient colors={['#C75210','#E35708','#F5C57C']} 
                style={estilo.degrade}>
                    <View style={estilo.headerRedondo}>
                        <Image style={estilo.conteudo} source={logo}></Image>
                    </View>
                    <Text style={estilo.titulo}>BookConnect</Text>
                    <Text style={estilo.subtitulo}>BEM-VINDO(A)!</Text>
                </LinearGradient>
                <Image source={fotoBiblioteca} style={{position:'absolute',top:0, zIndex:-1, height:'150%'}}/>
                    <View>
                        <Image source={loginLETTERS} style={estilo.loginLetters}/>
                        <LinearGradient colors={['#993700B8','#CC4900B8','#BC7F24B8']}  style={estilo.modalManual}>
                            
                        </LinearGradient>
                        <Image source={fotoUsuario} style={{position:'absolute',display:'flex',justifyContent:'center', alignSelf:'center', top:-185}}/>
                        <View style={{zIndex:114, position:"absolute", top:-40, left:30}}>
                            <Text>Usuário</Text>
                            <TextInput 
                            placeholder="example@example.com"
                            secureTextEntry={ false }
                            style={{            
                                borderWidth:1,
                                marginBottom:15,
                                marginTop:3,
                                padding:10,
                                width:320,
                                borderRadius:4,
                                zIndex:113
                                
                                }}
                            />
                        </View>

                        <View style={{zIndex:114, position:"absolute", top:30, left:30}}>
                            <Text>Senha</Text>
                            <TextInput 
                            placeholder="########"
                            secureTextEntry={ true }
                            style={{            
                                borderWidth:1,
                                marginBottom:15,
                                marginTop:3,
                                padding:10,
                                width:320,
                                borderRadius:4,
                                zIndex:113
                                }}
                            />
                        </View>
                    </View>

        </View>

    )    
}


export default LoginPt2;

