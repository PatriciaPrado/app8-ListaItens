import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import Lista from './components/Lista'; 
import Itens from './components/Itens'; 

export default class App extends Component {

  constructor(props){
      super(props);
      console.log('Constructor - primeiro');
    }

    componentWillMount() {
      console.log('componentWillMount - segundo');
    }

    componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
      console.log('componentWillUpdate');
    }
    
    componentDidMount() {
      console.log('componentDidMount - terceiro');
    }

    render() {
    return (
      <ScrollView>
        <Text style={styles.welcome}>Venha conferir nossos preços!</Text>
        <Lista
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    welcome: {
    backgroundColor: '#F5FCFF',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Open Sans',
    fontWeight:'bold',
    color: 'red',
  },
});