import React from "react";
import { StyleSheet, View, Text, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";
import * as data from "../data/data.js";
import * as ICON from "../constants/icon";
import * as COLOR  from "../constants/color";
import * as Font from 'expo-font';
import * as format from "../constants/format";

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

const Categories = (props) => {
    const {setSelected, isActive} = props;
    return (
        <View>
            <FlatList 
                data={props.categoryData}
                renderItem={({item, index}) =>{
                    return <Category item={item} setSelected={setSelected} isActive={isActive}/>
                }}
                keyExtractor={(item) => `${item.id}`}
                horizontal = {true}
            />
        </View>
    )
}

const Category = (props) =>{
    const {item, setSelected, isActive} = props;
    const isSelected = isActive(item.id);
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>setSelected(item.id)}>
            <View style={styles.wrapCategory(isSelected)}>
                <View style={styles.containerCategoryImage(isSelected)}>
                    <Image style={styles.categoryImage} source={item.icon}/>
                </View>
                <Text style={styles.categoryText(isSelected)}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default class Cutlery extends React.Component{
    constructor(){
        super();
        this.state = {
            isReady: false, 
            categoryData: data.categoryData,
            selected: 1
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

    render(){
        if(this.state.isReady){
            const {categoryData} = this.state;
            return (
                <View style={styles.container}>
                    <StatusBar />
                    <Header />
                    <Title />
                    <Categories categoryData={categoryData} setSelected = {this.setSelected} isActive={this.isActive}/>
                </View>
            )    
        }else {
            return null
        }
    }

    componentDidMount() {
        this.loadFont();
    }

    async loadFont() {
        await Font.loadAsync({
            openSansRegular: require('../assets/fonts/OpenSans-Semibold.ttf')
          });
          this.setState({ isReady: true });
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
        ...format.center,
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
        fontSize: 35,
        fontFamily: "openSansRegular"
    },
    wrapCategory:(isActive) =>{
        return {
            elevation: 2,
            width:70,
            height:120,
            marginRight: 10,
            padding: 5,
            ...format.center,
            borderRadius: 50,
            backgroundColor: isActive ? COLOR.orange_light : COLOR.white
        }
    },
    containerCategoryImage: (isActive)=>{
        return {
            width: 55,
            height: 55,
            backgroundColor: isActive ? COLOR.white : COLOR.gray_light,
            borderRadius: 50,
            ...format.center
        }
    },
    categoryImage:{
        width: 40,
        height: 40
    },
    categoryText: (isActive) =>{
        return {
            color: isActive ? COLOR.white : COLOR.black,
            marginTop:10,
            fontSize: 12,
            fontWeight: "bold"
        }
    }
})