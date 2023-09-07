import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ProductButton() {
  const styles = StyleSheet.create({
    Button: {
      marginBottom: 10,
      width: '70%',
    //   height: 40,
      borderRadius: 70,
      fontSize: 20,
      textAlign: 'center',
      color: '#272343',
      backgroundColor: '#ffd803',
    },
    container2: {
      flex: 1,
    //   width: '35%',
      inset: 0,
    //   justifyContent: 'center',
      alignItems: 'center',
    }
  });

  
  // onClick={() => onClick((state) => !state)
  return (
    <View style={styles.container2}>
      <Text style={styles.Button} 
        // navigation={navigation}
        // onPress={() => {
        //     navigation.reset({
        //       index: 0,
        //       routes: [{name: directPage}]
        //     })
        //   }}
        >
        Compartilhar
      </Text>
    </View>
  );
};
