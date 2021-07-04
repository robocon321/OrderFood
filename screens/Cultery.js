import React from "react";
import { StyleSheet, View, StatusBar} from "react-native";
import * as data from "../data/data.js";
import * as COLOR  from "../constants/color";
import Header from "../components/Cutlery/Header"
import Title from "../components/Cutlery/Title"
import Categories from "../components/Cutlery/Categories"
import Restaurants from "../components/Cutlery/Restaurants"
export default class Cutlery extends React.Component{
    constructor(){
        super();
        this.state = {
            categoryData: data.categoryData,
            selected: 2,
            restaurantData: data.restaurantData
        };
    }

    setSelected = (id) =>{
        this.setState({
            ...this.state,
            selected: id
        })    
    }

    isActive = (id) =>{
        return id == this.state.selected;
    } 

    getNameCategory = (ids) => {
        let arr = [];
        this.state.categoryData.forEach((item)=>{
            if(ids.includes(item.id)){
                arr.push(item.name);
            }
        })
        return arr;
    }

    render(){
        const {categoryData, restaurantData, selected} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar />
                <Header />
                <Title />
                <Categories categoryData={categoryData} setSelected = {this.setSelected} isActive={this.isActive}/>
                <Restaurants restaurants={restaurantData.filter((item) =>{
                    return item.categories.includes(selected)
                })} getNameCategory={this.getNameCategory}/>
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
    }
})