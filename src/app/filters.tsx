import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput,
  ScrollView 
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Plus } from 'lucide-react-native';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';

interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}

export default function FiltersScreen() {
  const [orderOptions, setOrderOptions] = useState<FilterOption[]>([
    { id: '1', label: 'Menor preço', selected: false },
    { id: '2', label: 'Maior desconto', selected: false },
    { id: '3', label: 'Maior relevância', selected: false },
    { id: '4', label: 'Mais recente', selected: false },
  ]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleBack = () => {
    router.replace('/(tabs)');
  };

  const handleOrderOptionToggle = (id: string) => {
    setOrderOptions(prev => 
      prev.map(option => ({
        ...option,
        selected: option.id === id ? !option.selected : false
      }))
    );
  };

  const renderCheckbox = (option: FilterOption) => (
    <TouchableOpacity 
      key={option.id}
      style={styles.checkboxContainer}
      onPress={() => handleOrderOptionToggle(option.id)}
    >
      <View style={[
        styles.checkbox,
        option.selected && styles.checkboxSelected
      ]}>
        {option.selected && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxLabel}>{option.label}</Text>
    </TouchableOpacity>
  );

  const renderExpandableSection = (title: string, onPress: () => void) => (
    <TouchableOpacity style={styles.expandableSection} onPress={onPress}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Plus size={20} color={Colors.light.text} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.light.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filtros</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ordenar por:</Text>
            <Text style={styles.collapseIcon}>-</Text>
          </View>
          
          <View style={styles.optionsContainer}>
            {orderOptions.map(renderCheckbox)}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Faixa de preço:</Text>
            <Text style={styles.collapseIcon}>-</Text>
          </View>
          
          <View style={styles.priceRangeContainer}>
            <View style={styles.priceInputContainer}>
              <TextInput
                style={styles.priceInput}
                placeholder="mín"
                placeholderTextColor={Colors.light.placeholder}
                value={minPrice}
                onChangeText={setMinPrice}
                keyboardType="numeric"
              />
              <Text style={styles.priceLabel}>Preço mínimo</Text>
            </View>
            
            <View style={styles.priceInputContainer}>
              <TextInput
                style={styles.priceInput}
                placeholder="máx"
                placeholderTextColor={Colors.light.placeholder}
                value={maxPrice}
                onChangeText={setMaxPrice}
                keyboardType="numeric"
              />
              <Text style={styles.priceLabel}>Preço máximo</Text>
            </View>
          </View>
        </View>

        {renderExpandableSection('Supermercados:', () => {})}
        {renderExpandableSection('Categorias:', () => {})}
        {renderExpandableSection('Marcas:', () => {})}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.spacing.xl,
    paddingVertical: Layout.spacing.md,
    backgroundColor: Colors.light.primary,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: Layout.spacing.xl,
  },
  section: {
    marginTop: Layout.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.light.text,
  },
  collapseIcon: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.light.text,
  },
  optionsContainer: {
    gap: Layout.spacing.md,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.light.border,
    borderRadius: 4,
    marginRight: Layout.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  checkboxSelected: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  checkboxLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.text,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Layout.spacing.md,
  },
  priceInputContainer: {
    flex: 1,
  },
  priceInput: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Layout.borderRadius.medium,
    paddingHorizontal: Layout.spacing.md,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: 'white',
    marginBottom: Layout.spacing.xs,
  },
  priceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.text,
    textAlign: 'center',
  },
  expandableSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Layout.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
});
