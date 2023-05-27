import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function MenuBottom({name, onClick}) {
  const styles = StyleSheet.create({
    Icons: {
      flex: 1,
      alignContent: 'center',
      borderWidth: 1,
      borderColor: '#272343',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: 'cinza'
      // borderStyle enum('solid', 'dotted', 'dashed')
      //   alignItems: 'center'
      //   marginBottom: 10,
      //   width: 300,
      //   height: 40,
      //   borderRadius: 20,
      //   fontSize: 25,
      //   textAlign: 'center',
      
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
    //   inset: 0,
      justifyContent: 'space-evenly',
      position: 'absolute',
      bottom: 0,
      width: '100vw',
      height: '11.5vh',
    }
  });

  

  return (
    <View style={styles.container2} onClick={() => onClick((state) => !state)}>
      <View style={[styles.Icons, {flex: 1, flexDirection: 'column'}]}>
        <Text style={{flex: 1, position: 'absolute'}}>Perfil</Text>
        <View style={{flex: 1}}>
          <Image style={[{flex: 1, width: '100%', height: '100%'}]} source={require('../../assets/Profile.svg')} alt='Logo do aplicativo Pechincha'/>
        </View>
      </View>
      <Text style={styles.Icons}>
        home
      </Text>
      <Text style={styles.Icons}>
        menu
      </Text>
    </View>
  );
};

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Login from '../screens/login';
// import Homepage from '../screens/homepage';

// const BottomTab = createBottomTabNavigator();

// export default function MenuBottom() {
//   return(
//       <>
//       <Text>aaaaa</Text>
//       <BottomTab.Navigator screenOptions={{ headerShown: false }}>
//         <BottomTab.Screen name="Home" component={Homepage} />
//         <BottomTab.Screen name="Login" component={Login} />
//       </BottomTab.Navigator>
//       </>
// )
// };