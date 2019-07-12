import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Button,
    BackHandler,
    TouchableOpacity,
    Alert 
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import {Dimensions} from 'react-native';
console.disableYellowBox = true; 
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];


const { width, height } = Dimensions.get('window')

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
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
   
      
    }
    
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
        <Text style={styles.headerText}>{section.Proyecto +"\n Manzano :"+section.NroMzn + "- Lote: " + section.NroLote +" \n Pago habilitado=" + section.pagoHabilitado.Recaudacion     }</Text>
      </Animatable.View>
    );
  };
  renderContent(section, _, isActive) {
    //Accordion Content view
    var  cant = parseInt(section.pagos.length) ;
    var i =-1;
    var arraynuevo= section.pagos.reverse(); 
    
    return (
      
      <ScrollView >
     
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , flexDirection: 'row',}}>
          <Text style={{fontSize: 18,flex: 1 }} > Area m2 </Text>
          <Text style={{fontSize: 18,flex: 2 }} >  </Text>
          <Text style={{ flex: 1}} > {section.Area}</Text>
        </View>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width ,flexDirection: 'row' }}>
        <Text style={{fontSize: 18,flex: 1 }} > Costo </Text>
        <Text style={{fontSize: 18,flex: 2 }} >  </Text>
        <Text style={{  display: "flex",flex: 1 }} > {section.CostoTotal}</Text>
        </View>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , flexDirection: 'row'}}>
        <Text style={{fontSize: 18,flex: 1 }} >Pagado </Text>
        <Text style={{fontSize: 18,flex: 2 }} >  </Text>
        <Text style={{  display: "flex", flex: 1}} >{section.TotalPagado}</Text>
        </View>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width ,flexDirection: 'row' }}>
        <Text style={{fontSize: 18,flex: 1 }} > Promotor </Text>
        <Text style={{fontSize: 18,flex: 2 }} >  </Text>
        <Text style={ { display: "flex",flex: 1}} >  {section.Promotor}</Text>
        </View>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}></View>
        
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}>
        <Text style={{fontSize: 18, }} > Pagos </Text>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}></View>
        </View>
        <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width ,flex: 1, flexDirection: 'row', }}>
        <Text style={{fontSize: 18,flex: 1 }} > Codigo </Text>
        <Text style={{fontSize: 18,flex: 1 }} > Plan </Text>
        <Text style={{fontSize: 18,flex: 1 }} > Pago </Text>

        </View>
        <ScrollView    >
          <View>
          
          {
            
             
            
            section.plandepago.map((pago)=>{
              

              if(i<cant-1){
                i++;
              return (<View style={{flex: 1, flexDirection: 'row',borderBottomColor: '#1D3E5E',borderBottomWidth: 1,}}>
                <Text style={{ fontSize: 18 , flex: 1 }}> {pago.codigopago}</Text>
                <Text style={{fontSize: 18, flex: 1}}>  {pago.date} {parseFloat( pago.mount).toFixed(2)  }</Text>
                <Text style={{fontSize: 18 , flex: 1}}>  {  /*section.pagos[i].PagoMonto*/  arraynuevo[i].PagoMonto }</Text> 
              </View>
              
              )
              }else{ 
                   
                return <View style={{flex: 1, flexDirection: 'row',borderBottomColor: '#1D3E5E',borderBottomWidth: 1,}}>
                <Text style={{ fontSize: 18 , flex: 1 }}> {pago.codigopago}</Text>
                <Text style={{fontSize: 18, flex: 1}}>  {pago.date} {parseFloat( pago.mount).toFixed(2)  }</Text>
                <Text style={{fontSize: 18 , flex: 1}}>  {  0 }</Text> 
                </View>
              }
              
              
              
              
                          
                })}
            </View>
        </ScrollView>

        
      </ScrollView>
      
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
              <ScrollView style={styles.container}>
                <View style={styles.btn}>
                <Icon onPress={() => this.props.navigation.openDrawer()}
                  name='list'
                  color='#00aced' />
                </View>
               
                <View style={{borderColor:'#00aced',borderBottomWidth:2.5,borderTopWidth:8}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold', }}>HOLA   {this.state.loginjson.compras[0].tituales[0].ClienteNombre}</Text>
                  <Text style={{fontSize: 23, fontWeight: 'bold', }}>Celular  =  {this.state.loginjson.compras[0].tituales[0].ClienteCelular}</Text>
                  <Text style={{fontSize: 23, fontWeight: 'bold', }}>Documento =  {this.state.loginjson.compras[0].tituales[0].ClienteDocumento}</Text>         
                </View>
                
                <View style={{borderColor:'#00aced',borderBottomWidth:8,borderTopWidth:8}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', }}>PALMAS DEL URUBO SRL </Text>
                <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}/>
                <Text style={{fontSize: 18, }}>Celular   {this.state.loginjson.company.empresaCelular}</Text>
                <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}/>
                  <Text style={{fontSize: 18 , }}>Telefono   {this.state.loginjson.company.empresaTelefono}</Text>
                  <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}/>
                  <Text style={{fontSize: 18, }}>Email    {this.state.loginjson.company.empresaEmail}</Text>
                  <View style={{borderBottomColor: '#1D3E5E',borderBottomWidth: 1,width : width , }}/>
                  <Text style={{fontSize: 18 , }}>Direccion    {this.state.loginjson.company.empresaDireccion}</Text>         
                 
                </View>
              
                
                
              
           <View style={{ borderRadius: 4,borderWidth: 0.5,borderColor: '#d6d7da',}}>
                   
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
              

              
            </ScrollView>   
         
            




            );
    }



}



const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: { 
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  texto: {
    margin: 6
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },

  
  container: {
    flex: 1,
    flexDirection: 'column',
    
  },
  btn: { flexDirection: 'column', width:40 , padding: 5,  } ,
 
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
    padding: 10,
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
