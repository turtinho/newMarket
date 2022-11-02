import React, { useState }  from 'react';
import {Text,View,TextInput,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Cadastro(mostraLogins,mostraSenhas){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    async function salvaLogin(){
        const novoId = await geraId()
        const umLogin = {
            id:novoId.toString(),
            login:login,
        }
        console.log(umLogin)
        await AsyncStorage.setItem(umLogin.id,umLogin.login)
        mostraLogins()
    }

    async function salvaSenha(){
        const novoId = await geraId()
        const umaSenha ={
            id:novoId.toString(),
            senha:senha,
        }
        console.log(umaSenha)
        await AsyncStorage.setItem(umaSenha.id,umaSenha.senha)
        mostraSenhas()
    }

    async function geraId(){
        const todasChaves = await AsyncStorage.getAllKeys()
        if (todasChaves <= 0){
            return 1
        }
        return todasChaves.length + 1
    }


    return <ScrollView>
     <View>
        <Text style={estilos.mensagem}>
            Seja bem vindo, faça seu cadastro para aproveitar mais de nossa loja
        </Text>

        <TextInput 
        style={estilos.input} 
        placeholder="Digite Seu Nome de Usuário"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={novoLogin => setLogin(novoLogin)}
        value={login}
        /> 
        
        <TextInput 
        style={estilos.input}
        placeholder="Digite Sua Senha"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={novaSenha => setSenha(novaSenha)}
        value={senha}
        />

        <TextInput 
        style={estilos.input}
        placeholder="Digite Novamente Sua Senha" 
        placeholderTextColor={'#A9A9A9'}
        />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => {salvaLogin(),salvaSenha()}}>
            <Text style={estilos.textoBotao}>
                Cadastrar
            </Text>
        </TouchableOpacity>

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
        paddingVertical: 20
    },
    itensCesta:{
        textAlign:'center',
        fontSize: 15,
        
    },
    mensagem:{
        textAlign:'center',
        fontSize:18,
        padding:13,

    }
})
