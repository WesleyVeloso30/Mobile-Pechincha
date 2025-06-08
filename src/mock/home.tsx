import { Category, Promotion, Supermarket } from "../types";

export const supermarketsMock: Supermarket[] = [
  {
    id: '1',
    name: 'Supermercado Regional',
    image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg',
    distance: '1.2 km',
  },
  {
    id: '2',
    name: 'Supermercado Industrial',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
    distance: '3.4 km',
  },
  {
    id: '3',
    name: 'Supermercado União',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    distance: '4.8 km',
  }
];

export const categoriesMock: Category[] = [
  { id: '1', name: 'Carnes', icon: '🥩', color: '#FFCECE' },
  { id: '2', name: 'Bebidas', icon: '🥤', color: '#CCE5FF' },
  { id: '3', name: 'Cereais', icon: '🌾', color: '#E6DFCD' },
  { id: '4', name: 'Frutas', icon: '🍎', color: '#E5FFCC' },
  { id: '5', name: 'Verduras', icon: '🥬', color: '#CCFFE6' },
  { id: '6', name: 'Massas', icon: '🍝', color: '#FFF5CC' },
];

export const promotionsMock: Promotion[] = [
  {
    id: '1',
    title: 'Promoção de Carnes',
    description: 'Até 30% de desconto em carnes selecionadas',
    image: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg',
    productCount: 300,
  },
  {
    id: '2',
    title: 'Festival de Frutas',
    description: 'Frutas da estação com preços imperdíveis',
    image: 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg',
    productCount: 150,
  }
];
