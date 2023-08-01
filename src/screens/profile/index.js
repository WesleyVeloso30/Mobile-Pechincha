import React from "react";
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import styles from "./styles";

class GetPokemons extends React.Component {
  constructor(props) {
    super(props);
    // console.log("O componente está sendo montado!")
    this.state = {
      dados: {},
      err: {},
      inputId: "1",
    }
    this.fetchDados = this.fetchDados.bind(this);
  }
  
  fetchDados() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.inputId}`)
      .then(response => response.json())
      .then(json => this.setState({ dados: json }))
      .catch(err => {
          console.log("error")
          this.setState({dados: {}})
          this.setState({err})
        })
    }
    
    render() {
      return (
        <View style={styles.container}>
          {this.message && 
            <View style={styles.tempMessage}>
              <Text>
                {this.message}
              </Text>
            </View>
          }
          <View style={styles.subContainer}>
            {this.state.dados?.name ? (
              <>
                <Text style={styles.pokeName}>Nome: {this.state.dados.name}</Text>
                <Image style={styles.image} source={{uri: this.state.dados.sprites.other.dream_world.front_default}} />
              </>
            ) : (
              <Text>Insira um id ou nome para realizar a busca</Text>
            )}
          </View>
          <View>
            <TextInput 
              style={styles.input}
              onChangeText={inputId => {
                this.setState({inputId})
              }} 
              value={this.state.inputId}  
              />
            <Button
              onPress={this.fetchDados}  
              title={"Pesquisar"}
            />
          </View>
        </View>
      )
    }
}

export default GetPokemons;