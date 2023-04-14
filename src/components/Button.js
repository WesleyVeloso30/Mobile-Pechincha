import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Button2({navigation}) {
  const styles = StyleSheet.create({
    Button: {
      marginBottom: 10,
      width: 300,
      height: 40,
      borderRadius: 20,
      fontSize: 25,
      backgroundColor: '#ffd803',
      textAlign: 'center',
      color: '#272343',
      
    },
    container2: {
      // flex: 1,
      inset: 0,
      justifyContent: 'space-around',
      
    }
  });

  
  // onClick={() => onClick((state) => !state)
  return (
    <View style={styles.container2}>
      <Text style={styles.Button} 
        onClick={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Homepage'}]
            })
          }}>
        Entrar
      </Text>
    </View>
  );
};
