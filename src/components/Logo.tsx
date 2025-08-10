import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '@src/constants/Colors';

interface LogoProps {
  size?: number;
  horizontal?: boolean;
}

export default function Logo({ size = 40, horizontal = false }: LogoProps) {
  const logoSize = size;
  const fontSize = size * 0.5;
  
  if (horizontal) {
    return (
      <View style={styles.horizontalContainer}>
        <Image
          source={require('@src/assets/logoPechincha.png')}
          style={[styles.logo, { width: logoSize, height: logoSize }]}
          resizeMode="contain"
        />
        <Text style={[styles.text, { fontSize }]}>PECHINCHA</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('@src/assets/logoPechincha.png')}
        style={[styles.logo, { width: logoSize, height: logoSize }]}
        resizeMode="contain"
      />
      <Text style={[styles.text, { fontSize }]}>PECHINCHA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 8,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: Colors.light.primary,
    letterSpacing: 1,
  },
});