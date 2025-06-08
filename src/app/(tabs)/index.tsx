import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MessageCircle } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';
import Logo from '@/src/components/Logo';
import CategoryCard from '@/src/components/home/CategoryCard';
import SupermarketCard from '@/src/components/home/SupermarketCard';
import PromotionCard from '@/src/components/home/PromotionCard';
import { Category, Supermarket, Promotion } from '@/src/types';

// Mock data
const supermarkets: Supermarket[] = [
  {
    id: '1',
    name: 'Supermercado Regional',
    image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg',
    distance: '1.2 km',
  },
  {
    id: '2',
    name: 'Supermercado Industrial',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
    distance: '3.4 km',
  },
  {
    id: '3',
    name: 'Supermercado União',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    distance: '4.8 km',
  }
];

const categories: Category[] = [
  { id: '1', name: 'Carnes', icon: '🥩', color: '#FFCECE' },
  { id: '2', name: 'Bebidas', icon: '🥤', color: '#CCE5FF' },
  { id: '3', name: 'Cereais', icon: '🌾', color: '#E6DFCD' },
  { id: '4', name: 'Frutas', icon: '🍎', color: '#E5FFCC' },
  { id: '5', name: 'Verduras', icon: '🥬', color: '#CCFFE6' },
  { id: '6', name: 'Massas', icon: '🍝', color: '#FFF5CC' },
];

const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Promoção de Carnes',
    description: 'Até 30% de desconto em carnes selecionadas',
    image: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg',
    productCount: 300,
  },
  {
    id: '2',
    title: 'Festival de Frutas',
    description: 'Frutas da estação com preços imperdíveis',
    image: 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg',
    productCount: 150,
  }
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Logo size={24} horizontal />
        <TouchableOpacity style={styles.chatButton}>
          <MessageCircle size={24} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="O que está procurando?"
          placeholderTextColor={Colors.light.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Search size={20} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg' }}
            style={styles.bannerImage}
          />
        </View>
        
        <Text style={styles.sectionTitle}>Supermercados e mercadinhos</Text>
        
        <FlatList
          horizontal
          data={supermarkets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SupermarketCard supermarket={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
        />
        
        <Text style={styles.sectionTitle}>Categorias</Text>
        
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </View>
        
        <View style={styles.promotionsContainer}>
          <View style={styles.promotionsHeader}>
            <Text style={styles.sectionTitle}>Promoções do dia</Text>
            <View style={styles.productCountContainer}>
              <Text style={styles.productCount}>300 prod.</Text>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>⊹</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </View>
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
  },
  chatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 210, 122, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: Layout.spacing.xl,
    marginVertical: Layout.spacing.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Layout.borderRadius.large,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.text,
  },
  searchButton: {
    paddingHorizontal: Layout.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
  },
  bannerContainer: {
    marginHorizontal: Layout.spacing.xl,
    marginTop: Layout.spacing.md,
    marginBottom: Layout.spacing.xl,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    height: 150,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.light.text,
    marginHorizontal: Layout.spacing.xl,
    marginBottom: Layout.spacing.md,
  },
  horizontalListContent: {
    paddingLeft: Layout.spacing.xl,
    paddingRight: Layout.spacing.md,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Layout.spacing.xl,
    marginBottom: Layout.spacing.xl,
  },
  promotionsContainer: {
    marginHorizontal: Layout.spacing.xl,
  },
  promotionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  productCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
  },
  filterButton: {
    marginLeft: Layout.spacing.sm,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
  },
  filterText: {
    fontSize: 12,
    color: Colors.light.placeholder,
  },
});