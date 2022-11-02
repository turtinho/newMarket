import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default function Register(item){

    return <View>
            <Text style={estilos.cestaCarnes}>
            {item[1]}
            </Text>

    </View>
}

const estilos = StyleSheet.create({
    cestaCarnes:{
        color: "#464646",
        fontSize: 22,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign:"center",
        color: 'red' ,
    },
})