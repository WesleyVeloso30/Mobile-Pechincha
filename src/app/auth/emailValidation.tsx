import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';
import Logo from '@src/components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmailValidationScreen() {
  const [code, setCode] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleEmailValidation = () => {
    // In a real app, implement sign up logic
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <ArrowLeft size={24} color={Colors.light.text} />
      </TouchableOpacity>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          style={styles.content}
          entering={FadeIn.duration(600)}
        >
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Logo size={60} />
              <Text style={styles.formTitle}>Criar nova conta</Text>
            </View>
            
            <TextInput 
              style={styles.input}
              placeholder="Código"
              placeholderTextColor={Colors.light.placeholder}
              value={code}
              onChangeText={setCode}
              keyboardType="numeric"
              autoCapitalize="none"
            />
            
            <TouchableOpacity 
              style={styles.emailValidationButton} 
              onPress={handleEmailValidation}
              activeOpacity={0.8}
            >
              <Text style={styles.emailValidationButtonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: Layout.spacing.xl,
  },
  content: {
    width: '100%',
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
  formTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.light.text,
    marginTop: Layout.spacing.md,
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
  emailValidationButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.sm,
  },
  emailValidationButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  termsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
    textAlign: 'center',
    marginTop: Layout.spacing.xl,
    lineHeight: 18,
  },
});