import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { Category } from '@src/types';

type CategoryFilterContextValue = {
  categoryFilter: Category[],
  setCategoryFilter: (t: { category: Category[], loading?: boolean }) => Promise<void>;
  loading?: boolean,
};

export const CategoryFilterContext = createContext<CategoryFilterContextValue | undefined>(undefined);

const STORAGE_KEY = '@app/CategoryFilter';

export const CategoryFilterProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [categoryFilter, setCategoryFilterState] = useState<{ category: Category[], loading?: boolean }>({category: [], loading: false});

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { category: Category[] };
        setCategoryFilterState({ category: parsed.category, loading: false });
      } else {
        setCategoryFilterState(s => ({ ...s, loading: false }));
      }
    })();
  }, []);

  const setCategoryFilter = useCallback(async (t: { category: Category[], loading?: boolean }) => {
    setCategoryFilterState(t);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ category: t }));
  }, []);

  const value = useMemo(() => ({
    loading: categoryFilter?.loading,
    categoryFilter: categoryFilter.category,
    setCategoryFilter
  }), [categoryFilter.category, categoryFilter.loading, categoryFilter, setCategoryFilter]);

  return <CategoryFilterContext.Provider value={value}>{children}</CategoryFilterContext.Provider>;
};
