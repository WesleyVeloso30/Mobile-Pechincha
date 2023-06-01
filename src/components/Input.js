import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


export default function Input({label, placeHolder}) {
  const styles = StyleSheet.create({
    Input: {
      marginBottom: 10,
      width: 300,
      height: 45,
      padding: 3,
      borderRadius: 20,
      fontSize: 22,
      backgroundColor: 'white',
      color: 'black',
      borderWidth: 1,
      borderColor: '#ffd803',
    },
    containerInput: {
      justifyContent: 'space-around',
      
    },
    label: {
      fontSize: 20,
    }
  });

  

  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput style={styles.Input}
        placeholder={placeHolder}
      />
    </View>
  );
};
