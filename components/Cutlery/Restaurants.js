import React from "react"
import { StyleSheet, View, FlatList } from "react-native"
import Restaurant from './Restaurant'

export default Restaurants = (props) =>{
    const {getNameCategory} = props;
    return <View style={styles.container}>
        <FlatList 
            data={props.restaurants}
            renderItem={({item, index}) =>{
                return <Restaurant getNameCategory={getNameCategory} restaurant={item} />
            }}
            keyExtractor = {(item) => `${item.id}`}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 280

    }
})