import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function Input({label, placeHolder}) {
  const styles = StyleSheet.create({
    Input: {
      marginBottom: 10,
      width: 300,
      height: 36,
      padding: 30,
      borderRadius: 20,
      fontSize: 25,
      backgroundColor: 'white',
      color: 'black',
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
