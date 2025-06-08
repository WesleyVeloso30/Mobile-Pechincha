import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, ShoppingBasket } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';
import Layout from '@/src/constants/Layout';

interface ShoppingList {
  id: string;
  name: string;
  itemCount: number;
  date: string;
}

const mockLists: ShoppingList[] = [
  { id: '1', name: 'Compras do mês', itemCount: 23, date: '12 Mai 2023' },
  { id: '2', name: 'Churrasco de domingo', itemCount: 8, date: '05 Mai 2023' },
  { id: '3', name: 'Produtos de limpeza', itemCount: 12, date: '28 Abr 2023' },
  { id: '4', name: 'Feira da semana', itemCount: 15, date: '20 Abr 2023' },
];

export default function ListsScreen() {
  const renderItem = ({ item }: { item: ShoppingList }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listIconContainer}>
        <ShoppingBasket size={24} color={Colors.light.primary} />
      </View>
      <View style={styles.listItemContent}>
        <Text style={styles.listItemTitle}>{item.name}</Text>
        <View style={styles.listItemDetails}>
          <Text style={styles.listItemCount}>{item.itemCount} itens</Text>
          <Text style={styles.listItemDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minhas Listas</Text>
      </View>

      <FlatList
        data={mockLists}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Você ainda não tem listas de compras.
            </Text>
          </View>
        }
      />

      <TouchableOpacity style={styles.addButton}>
        <Plus size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Layout.spacing.xl,
    paddingVertical: Layout.spacing.xl,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.light.text,
  },
  listContent: {
    paddingHorizontal: Layout.spacing.xl,
    paddingBottom: Layout.spacing.xxl * 2,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.md,
    marginBottom: Layout.spacing.md,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 210, 122, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Layout.spacing.md,
  },
  listItemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  listItemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 4,
  },
  listItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemCount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.placeholder,
  },
  listItemDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.light.placeholder,
  },
  emptyContainer: {
    padding: Layout.spacing.xxl,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.light.placeholder,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: Layout.spacing.xl,
    right: Layout.spacing.xl,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});