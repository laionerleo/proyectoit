/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Button ,StyleSheet, Text,} from 'react-native';


import {  createStackNavigator, createAppContainer  } from 'react-navigation';


import Login from './src/screens/login';
import inicio from './src/screens/inicio';

const AppNavigator =  createStackNavigator({
  inicioscreen:{ screen: inicio},
  loginscreen:{ screen: Login}
  
});
const Container = createAppContainer(AppNavigator);



export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
      return  ( <Container />); 
  }
}

