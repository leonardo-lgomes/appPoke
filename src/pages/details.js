import React, { Component } from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import Axios from 'axios';


export default class Details extends Component {

    static navigationOptions = {
        title: 'Detalhes do Pokémon',
        headerTintColor: "#fff",
        headerStyle: {
            backgroundColor: '#a61717'
          },
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 30,
            textAlign:"center",
          }
    };

    state = {
        info: [],
        abilities:[],
        sprites:[],
    };
    

    componentDidMount() {
        Axios.get(this.props.navigation.getParam('Link')).then(res => {
          const sprites = res.data.sprites.front_default;
          const info = res.data.abilities;
          this.setState ({info})
          this.setState({ sprites });
          
        });
      }


      render(){

        return (


            <View style = {styles.Container}>

            <Text style = {styles.Abilities}>Imagem do Pokémon:</Text>  

            <Image style = {{width:250, height:150}} source={{ uri: this.state.sprites.toString() }} />

            <Text style = {styles.Abilities}>Habilidades:</Text>  

            {this.state.info.map(info => {
              
              return <View style = {styles.Box}>
        
                        <Text style = {styles.Text}>* {info.ability.name}</Text>
                    </View>; 
            })}
        
            
            </View>


        );
    }
}


const styles = StyleSheet.create ({
    
    Container:{
        paddingLeft:22,
        borderBottomColor: "#3a86ff",
        paddingBottom:10,
        marginTop:10,
        marginBottom:5,
    },

    Abilities: {
        fontSize:29,
        color:"#000",
        fontWeight:"bold",
    },

    Text: {
        fontSize:22,
        color:"#000",
    },

});