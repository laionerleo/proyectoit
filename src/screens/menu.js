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

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false ,ID: '', CONTRASENA: '' , result :'' , resultjson:{} , deviceinfo: {} }
    
  }
  
  static navigationOptions = {
    header: null 
  }
 

    render() {
      
      const { navigate } = this.props.navigation;
      
     

         

      
            return (      
              
      <View style={styles.sideMenuContainer}>
 
      <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
        style={styles.sideMenuProfileIcon} />

      <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

      <View style={{width: '100%'}}>

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}
            style={styles.sideMenuIcon} />
            
            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > First Activity </Text>

          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}
            style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Second') }} > Second Activity </Text>

          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
            style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Third Activity </Text>

          </View>


     </View>

     <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


    </View>
  
            );
    }


   
validar=()=>{
  //const { navigate } = this.props.navigation;
 // navigate('inicioscreen')

  if((this.state.ID.length > 0 ) && (this.state.CONTRASENA.length>0))  {
      let data = new FormData();
/*      data.append('phone','76366848' );
      data.append('ci', '8926239');
      data.append('key', '5933f8511c2304f61810d2a0ad8deb88');

  */    
      data.append('phone',this.state.ID );
      data.append('ci', this.state.CONTRASENA);
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
      
    
    }else{
        Alert.alert("por favor introducir datos")

    }
    
  
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