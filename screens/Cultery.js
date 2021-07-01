import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {center} from "../constants/format";

export default class Cutlery extends React.Component{
    render(){
        return (
            <View style={[center]}>
                <Text>Cutlery</Text>
            </View>
        )
    }
}