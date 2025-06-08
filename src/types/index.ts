export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  supermarket: string;
  category: string;
  discount?: number;
  quantity?: string;
}

export interface Supermarket {
  id: string;
  name: string;
  image: string;
  distance?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  productCount: number;
  endDate?: Date;
}