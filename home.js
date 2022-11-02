import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mercado from './mercado.js'
import Login from './login.js';
import ConfirmacaoDeCompra from './confirmacaoCompra.js';
import Cadastro from './cadastro.js'
import Register from './register.js'

const Stack = createNativeStackNavigator();

export default function Home(){
    return<Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name='Mercado' component={Mercado}/>
            <Stack.Screen name='FinalizaçãoCompra' component={ConfirmacaoDeCompra}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
}


