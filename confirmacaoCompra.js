import React from 'react';
import {Text,StyleSheet} from 'react-native';

export default function ConfirmacaoDeCompra(){

    return <>
            <Text style={estilos.cestaCarnes}>
            Compra Realizada com sucesso
            </Text>

    </>
}

const estilos = StyleSheet.create({
    cestaCarnes:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign:"center",
        color: 'red' ,
    },
})