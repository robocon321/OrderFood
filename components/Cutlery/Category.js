import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import * as COLOR from "../../constants/color"
import * as FORMAT from "../../constants/format"


export default Category = (props) =>{
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


const styles = StyleSheet.create({
    wrapCategory:(isActive) =>{
        return {
            elevation: 2,
            width:70,
            height:120,
            marginRight: 10,
            padding: 5,
            ...FORMAT.center,
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
            ...FORMAT.center
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

