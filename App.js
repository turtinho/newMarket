import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Register from './register.js'


//SafeAreaView - para iOS
//StatusBar - para Android

import Rotas from './rotas.js';
import Cadastro from './cadastro.js';

export default function App() {

  const [logins, setLogins] = useState([])
  const [senhas, setSenhas] = useState([])

  async function mostraLogins(){
    const todasChaves = await AsyncStorage.getAllKeys();
    const todosLogins = await AsyncStorage.multiGet(todasChaves)
    setLogins(todosLogins)
    console.log(todosLogins)
  }

  async function mostraSenhas(){
    const todasChaves = await AsyncStorage.getAllKeys();
    const todasSenhas = await AsyncStorage.multiGet(todasChaves)
    setSenhas(todasSenhas)
    console.log(todasSenhas)
  }

  return (
    <SafeAreaView style={estilos.ajusteTela}>
      <StatusBar />
      <FlatList
      data={logins}
      renderItem={(login) => <Register {...login}/>}
      keyExtractor={login => login[0]}/> 
      <Cadastro mostraLogins={mostraLogins()}/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  ajusteTela:{
      flex:1,
      backgroundColor: '#8B0000',
  }
})
