import { AuthState } from '@src/types/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@src/types';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

type AuthContextValue = {
  user: User | null
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = '@app/auth';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<AuthState>({ user: null, loading: true });

  // carrega sessão do storage ao iniciar
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as { user: User };
          setState({ user: parsed.user, loading: false });
        } else {
          setState(s => ({ ...s, loading: false }));
        }
      } catch {
        setState(s => ({ ...s, loading: false }));
      }
    })();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    // simulação de request — troque pelo teu backend
    await new Promise(r => setTimeout(r, 500));
    const fakeUser: User = { id: '1', name: 'Usuário', email };
    setState({ user: fakeUser, loading: false });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ user: fakeUser }));
  }, []);

  const logout = useCallback(async () => {
    setState({ user: null, loading: false });
    await AsyncStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo(() => ({
    user: state.user,
    loading: state.loading,
    login,
    logout
  }), [state.user, state.loading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
