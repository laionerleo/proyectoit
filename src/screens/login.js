import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    View
} from 'react-native';

import RNSimData from 'react-native-sim-data';



export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: null, CONTRASENA: null}
    
  }
  static navigationOptions = {
    title : 'HOME',
  }

    render() {
         const { navigate } = this.props.navigation;
            return (      
              <View style={{width: 500, height: 800, backgroundColor: 'skyblue'}}>
                   <Text 
                    style={{fontSize: 27}}>
                     {JSON.stringify(RNSimData)}
                    </Text>
                <TextInput placeholder='Username' onChangeText={(ID) => this.setState({ID})}/>
                <TextInput label='Password' placeholder='Password' onChangeText={(CONTRASENA) => this.setState({CONTRASENA})} />
                <Button 
                    // onPress={() =>navigate('choferscreen')}// onPress={this.props.onLoginPress}
                     onPress={this.validar}
                      /// onPress={() => login()}
                        title="iniciar"
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