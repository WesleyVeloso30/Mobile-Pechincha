import { AuthContext } from '@src/contexts/auth/AuthContext';
import { useContext } from 'react';

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}
