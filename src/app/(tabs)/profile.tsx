import React, { JSX } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, CreditCard, MapPin, Heart, Bell, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';
import Avatar from '@/src/components/profile/Avatar';

interface MenuOption {
  icon: JSX.Element;
  title: string;
  description?: string;
  action: () => void;
}

export default function ProfileScreen() {
  const handleOption = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  const menuOptions: MenuOption[] = [
    {
      icon: <Settings size={24} color={Colors.light.text} />,
      title: 'Configurações',
      action: () => handleOption('settings')
    },
    {
      icon: <CreditCard size={24} color={Colors.light.text} />,
      title: 'Métodos de pagamento',
      description: 'Gerenciar cartões e outros métodos',
      action: () => handleOption('payments')
    },
    {
      icon: <MapPin size={24} color={Colors.light.text} />,
      title: 'Endereços',
      description: 'Gerenciar endereços de entrega',
      action: () => handleOption('addresses')
    },
    {
      icon: <Heart size={24} color={Colors.light.text} />,
      title: 'Produtos favoritos',
      action: () => handleOption('favorites')
    },
    {
      icon: <Bell size={24} color={Colors.light.text} />,
      title: 'Notificações',
      action: () => handleOption('notifications')
    },
    {
      icon: <HelpCircle size={24} color={Colors.light.text} />,
      title: 'Ajuda e suporte',
      action: () => handleOption('help')
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={Colors.light.text} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileSection}>
          <Avatar />
          <Text style={styles.profileName}>Maria Silva</Text>
          <Text style={styles.profileEmail}>maria.silva@exemplo.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={option.action}
            >
              <View style={styles.menuIcon}>
                {option.icon}
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{option.title}</Text>
                {option.description && (
                  <Text style={styles.menuDescription}>{option.description}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.light.error} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Versão 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.xl,
    paddingVertical: Layout.spacing.xl,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.light.text,
  },
  settingsButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: Layout.spacing.xl,
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.light.text,
    marginTop: Layout.spacing.md,
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.placeholder,
  },
  menuContainer: {
    backgroundColor: 'white',
    marginHorizontal: Layout.spacing.xl,
    borderRadius: Layout.borderRadius.large,
    padding: Layout.spacing.md,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  menuIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Layout.spacing.md,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.light.text,
  },
  menuDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Layout.spacing.xl,
    marginTop: Layout.spacing.xl,
    paddingVertical: Layout.spacing.md,
  },
  logoutText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.light.error,
    marginLeft: Layout.spacing.sm,
  },
  versionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
    textAlign: 'center',
    marginTop: Layout.spacing.xl,
  },
});