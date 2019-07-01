import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Itens extends Component {
    static propTypes = {
        foto: PropTypes.string,
        titulo: PropTypes.string,
        valor: PropTypes.number,
        local: PropTypes.string,
        data: PropTypes.string
    }

    render() {
        return (
            <View style={estilo.item}>
                <View style={estilo.foto}>
                    <Image style={{ height: 100, width: 100}} source={{uri: this.props.foto}}/>
                </View>
                <View style={estilo.detalhes}>
                    <Text style={estilo.titulo}>{this.props.titulo}</Text>
                    <Text style={estilo.valor}>R$ {this.props.valor}</Text>
                    <Text >Local: {this.props.local}</Text>
                    <Text>Data publicação: {this.props.data}</Text>
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
  },
  foto:{
      width: 102,
      height: 102
  },
  detalhes: {
      marginLeft: 20,
      flex: 1,
  },
  titulo:{
      fontSize: 18,
      color: 'blue',
      marginBottom: 5,    
  },
  valor: {
      fontSize: 16,
      fontWeight: 'bold',
  }
});