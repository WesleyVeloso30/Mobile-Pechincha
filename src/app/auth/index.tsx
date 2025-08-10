import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';

export default function AuthScreen() {
  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  const handleGoogleAuth = () => {
    // In a real app, implement Google authentication
    router.replace('/(tabs)');
  };

  const handleGuestAccess = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Animated.View 
        style={styles.content}
        entering={FadeIn.duration(600)}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('@src/assets/logoPechincha.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>PECHINCHA</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton} 
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>CADASTRE-SE</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>CADASTRE-SE COM</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialButtonsRow}>
            <TouchableOpacity 
              style={styles.googleButton} 
              onPress={handleGoogleAuth}
              activeOpacity={0.8}
            >
              <Text style={styles.googleButtonText}>GOOGLE</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionsButton} 
              onPress={handleGuestAccess}
              activeOpacity={0.8}
            >
              <Text style={styles.optionsButtonText}>Outras opções</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.xxl * 2,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: Layout.spacing.md,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.light.primary,
    letterSpacing: 1,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: Layout.spacing.xxl,
  },
  primaryButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Layout.spacing.md,
  },
  primaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: 'white',
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.light.border,
    marginBottom: Layout.spacing.xl,
  },
  secondaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.light.text,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Layout.spacing.md,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.border,
  },
  dividerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
    marginHorizontal: Layout.spacing.md,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Layout.spacing.md,
  },
  googleButton: {
    backgroundColor: '#E5E5E5',
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: Layout.spacing.sm,
  },
  googleButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.light.text,
  },
  optionsButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: Layout.spacing.sm,
  },
  optionsButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.light.text,
  },
});