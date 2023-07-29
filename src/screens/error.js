import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import Button2 from '../components/Button';
import Input2 from '../components/Input';

export default function Error () {
    const [isCadastred, setIsCadastred] = React.useState(false);

  return (
  <View style={styles.container}>
    <View style={styles.containerRegister}>
      <Image style={{height: 120, width: 250}} source={require('../assets/Logo.png')} alt='Logo do aplicativo Pechincha'/>
      <Input2 label="Name" placeHolder="Ex: Wesley Carrasco"/>
      <Input2 label="E-mail" placeHolder="Ex: Email@gmail.com"/>
      <Input2 label="Senha" placeHolder="********"/>
      <Input2 label="Confirme Senha" placeHolder="********"/>
      
      <Button2 
        // name={isCadastred ? 'Cadastrado' : 'Cadastrar'}
        // onClick={setIsCadastred}
        navigation={navigation}
        directPage={'Login'}
        name={'Cadastrar'}
      />
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#fffffe',
    flex: 1,
    inset: 0,
  },
  image: {
    flex: 1,
  },
  containerRegister: {
    // inset: 0,
    flex: 1,
    alignItems: 'center',
    // gap: 2,
    justifyContent: 'space-between',
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
    backgroundColor: '#0078e0' 
  }
})