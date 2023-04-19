import React from 'react';
import {Image, StyleSheet,TextInput, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Button2 from '../components/Button';
import Input2 from '../components/Input';

// const [isLogado, setIsLogado] = React.useState(false);
// name={isLogado ? 'Logado' : 'Entrar'}
// onClick={setIsLogado}


const Login = ({navigation}) => {

  return (
  <View style={styles.container}>
    <View style={styles.containerLogin}>
      <Image style={{height: 120, width: 250}} source={require('../../assets/Logo.png')} alt='Logo do aplicativo Pechincha'/>
      {/* <Text style={[styles.text]}>Pechincha</Text> */}
      <Input2 label="E-mail" placeHolder="Ex: Email@gmail.com"/>
      <Input2 label="Senha" placeHolder="********"/>
      
      <Button2
        navigation={navigation}
      />

      <Text onPress={() => navigation.navigate('Register')} navigation={navigation} style={{fontSize: 18, width: '100vw', textAlign: 'center'}}>Não possui cadastro? Click Aqui</Text>

    </View>
  </View>
)};



const styles = StyleSheet.create({
  container: {
    padding: '5rem',
    backgroundColor: '#fffffe',
    flex: 1,
    // inset: 0,
    // width: '100'
  },
  image: {
    flex: 1,
  },
  containerLogin: {
    // inset: 0,
    flex: 1,
    width: '100',
    alignItems: 'center',
    // gap: '2rem',
    justifyContent: 'space-between'
  },
  input: {
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    // marginTop: 100,
    width: 300,
    borderRadius: 10,
    fontSize: 42,
    lineHeight: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#272343' 
  }
});

export default Login;