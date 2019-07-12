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
import { Icon } from 'react-native-elements';
import RNSimData from 'react-native-sim-data';
import deviceinfo from'react-native-device-info';

const {width,height}= Dimensions.get("window");

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: '', CONTRASENA: '' , result :'' , resultjson:{} , deviceinfo: {} }
    
  }
  
  static navigationOptions = {
    header: null 
  }
 

    render() {
      
      const { navigate } = this.props.navigation;
      const  valor=RNSimData.getSimInfo() ;
      const  valor1=deviceinfo.getAPILevel() ;
      
      
     
      if(this.state.isLoading){
          
          if(this.state.resultjson.compras.length >0 ){
            
          navigate('inicioscreen' , {datoslogin: this.state.result })
          }else{
            this.setState({
              isLoading: false, 
            }
              );  
            Alert.alert("datos incorrectos");
          }
      }
         

      
            return (      
              <View  style={styles.container}>
                <View style={styles.btnicon}>
                <Icon onPress={() => this.props.navigation.openDrawer()}
                  name='list'
                  Size= '50' 
                  iconStyle= {Size=50}
                  color='white' />
                </View>
                
                
                         
                <View style={styles.img}>
                <Text style={{fontSize:10 ,fontWeight: 'bold',  fontFamily: 'sans-serif-medium' }}>
                        Realty Client
                        {JSON.stringify(valor)}
                        {JSON.stringify(valor1)}
                </Text>

                <Image
                        style={{width: 50, height: 200}}
                          
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  
                      />
                </View>

                <View>
                
                    
                    <TextInput style={styles.input}   keyboardType = 'numeric' placeholder='NUMERO DE TELEFONO' onChangeText={(ID) => this.setState({ID})}/>
                    <TextInput style={styles.input}  keyboardType = 'numeric' secureTextEntry={true} password={true} placeholder='CARNET DE IDENTIDAD' onChangeText={(CONTRASENA) => this.setState({CONTRASENA})} />
                    
                </View>
                <View style={styles.btn} >
                              <Button  onPress={this.validar}     title="iniciar" />
                 </View>
             </View>
  
            );
    }


   
validar=()=>{
  //const { navigate } = this.props.navigation;
 // navigate('inicioscreen')

//if((this.state.ID.length > 0 ) && (this.state.CONTRASENA.length>0))  {
      let data = new FormData();
     data.append('phone','76366848' );
      data.append('ci', '8926239');
      data.append('key', '5933f8511c2304f61810d2a0ad8deb88');

  /*  
      data.append('phone',this.state.ID );
      data.append('ci', this.state.CONTRASENA);
      data.append('key', '5933f8511c2304f61810d2a0ad8deb88');
*/

      let resultado= fetch('http://realty.it.srl.company/es/api/getbuy', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'multipart/form-data' 
        },
        body: data,
      }).then((response) => response.json())
      .then((responseJson) => {
            this.setState({
              result: JSON.stringify( responseJson ), 
            });
            this.setState({
              
              resultjson: JSON.parse(this.state.result),
              isLoading: true, 

            
            }
              );  
      })
      .catch((error) => {
        Alert.alert("sin internet")

      });
      
    
    /*}else{
        Alert.alert("por favor introducir datos")

    }
  */
  
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
 btnicon: {  width:50 , height: 50  } ,



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