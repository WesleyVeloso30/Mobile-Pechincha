import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search } from 'lucide-react-native';
import Colors from '@src/constants/Colors';
import Layout from '@src/constants/Layout';
import { Category, Product, Promotion } from '@src/types';
import { promotionsMock, categoriesMock } from '@src/mock/home';
import Constants from "expo-constants";
import { formatPrice } from '@src/utils';
import PromotionCard from '@src/components/home/PromotionCard';
import { globalStyles } from '@src/style/global';
import BackButton from '@src/components/BackButton';

const isMocked = Constants.manifest2.extra.isMocked == "true";
const categoryColors = ['#007BFF', '#28A745', '#FFC107', '#DC3545'];

export default function ProductsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([] as Category[]);
  const [promotions, setPromotions] = useState([] as Promotion[]);
  
  useEffect(() => {
    getHomeData();
  }, []);
  // () => {
  //       if (filterByCategories?.length) {
  //         const categoryAlreadySelected = filterByCategories.find((filteredCategories) => filteredCategories.id === category.id);
  //         if (categoryAlreadySelected) {
  //           newCategories = filterByCategories.filter(({ id }) => id !== category.id);
  //         } else {
  //           filterByCategories.push(category);
  //           newCategories = filterByCategories;
  //         }
  //       } else {
  //         newCategories = [category]
  //       }
  //       setFilterByCategories(newCategories);
  //       newCategories = [];
  //     }

   const getHomeData = () => {
    if (!isMocked) {
      setPromotions(promotionsMock);
      setCategories(categoriesMock);
    } else {
      // Dados vindos da Api
    }
  }

  const handleBack = () => {
    router.replace('/(tabs)');
  };

  const renderProduct = ({ item, index }: { item: Product; index: number }) => {
    const colorIndex = index % categoryColors.length;
    const backgroundColor = categoryColors[colorIndex];
    
    return (
      <TouchableOpacity style={styles.productCard}>
        <View style={styles.productImageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.productPrice}>
            {formatPrice(item.price)}
          </Text>
          <TouchableOpacity 
            style={[styles.addButton, { backgroundColor }]}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = ({ item }: { item: any }) => (
    <TouchableOpacity 
    style={[
      styles.categoryChip,
      { backgroundColor: item.color },
      selectedCategory === item.id && styles.categoryChipSelected
    ]}
    onPress={() => setSelectedCategory(item.id)}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.categoryChipText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <BackButton handleBack={handleBack} />
  
        <View style={[styles.searchContainer, globalStyles.shadow]}>
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
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.categoriesContent, globalStyles.shadow]}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Promoções do dia</Text>
      </View>

      <View style={styles.promotionsContainer}>
      {promotions.map((promotion) => (
                  <PromotionCard key={promotion.id} promotion={promotion} />
                ))}
      </View>
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
    paddingHorizontal: Layout.spacing.xl,
    paddingVertical: Layout.spacing.md,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Layout.spacing.sm,
  },
  backButtonImage: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: Layout.borderRadius.large,
    paddingHorizontal: Layout.spacing.md,
    alignItems: 'center',
    borderColor: Colors.light.primary,
    borderWidth: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: Layout.spacing.sm,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.text,
  },
  searchButton: {
    padding: Layout.spacing.xs,
  },
  categoriesContainer: {
    paddingVertical: Layout.spacing.md,
  },
  categoriesContent: {
    paddingHorizontal: Layout.spacing.xl,
  },
  categoryChip: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.large,
    marginRight: Layout.spacing.sm,
  },
  categoryChipSelected: {
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  categoryChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.light.text,
  },
  sectionHeader: {
    paddingHorizontal: Layout.spacing.xl,
    paddingVertical: Layout.spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.light.text,
  },
  productsContainer: {
    paddingHorizontal: Layout.spacing.xl,
    paddingBottom: Layout.spacing.xxl,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: Layout.borderRadius.medium,
    marginBottom: Layout.spacing.md,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImageContainer: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: Layout.borderRadius.medium,
    borderTopRightRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: Layout.spacing.sm,
    position: 'relative',
  },
  productName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.light.text,
    marginBottom: Layout.spacing.xs,
    lineHeight: 16,
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: Layout.spacing.sm,
  },
  promotionsContainer: {
    marginHorizontal: Layout.spacing.xl,
  },
  addButton: {
    position: 'absolute',
    bottom: Layout.spacing.sm,
    right: Layout.spacing.sm,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
});
