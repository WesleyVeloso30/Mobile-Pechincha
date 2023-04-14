import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Card({name, onClick}) {
  const styles = StyleSheet.create({
    Button: {
      marginBottom: 10,
      width: 300,
      height: 40,
      borderRadius: 20,
      fontSize: 25,
      backgroundColor: 'blue',
      textAlign: 'center',
      color: 'white',
      
    },
    container2: {
      // flex: 1,
      inset: 0,
      justifyContent: 'space-around',
      
    }
  });

  

  return (
    <View style={styles.container2} onClick={() => onClick((state) => !state)}>
      <Text style={styles.Button}>
        {name}
      </Text>
    </View>
  );
};
