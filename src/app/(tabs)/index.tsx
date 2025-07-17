import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, MessageCircle } from 'lucide-react-native';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';
import Logo from '@src/components/Logo';
import CategoryCard from '@src/components/home/CategoryCard';
import SupermarketCard from '@src/components/home/SupermarketCard';
import PromotionCard from '@src/components/home/PromotionCard';
import { Category, Supermarket, Promotion } from '@src/types';
import { categoriesMock, promotionsMock, supermarketsMock } from '@src/mock/home';
import Constants from "expo-constants";
import { router } from 'expo-router';

const isMocked = Constants.manifest2.extra.isMocked == "true";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [supermarkets, setSupermarkets] = useState([] as Supermarket[]);
  const [promotions, setPromotions] = useState([] as Promotion[]);
  const [categories, setCategories] = useState([] as Category[]);
  const [filterByCategories, setFilterByCategories] = useState([] as Category[]);

  useEffect(() => {
    getHomeData();
  }, []);

  useEffect(() => {
  }, [filterByCategories]);

  const getHomeData = () => {
    if (!isMocked) {
      setSupermarkets(supermarketsMock);
      setPromotions(promotionsMock);
      setCategories(categoriesMock);
    } else {
      // Dados vindos da Api
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/auth')}>
          <Logo size={24} horizontal />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <MessageCircle size={24} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busque seu produto aqui..."
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
            <CategoryCard key={category.id} category={category} setFilterByCategories={setFilterByCategories} filterByCategories={filterByCategories} />
          ))}
        </View>
        
        <View style={styles.promotionsContainer}>
          <View style={styles.promotionsHeader}>
            <Text style={styles.sectionTitle}>Promoções do dia</Text>
            <View style={styles.productCountContainer}>
              <Text style={styles.productCount}>300 prod.</Text>
              <TouchableOpacity style={styles.filterButton} onPress={() => router.replace('/filters')}>
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
    marginTop: 18,
  },
  chatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 210, 122, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
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