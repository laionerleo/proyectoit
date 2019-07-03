import React, { Component } from 'react';
import {
    Text
} from 'react-native';
export default class inicio extends Component {
  constructor(props){
    super(props);
    
  }
    render() {
         const { navigate } = this.props.navigation;
            return (          
                <Text 
                    style={{fontSize: 30 , alignItems:'center' }}>
                   Inicio
                </Text>
            );
    }



}
