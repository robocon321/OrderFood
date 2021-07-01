import React from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import data from "../data/data.json";
import * as ICON from "../constants/icon";
import * as COLOR  from "../constants/color";

const Header = () =>{
    return  (
        <View style={styles.wrap}>
            <Image source={ICON.locate} style={styles.image}/>
            <View style={styles.wrapText}>
                <Text style={styles.text}>Kuching</Text>
            </View>
            <Image  source={ICON.cart} style={styles.image} />
        </View>
    )               
}

const Title = () =>{
    return (
    <View style={styles.wrapTitle}>
        <Text style={styles.title}>Main</Text>
        <Text style={styles.title}>Categories</Text>
    </View>

    )
}
export default class Cutlery extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar />
                <Header />
                <Title />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        padding: 10,
        backgroundColor:COLOR.white
    },
    wrap: {
       flexDirection: "row",
       justifyContent:"space-between",
    },
    image:{
        width:35,
        height: 35
    },
    wrapText:{
        width:200,
        height:40,
        backgroundColor:COLOR.gray_light,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius: 50,
        borderColor: COLOR.black
    },
    text:{
        color: COLOR.black,
        fontSize: 20
    },
    wrapTitle:{
        marginVertical: 10
    },
    title:{
        fontSize: 40,
        fontWeight:"bold"
    }
})