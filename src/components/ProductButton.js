import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ProductButton({setModalVisible, modalVisible, buttonBackgroundColor, name, color}) {
  const styles = StyleSheet.create({
    Button: {
      marginBottom: 10,
      width: '90%',
      flex: 1,
      borderRadius: 70,
      fontSize: 20,
      paddingTop: 8,
      color : color ? color : 'white',
      textAlign: 'center',
      backgroundColor: buttonBackgroundColor ? buttonBackgroundColor : 'white',
      alignItems: 'center',
      verticalAlign: 'middle',
      borderColor: '#808080',
      borderWidth: 1,
    },
    container2: {
      flex: 1,
    //   width: '35%',
    height: 50,
      inset: 0,
      alignItems: 'center',
    }
  });

  
  // onClick={() => onClick((state) => !state)
  return (
    <View style={styles.container2}>
      <Text style={styles.Button} 
        // navigation={navigation}
        onPress={() => {
          if (setModalVisible) {
            setModalVisible(false);
          }
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: directPage}]
            // })
          }}
        >
        {name}
      </Text>
    </View>
  );
};
