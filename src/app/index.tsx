import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';

export default function WelcomeScreen() {
  useEffect(() => {
    // Simulating a brief splash screen
    const timer = setTimeout(() => {
      // Navigate to onboarding after 2 seconds
      // router.replace('onboarding');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.replace('/onboarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Animated.View 
        style={styles.content}
        entering={FadeIn.duration(800)}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('@src/assets/images/logoPechincha.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Boas vindas ao</Text>
          <Text style={styles.appName}>PECHINCHA</Text>
        </View>
        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>SAIBA MAIS</Text>
          <Text style={styles.buttonIcon}>{'>'}</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.xl,
  },
  logoContainer: {
    marginBottom: Layout.spacing.xl,
  },
  logo: {
    width: 220,
    height: 220,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: Layout.spacing.xxl,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: Colors.light.background,
    marginBottom: Layout.spacing.xs,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: Colors.light.background,
    letterSpacing: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: Layout.spacing.md,
    paddingHorizontal: Layout.spacing.xl,
    borderRadius: Layout.borderRadius.medium,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.light.primary,
    marginRight: Layout.spacing.xs,
  },
  buttonIcon: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.light.primary,
  }
});