import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';

export default function OnboardingScreen() {
  const handleContinue = () => {
    router.replace('/auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Animated.View 
        style={styles.content}
        entering={FadeIn.duration(600)}
      >
        <View style={styles.header}>
          <Image
            source={require('@/src/assets/images/logoPechincha.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>PECHINCHA</Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Image 
                source={require('@/src/assets/images/carteira.png')}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Aqui você tem mais economia!</Text>
              <Text style={styles.featureDescription}>
                Você compra os melhores produtos com os melhores preços!
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Image 
                source={require('@/src/assets/images/relogio.png')}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Nada de perder tempo!</Text>
              <Text style={styles.featureDescription}>
                Você encontra as melhores promoções de supermercados e mercadinhos em um só lugar.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Image 
                source={require('@/src/assets/images/cabecaCoracao.png')}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Com tudo, menos estresse.</Text>
              <Text style={styles.featureDescription}>
                Menos tempo indo de supermercados em supermercados pesquisando preços e, melhor ainda, economizando mais!
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>ENTRAR NO APP</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    padding: Layout.spacing.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.xl,
    marginBottom: Layout.spacing.xxl,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: Layout.spacing.sm,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.light.primary,
    letterSpacing: 1,
  },
  featuresContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: Layout.spacing.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.lg,
  },
  featureIcon: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: Layout.spacing.xs,
  },
  featureDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.text,
    opacity: 0.8,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.lg,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});