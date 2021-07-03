import React , {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';

export default Title = (props) =>{
    const [ready, setReady] = useState(false);

    const loadFont = async () => {
        await Font.loadAsync({
            openSansRegular: require('../../assets/fonts/OpenSans-Semibold.ttf')
        });
        setReady(true);
    }

    if(ready){
        return (
            <View style={styles.wrapTitle}>
                <Text style={styles.title}>Main</Text>
                <Text style={styles.title}>Categories</Text>
            </View>
        )    
    }else{
        loadFont();
        return <View></View>
    }
}

const styles = StyleSheet.create({
    wrapTitle:{
        marginVertical: 10
    },
    title:{
        fontSize: 35,
        fontFamily: "openSansRegular"
    }
})