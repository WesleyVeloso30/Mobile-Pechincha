import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Promotion } from '@src/types';
import Layout from '@src/constants/Layout';
import Colors from '@src/constants/Colors';

interface PromotionCardProps {
  promotion: Promotion;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: promotion.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{promotion.title}</Text>
        <Text style={styles.description}>{promotion.description}</Text>
        <View style={styles.footer}>
          <View style={styles.productCount}>
            <Text style={styles.countText}>{promotion.productCount} produtos</Text>
          </View>
          <Text style={styles.viewText}>Ver mais</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.light.primaryLight,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    marginBottom: Layout.spacing.md,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: Layout.spacing.md,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.light.text,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.text,
    opacity: 0.7,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Layout.spacing.sm,
  },
  productCount: {
    backgroundColor: 'rgba(0, 210, 122, 0.2)',
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: 2,
    borderRadius: Layout.borderRadius.small,
  },
  countText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: Colors.light.primary,
  },
  viewText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.light.primary,
  },
});