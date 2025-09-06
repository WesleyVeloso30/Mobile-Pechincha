import { CategoryFilterContext } from '@src/contexts/categoryFilter/CategoryFilterContext';
import { useContext } from 'react';

export function useCategoryFilter() {
  const ctx = useContext(CategoryFilterContext);
  if (!ctx) throw new Error('useCategoryfilter deve ser usado dentro de <AuthProvider>');
  return ctx;
}
