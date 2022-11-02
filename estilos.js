import {StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    topo:{
        width: "100%",
        //largura
        height: 578 / 768 * width,
        //altura
        
    },
    cestaCarnes:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign:"center",
        color: 'red' ,
    },
    acougue:{
        flexDirection:"row",
        paddingVertical:12,
    },
    nomeAcougue:{
        fontSize:16,
        lineHeight:40,
        marginLeft:12,
        fontWeight:'bold',
    },
    imagemAcougue:{
        width:42,
        height:42,
    },
    descricao:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26,
        paddingHorizontal:12,
    },
    precoCesta:{
        color:"#8B0000",
        fontWeight:"bold",
        fontSize:32,
        lineHeight:42,
        marginTop:8,
        paddingHorizontal:12,
    },
    textoBotao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight:"bold",
    },
    botao:{
        margin: 16,
        marginTop: 16,
        backgroundColor: "#B22222",
        paddingVertical: 16,
        borderRadius: 6,
    },
    itensCesta:{
        textAlign:'center',
        fontSize: 18,
        fontWeight: "bold",
        paddingVertical: 20
    },
    itens:{
        fontSize:16,
        lineHeight:55,
        marginLeft:12,
        fontWeight:'bold',
        textAlign: 'justify',
    },
    imagemCarnes:{
        width:60,
        height:60,
    },
    carnes:{
        flexDirection:"row",
        paddingVertical:15,
        justifyContent:'space-between'
    },
    botaoAdicionar:{
        flexDirection:'row-reverse',
        margin: 16,
        marginTop: 16,
        backgroundColor: "#B22222",
        paddingVertical: 6,
        paddingHorizontal:8,
        borderRadius: 6,
          
    },
    precoItens:{
        fontSize:16,
        lineHeight:55,
        marginLeft:12,
        fontWeight:'bold',
        textAlign: 'justify',
        color:'red'
    },
    ajusteTela:{
        flex:1,
        backgroundColor: '#8B0000',
    },
    cestaCarnes:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign:"center",
        color: 'red' ,
    },
    preencher:{
        flex:1
    },
    textButton2:{
        fontWeight:'bold',
        textAlign:'center' ,
        marginTop:10,
    },
})