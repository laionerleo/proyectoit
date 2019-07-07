/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Button ,StyleSheet, Text,} from 'react-native';


import {  createStackNavigator, createAppContainer ,DrawerNavigator } from 'react-navigation';


import Login from './src/screens/login';
import inicio from './src/screens/inicio';
import contacto from './src/screens/contacto';
import iconoamburguesa from './src/screens/iconoamburguesa';




const AppNavigator =  createStackNavigator({
  loginscreen:{ screen: Login},
  inicioscreen:{ screen: inicio},
  contactoscreen : {screen : contacto}
  
  
},
{
  initialRouteName: "contactoscreen"
  
}



);
const Container = createAppContainer(AppNavigator);



export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
      return  ( <Container />); 
  }
}

