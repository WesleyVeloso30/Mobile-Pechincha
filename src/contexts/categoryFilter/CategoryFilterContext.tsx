import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { Category } from '@src/types';
import { CategoryFilterContextDTO } from '../types/categoryFilter';

type CategoryFilterContextValue = {
  categoryFilter: CategoryFilterContextDTO,
  setCategoryFilter: (t: CategoryFilterContextDTO) => Promise<void>;
};

export const CategoryFilterContext = createContext<CategoryFilterContextValue | undefined>(undefined);

const STORAGE_KEY = '@app/CategoryFilter';

export const CategoryFilterProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [categoryFilter, setCategoryFilterState] = useState<CategoryFilterContextDTO>({categories: [], loading: false});

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CategoryFilterContextDTO;
        setCategoryFilterState({ categories: parsed.categories, loading: false });
      } else {
        setCategoryFilterState(s => ({ ...s, loading: false }));
      }
    })();
  }, []);

  const setCategoryFilter = useCallback(async (t: CategoryFilterContextDTO) => {
    setCategoryFilterState(t);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ categories: t }));
  }, []);

  const value = useMemo(() => ({
    categoryFilter: categoryFilter,
    setCategoryFilter
  }), [categoryFilter.categories, categoryFilter.loading, categoryFilter, setCategoryFilter]);

  return <CategoryFilterContext.Provider value={value}>{children}</CategoryFilterContext.Provider>;
};
