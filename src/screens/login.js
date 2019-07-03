import React, { Component } from 'react';
import {
  TextInput,
     StyleSheet,
    Text,
    View
} from 'react-native';




export default class Login extends Component {
  constructor(props){
    super(props);
    
  }
    render() {
         const { navigate } = this.props.navigation;
            return (      
              <View sstyle={{width: 100, height: 100, backgroundColor: 'skyblue'}}>
                    <TextInput
                    style={{height: 80}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                  />    
                    <Text 
                        style={{fontSize: 27 , alignItems:'center' }}>
                        Login
                    </Text>
                    <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                  />


                </View>
  
            );
    }



}
const styles = StyleSheet.create({
  image:{
    position:'relative', 
    width:100,
    height:100,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 128,
    },
  textimput:{
    borderColor: '#3498DB'
  }
});