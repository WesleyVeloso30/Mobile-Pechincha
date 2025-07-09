import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';
import Logo from '@/src/components/Logo';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleSignUp = () => {
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
              placeholder="Nome completo"
              placeholderTextColor={Colors.light.placeholder}
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <TextInput 
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={Colors.light.placeholder}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TextInput 
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor={Colors.light.placeholder}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput 
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor={Colors.light.placeholder}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            
            <TouchableOpacity 
              style={styles.signupButton} 
              onPress={handleSignUp}
              activeOpacity={0.8}
            >
              <Text style={styles.signupButtonText}>CADASTRAR</Text>
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
  signupButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.spacing.sm,
  },
  signupButtonText: {
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