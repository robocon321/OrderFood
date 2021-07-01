import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as COLOR from "./constants/color";
import * as ICON from "./constants/icon";
import Cultery from "./screens/Cultery";
import Account from "./screens/Account";
import Heart from "./screens/Heart";
import Search from "./screens/Search";


const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            showLabel: false
        }}>
          <Tab.Screen 
            name="Cutlery" 
            component={Cultery} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image source={ICON.cutlery}
                        resizeMode="contain"
                        style={styles.imageTab(focused)} />
              )
            }}
          />
          <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image source={ICON.search}
                        resizeMode="contain"
                        style={styles.imageTab(focused)} />
              )
            }}
          />       
          <Tab.Screen 
            name="Heart" 
            component={Heart} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image source={ICON.heart}
                        resizeMode="contain"
                        style={styles.imageTab(focused)} />
              )
            }}
          />
          <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image source={ICON.account}
                        resizeMode="contain"
                        style={styles.imageTab(focused)} />
              )
            }}
          />
          
          </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageTab:(focused)=> ({
    width: 25,
    height: 25,
    tintColor: focused ? COLOR.orange_light : COLOR.gray_dark                          
  })
});
