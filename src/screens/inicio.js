import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    BackHandler,
    TouchableOpacity,
    Alert 
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

export default class inicio extends Component {
  constructor(props){
    super(props);
    const datos = this.props.navigation.state.params.datoslogin
    this.state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
      login:datos,
      loginjson:{},
      
    }
    
  }
  static navigationOptions = {
    header: null 
  }
  

   componentDidMount() {
    
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    
    
  }

  componentWillUnmount() {
    
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    
    
    
  }
  componentWillMount(){

   this.setState({ loginjson: JSON.parse(this.state.login) });
    
  }




  handleBackPress = () => {
    Alert.alert("esta seguro que quieres salir")

    return true;
  }

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.Proyecto +"- Manzano :"+section.NroMzn + "- Lote: " + section.NroLote + " Saldo :" + (section.CostoTotal - section.TotalPagado)     }</Text>
      </Animatable.View>
    );
  };
  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          { " Titulares" +section.tituales[0]+"-" +section.tituales.ClienteDocumento + "- "+section.tituales.ClienteCelular }
        </Animatable.Text>
      </Animatable.View>
    );
  };

 
  
  
  toggleExpanded = () => {

    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

    render() {
         const { navigate } = this.props.navigation;
         const { multipleSelect, activeSections } = this.state;
         
         
         
            return ( 
              <View>
                <Text>
                
                
              
                </Text>
                   
          <Accordion
                activeSections={activeSections}
                //for any default active section
                sections={this.state.loginjson.compras}
                //title and content of accordion
                touchableComponent={TouchableOpacity}
                //which type of touchable component you want
                //It can be the following Touchables
                //TouchableHighlight, TouchableNativeFeedback
                //TouchableOpacity , TouchableWithoutFeedback
                expandMultiple={this.state.multipleSelect}
                //Do you want to expand mutiple at a time or single at a time
                renderHeader={this.renderHeader}
                //Header Component(View) to render
                renderContent={this.renderContent}
                //Content Component(View) to render
                duration={100}
                //Duration for Collapse and expand
                onChange={this.setSections}
                //setting the state of active sections
        />
              

              
            </View>   
         
            




            );
    }



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
  textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: 'blue',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    color: "blue"
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
