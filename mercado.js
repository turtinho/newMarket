import React from 'react';
import {Text, Image, View, TouchableOpacity,ScrollView} from 'react-native';

import estilos from './estilos.js';
import topo from "./assets/topo.png";
import logo from "./assets/logo.png";
import asado from "./assets/produtos/asado_tira.png"
import denver from "./assets/produtos/denver_steak.png"
import flat from "./assets/produtos/flat_iron.png"
import prime from "./assets/produtos/prime_rib.png"
import tomahawk from "./assets/produtos/tomahawk.png"


export default function Mercado(){
    return <ScrollView>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.cestaCarnes}>Cesta de Carnes</Text>
    <View style={estilos.acougue}>
        <Image source={logo} style={estilos.imagemAcougue}></Image>
        <Text style={estilos.nomeAcougue}>Açougue do Osmar</Text>   
    </View>
    <Text style={estilos.descricao}> 
        As melhores e mais selecionadas carnes, com produção própria,
        direto de nosso pasto para a mesa da sua casa!
    </Text>
    
    <Text style={estilos.itensCesta}>
        Itens da Cesta de Compras
    </Text>
    <View style={estilos.carnes}>
        <Image source={asado} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Asado de Tira</Text>
        <Text style={estilos.precoItens}>146,98</Text>
        <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.textoBotao}>
            Adicionar
        </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.carnes}>
        <Image source={denver} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Denver Steak</Text>
        <Text style={estilos.precoItens}>149,00</Text>
        <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.textoBotao}>
            Adicionar
        </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.carnes}>
        <Image source={flat} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Flat Iron</Text>
        <Text style={estilos.precoItens}>130,00</Text>
        <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.textoBotao}>
            Adicionar
        </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.carnes}>
        <Image source={prime} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Prime Rib</Text>
        <Text style={estilos.precoItens}>125,00</Text>
        <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.textoBotao}>
            Adicionar
        </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.carnes}>
        <Image source={tomahawk} style={estilos.imagemCarnes}></Image>
        <Text style={estilos.itens}>Tomahawk</Text>
        <Text style={estilos.precoItens}>189,90</Text>
        <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.textoBotao}>
            Adicionar
        </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
}


