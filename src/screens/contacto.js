import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    Image,
    BackHandler,
    Dimensions,
    View,
    Alert
} from 'react-native';
import { Icon } from 'react-native-elements';

const {width,height}= Dimensions.get("window");

export default class contacto extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: '', CONTRASENA: '' , result :'' , resultjson:{} , deviceinfo: {} }
    
  }
  
  static navigationOptions = {
    header: null ,
    
  }
 

    render() {
      
      const { navigate } = this.props.navigation;
      
     
         

      
            return (      
              <View  style={styles.container}>
                <View style={styles.btn}>
                <Icon onPress={() => this.props.navigation.openDrawer()}
                  name='list'
                  color='#00aced'
                  />
                </View>

                <View style={styles.img}>
                <Image
                        style={{width: 200, height: 200}}                        
                       // source = {{uri : 'http://realty.it.srl.company/application/assets/images/logo-x-150.png' }        }
                      />
                </View>

                <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18 , color:"black" ,fontFamily: 'Roboto' }}>PALMAS DEL URUBO SRL </Text>         
                <Text style={{fontSize: 18 , color:"black",fontFamily: 'Roboto'}}>Celular	67789783</Text>         
                <Text style={{fontSize: 18 , color:"black",fontFamily: 'Roboto'}}>Teléfono	36936558</Text>         
                <Text style={{fontSize: 18 , color:"black",fontFamily: 'Roboto'}}>Email	urubo@gmail.com</Text>  
                <Text style={{fontSize: 18 , color:"black",fontFamily: 'Roboto'}}>Dirección	Av. Seoane #32 Edificio San Jorge</Text>  
                       
                




                
                    
                    
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
 btn: { flexDirection: 'column', width:40 , padding: 5,  } ,

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