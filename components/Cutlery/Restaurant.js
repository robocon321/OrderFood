import React from "react";
import { StyleSheet,View, Image, Text } from "react-native";
import * as COLOR from "../../constants/color";
import { expensive, fairPrice, affordable } from "../../data/data";

export default Restaurant = (props) =>{
    const {restaurant, getNameCategory} = props;
    const money = ()=> {
        if(restaurant.priceRating == fairPrice){
            return (
                <View style={styles.money}>
                    <Text style={styles.moneyActive}>$</Text>
                    <Text style={styles.moneyNonActive}>$</Text>
                    <Text style={styles.moneyNonActive}>$</Text>
                </View>
            )
        }else if(restaurant.priceRating == affordable){
            return (
                <View style={styles.money}>
                    <Text style={styles.moneyActive}>$</Text>
                    <Text style={styles.moneyActive}>$</Text>
                    <Text style={styles.moneyNonActive}>$</Text>
                </View>
            )
        }else {
            return (
                <View style={styles.money}>
                    <Text style={styles.moneyActive}>$</Text>
                    <Text style={styles.moneyActive}>$</Text>
                    <Text style={styles.moneyActive}>$</Text>
                </View>
            )
        }
    }

    return <View style={styles.container}>
        <View style={styles.wrap}>
            <Image style={styles.image} source={restaurant.photo}/>
            <Text style={styles.time}>{restaurant.duration}</Text>
        </View>
        <Text style={styles.title}>{restaurant.name}</Text>
        <View style={styles.info}>
            <Image style={styles.icon} source={require("../../icons/star.png")}/>
            <Text style={styles.rate}>{restaurant.rating}</Text>
            {getNameCategory(restaurant.categories).map((item, index) =>{
                return <Text style={styles.category} key={index}>{item}</Text>
            })}
            {money()}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    },
    wrap:{
        position: "relative",
        width: "100%",
        height: 220,
    },
    image:{
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 25,
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    time: {
        position: "absolute",
        bottom: 0,
        padding:15,
        borderTopRightRadius: 25,
        fontSize: 20,
        backgroundColor: COLOR.white,
        elevation: 2
    },
    title: {
        marginVertical: 10,
        fontSize: 25,
    },

    info:{
        flexDirection:"row"
    },
    icon:{
        alignSelf:"center",
        width: 20,
        height: 20,
    },
    rate:{
      fontSize: 20,
      marginLeft: 10
    },
    money:{
        flexDirection: "row",
        marginLeft: 10
    },
    category:{
        fontSize: 20,
        marginLeft: 10
    },
    moneyActive:{
        marginRight: 2,
        fontSize: 20,
    },
    moneyNonActive: {
        marginRight: 2,
        fontSize: 20,
        color: COLOR.gray_dark
    }
})