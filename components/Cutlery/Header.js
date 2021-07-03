import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as ICON from "../../constants/icon";
import * as COLOR from "../../constants/color"
import * as FORMAT from "../../constants/format"

export default Header = (props) =>{
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

const styles = StyleSheet.create({
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
         ...FORMAT.center,
         padding:5,
         borderRadius: 50,
         borderColor: COLOR.black
     },
     text:{
         color: COLOR.black,
         fontSize: 20
     } 
})