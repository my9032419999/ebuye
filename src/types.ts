export interface Product {
  id: string;
  name: string;
  teluguName: string;
  description: string;
  price: number;
  weight: string; // e.g., '250g'
  category: 'Veg' | 'Non-Veg';
  spiceLevel: number; // 1 to 5
  isBestseller?: boolean;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
