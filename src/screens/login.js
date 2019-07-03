import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    Image,
    View
} from 'react-native';



export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: null, CONTRASENA: null}
    
  }
  static navigationOptions = {
    title : 'HOME',
    headerTitleStyle: {
      
      textAlign: 'center'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

    render() {
         
            return (      
              <View  style={styles.container}>
                <View style={styles.img}>

                <Image
                        style={{width: 100, height: 100}}
                          
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}          
                      />
                </View>

                <View  >
              
                    <Text style={{fontSize: 27}}>
                              {JSON.stringify(RNSimData.getSimInfo())}
                    </Text>
                    <TextInput style={styles.input} placeholder='Username' onChangeText={(ID) => this.setState({ID})}/>
                    <TextInput style={styles.input} label='Password' placeholder='Password' onChangeText={(CONTRASENA) => this.setState({CONTRASENA})} />
                    
                </View>
                <Button onPress={this.validar}     title="iniciar" />
             </View>
  
            );
    }


    validar=()=>{
      const { navigate } = this.props.navigation;
      navigate('inicioscreen');
    }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3FFE'
  },
  img: {
    flexDirection: 'row'  , justifyContent: 'center', alignItems: 'center'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },


  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});