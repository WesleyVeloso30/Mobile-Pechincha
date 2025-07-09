import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Category } from '@/src/types';
import Layout from '@/src/constants/Layout';
import Colors from '@/src/constants/Colors';

interface CategoryCardProps {
  category: Category;
  setFilterByCategories: React.Dispatch<React.SetStateAction<Category[]>>
  filterByCategories: Category[];
}

export default function CategoryCard({ category, setFilterByCategories, filterByCategories }: CategoryCardProps) {
  let newCategories: Category[];

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { backgroundColor: category.color }
      ]}
      onPress={() => {
        if (filterByCategories?.length) {
          const categoryAlreadySelected = filterByCategories.find((filteredCategories) => filteredCategories.id === category.id);
          if (categoryAlreadySelected) {
            newCategories = filterByCategories.filter(({ id }) => id !== category.id);
          } else {
            filterByCategories.push(category);
            newCategories = filterByCategories;
          }
        } else {
          newCategories = [category]
        }
        setFilterByCategories(newCategories);
        newCategories = [];
      }}
    >
      <Text style={styles.icon}>{category.icon}</Text>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    aspectRatio: 1.4,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.sm,
    margin: '1.66%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.light.text,
    textAlign: 'center',
  },
});