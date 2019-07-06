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

const CONTENT = [
  {
    title: 'Terms and Conditions',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    title: 'Privacy Policy',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    title: 'Return Policy',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];

export default class inicio extends Component {
  constructor(props){
    super(props);
    
  }
  static navigationOptions = {
    title : 'inicio',
  }
  state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
      
    }; 

   componentDidMount() {
    
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    
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
        <Text style={styles.headerText}>{section.title}</Text>
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
          {section.content}
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
                   
          <Accordion
                activeSections={this.state.activeSections}
                //for any default active section
                sections={CONTENT}
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
