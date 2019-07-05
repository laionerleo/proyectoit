import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    Image,
    View,
    Alert
} from 'react-native';



export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: null, CONTRASENA: null , result :'hola mundo de text' }
    
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

                <View>
              
                    <Text style={{fontSize: 27}}>
                  {this.state.result}
                                      </Text>
                    <TextInput style={styles.input} placeholder='Username' onChangeText={(ID) => this.setState({ID})}/>
                    <TextInput style={styles.input} secureTextEntry={true} password={true} label='Password' onChangeText={(CONTRASENA) => this.setState({CONTRASENA})} />
                    
                </View>
                <View style={styles.btn} >
                              <Button onPress={this.validar}     title="iniciar" />
                 </View>
             </View>
  
            );
    }


   
validar=()=>{
  
  let data = new FormData();
  data.append('phone', '75059257');
  data.append('ci', '8929169');
  data.append('key', '5933f8511c2304f61810d2a0ad8deb88');


  let resultado= fetch('http://realty.it.srl.company/es/api/getbuy', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type' : 'multipart/form-data' 
    },
    
    body: data,
  }).then((response) => response.json())
  .then((responseJson) => {
        this.setState({ result: JSON.stringify( responseJson )});  
  })
  .catch((error) => {
    console.error(error);
  });
  
  
  
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
    height: 60,
    borderColor: '#7a42f4',
    borderWidth: 1,
    fontSize: 20,
 },
 btn: { flex: 1, aspectRatio: 1.5, resizeMode: 'contain'  } ,



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