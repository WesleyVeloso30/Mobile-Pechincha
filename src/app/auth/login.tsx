import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import { ArrowLeft } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';
import Logo from '@/src/components/Logo';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    // In a real app, implement authentication logic
    router.replace('/(tabs)');
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic
    console.log('Forgot password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <ArrowLeft size={24} color={Colors.light.text} />
      </TouchableOpacity>
      
      <Animated.View 
        style={styles.content}
        entering={FadeIn.duration(600)}
      >
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Logo size={60} />
          </View>
          
          <TextInput 
            style={styles.input}
            placeholder="E-MAIL..."
            placeholderTextColor={Colors.light.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput 
            style={styles.input}
            placeholder="SENHA..."
            placeholderTextColor={Colors.light.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>CONTINUAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={handleForgotPassword}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordText}>ESQUECEU A SENHA?</Text>
          </TouchableOpacity>
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
  backButton: {
    padding: Layout.spacing.md,
    marginLeft: Layout.spacing.md,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.xl,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: Layout.borderRadius.large,
    padding: Layout.spacing.xl,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: Layout.spacing.xl,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Layout.borderRadius.medium,
    paddingHorizontal: Layout.spacing.md,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: Layout.spacing.md,
  },
  continueButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.sm,
  },
  continueButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: Layout.spacing.md,
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
  },
});