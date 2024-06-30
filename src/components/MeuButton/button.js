import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity, ImageBackground } from "react-native";
import botaoAna from "../../../assets/botaoAna.png"


const MeuButton = (props) => {
    const estilo = StyleSheet.create({
        botao:{
            backgroundColor:'#6558f5',
            borderRadius:15,
            padding:7.5,
        }
    })
    
    
    return(
        <TouchableOpacity style={estilo.botao} onPress={ props.onclick }>
            <Text>{ props.value }</Text>
        </TouchableOpacity>
    )
}

export default MeuButton;
