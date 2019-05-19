import React from 'react';
import {Button, StyleSheet, Text, View,ScrollView,Image,Linking,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Headlines from './Headlines.js'




const AppNavigator = createStackNavigator({
    
   
    Home: {
        screen: Headlines
    }
});

export default createAppContainer(AppNavigator);
