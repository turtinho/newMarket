import React from 'react';
import {Text, View,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native';

import logo from "./assets/logo.png";

export default function Login({navigation}){
    return<ScrollView>
        <View style={estilos.acougue}>
        <Image source={logo} style={estilos.cabecalho}></Image>
        <Text style={estilos.texto}>Açougue do Osmar</Text>   
    </View>
    <TextInput style={estilos.input} placeholder= "Digite seu login" placeholderTextColor={'#A9A9A9'}/>
    <TextInput style={estilos.input} placeholder= "Digite sua senha" placeholderTextColor={'#A9A9A9'} secureTextEntry={true}/>
    <TouchableOpacity style={estilos.botao} onPress={() => {navigation.navigate('Mercado')}}>
        <Text style={estilos.textoBotao}>
            Logar
        </Text>
    </TouchableOpacity>
    <Text style={estilos.itensCesta} onPress={() => {
            navigation.navigate('Cadastro')
        }}>
        Crie sua conta agora mesmo!
        </Text>
    </ScrollView>
}


const estilos = StyleSheet.create({
    cabecalho:{
     width:150,
     height:150,
     flexDirection:'column',
     alignSelf:"center",
     marginTop:20,
    },
    texto:{
        color:'#8B0000',
        fontWeight:"bold",
        textAlign:"center",
        fontSize:26,
        marginVertical:10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:"white",
        borderRadius: 6,
      },
      botao:{
        margin: 16,
        marginTop: 16,
        backgroundColor: '#8B0000',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight:"bold",
        fontSize:22
    },
    textButton2:{
        fontWeight:'bold',
        textAlign:'center',
        padding: 20
    },
    itensCesta:{
        textAlign:'center',
        fontSize: 15,
        paddingTop:10,
        fontWeight:'bold',
    },
})
