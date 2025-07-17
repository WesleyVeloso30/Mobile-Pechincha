import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Supermarket } from '@src/types';
import Layout from '@src/constants/Layout';
import Colors from '@src/constants/Colors';

interface SupermarketCardProps {
  supermarket: Supermarket;
}

export default function SupermarketCard({ supermarket }: SupermarketCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: supermarket.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{supermarket.name}</Text>
      <Text style={styles.distance}>{supermarket.distance}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: Layout.spacing.md,
    backgroundColor: 'white',
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: Layout.borderRadius.medium,
    borderTopRightRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.light.text,
    paddingHorizontal: Layout.spacing.sm,
    paddingTop: Layout.spacing.sm,
    paddingBottom: 2,
  },
  distance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
    paddingHorizontal: Layout.spacing.sm,
    paddingBottom: Layout.spacing.sm,
  },
});