/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  createStackNavigator, createAppContainer ,createDrawerNavigator  } from 'react-navigation';
import {
  TextInput,
  ScrollView,
    Dimensions,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';


import Login from './src/screens/login';
import menu from './src/screens/menu';
import contacto from './src/screens/contacto';
import inicio from './src/screens/inicio';
import vista1 from './src/screens/vista1';
import vista2 from './src/screens/vista2';





const RootDrawer = createDrawerNavigator(
	{
    loginscreen:{ screen: Login},
    inicioscreen: {screen: inicio},
    vista1screen:{ screen: vista1},
    vista2screen: {screen: vista2},
    contactoscreen: {screen: contacto},
    
    
  },
  {
    initialRouteName: "loginscreen",
contentComponent: (menu),
  drawerWidth: Dimensions.get('window').width - 120, 
  headertitle: "vista1"
 
  }
);

const AppNavigator =  createStackNavigator({
  loginscreen:{ screen: Login},
  inicioscreen: {screen: inicio},
},
{
  initialRouteName: "loginscreen",
  contentComponent: menu,
  drawerWidth: Dimensions.get('window').width -150 ,  
  
});


const Container2 = createAppContainer(RootDrawer);





export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
      return  ( <Container2 />); 
     
  }
}

