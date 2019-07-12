import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    Image,
    Dimensions,
    View,
    Alert
} from 'react-native';


const {width,height}= Dimensions.get("window");

export default class vista2 extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: '', CONTRASENA: '' , result :'' , resultjson:{} , deviceinfo: {} }
    
  }

    render() {
      
    
     
         

      
            return (      
              <View  style={styles.container}>
                <View style={styles.img}>
                <Text style={{fontSize:50 ,fontWeight: 'bold',  fontFamily: 'sans-serif-medium' }}>
                        Realty Client
                </Text>

                <Image
                        style={{width: 50, height: 200}}
                          
                        
                        source = {{uri : 'asset:./realty.png' }        }
                      />
                </View>

                <View>
                
                    
                    <TextInput style={styles.input}   keyboardType = 'numeric' placeholder='vista 22' onChangeText={(ID) => this.setState({ID})}/>
                    <TextInput style={styles.input}  keyboardType = 'numeric' secureTextEntry={true} password={true} placeholder='CARNET DE IDENTIDAD' onChangeText={(CONTRASENA) => this.setState({CONTRASENA})} />
                    
                </View>
                
             </View>
  
            );
    }


   


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3980fc'
  },
  img: {
    flexDirection: 'column'  , height: 250 , justifyContent: 'center', alignItems: 'center'
  },
  input: {
    margin: 15,
    height: 60,
    width: width-30,
    borderColor: '#7a42f4',
    borderWidth: 3,
    fontSize: 20,
    backgroundColor: 'white'
 },
 btn: { flexDirection: 'column', width: width,  height:150 , padding: 5,  } ,



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