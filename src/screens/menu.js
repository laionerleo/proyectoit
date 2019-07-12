import React, { Component } from 'react';
import {
  TextInput,
  Button,
     StyleSheet,
    Text,
    ScrollView,
    BackHandler,
    Dimensions,
    View,
    Alert
} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';



export default class Menu extends Component {
  constructor(props){
    super(props);
   
    
  } 


    render() {  
            
      return (      
              
        <ScrollView>
           <View style={styles.btn}>
                <Icon onPress={() => this.props.navigation.goBack()}
                  name='list'
                  color='#00aced' />
                </View>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Button  onPress={() => this.props.navigation.navigate('contactoscreen')}     title="Contacto" />
        <Button  onPress={() => this.props.navigation.navigate('inicioscreen')}     title="Inicio" />
        
        <Button  onPress={() => BackHandler.exitApp()}     title="salir" />

         
        </SafeAreaView>
      </ScrollView>
  
            );
    }


   


}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});