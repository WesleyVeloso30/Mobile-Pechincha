import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { CategoryFilterProvider } from './categoryFilter/CategoryFilterContext';

export const AppProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <AuthProvider>
    <CategoryFilterProvider>
    {children}
    </CategoryFilterProvider>
    </AuthProvider>
  );
};
