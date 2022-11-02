import React from 'react';
import {Text,Image, View, TouchableOpacity,ScrollView} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import asado from "./assets/produtos/asado_tira.png"
import tomahawk from "./assets/produtos/tomahawk.png"

import estilos from './estilos.js';

const preco = 336.88;

export default function Carrinho({navigation}){
    return <ScrollView>
        <View >
            <Text style={estilos.cestaCarnes}>
                Resumo das Compras
            </Text>
    </View>
        <View style={estilos.carnes}>
        <Image source={asado} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Asado de Tira</Text>
        <Text style={estilos.precoItens}>146,98</Text>
        <TouchableOpacity style={estilos.botaoAdicionar} onPress={()=> navigation.goBack()}>
        <Text style={estilos.textoBotao}>
            Remover
        </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.carnes}>
        <Image source={tomahawk} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Tomahawk</Text>
        <Text style={estilos.precoItens}>189,90</Text>
        <TouchableOpacity style={estilos.botaoAdicionar} onPress={()=>navigation.goBack()}>
        <Text style={estilos.textoBotao}>
            Remover
        </Text>
        </TouchableOpacity>    
    </View>
    <View>
    <Text style={estilos.itens}>
        Total
    </Text>
    <Text style={estilos.precoCesta}>{
        Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(preco)
    }    
    </Text>
    </View>
        <TouchableOpacity style={estilos.botao} onPress={() => {
            navigation.navigate('FinalizaçãoCompra')
            }}>
        <Text style={estilos.textoBotao}>
            Finalizar Compra
        </Text>
    </TouchableOpacity>
    
    </ScrollView>
        
}


