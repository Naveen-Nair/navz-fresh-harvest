export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'organic-mushroom',
    name: 'Organic Gourmet Mushroom',
    price: 10.99,
    description: 'A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals.',
    image: '/sh-mushroom.png',
    features: ['Sustainably grown', 'Freshly harvested', 'Packed with nutrients']
  },
  {
    id: 'fresh-pears',
    name: 'Fresh Pears',
    price: 10.99,
    description: 'Sweet and juicy organic pears',
    image: '/sh-pear.png',
    features: ['Naturally sweet', 'Rich in fiber', 'Hand-picked']
  },
  {
    id: 'radish-greens',
    name: 'Radish Greens',
    price: 10.99,
    description: 'Crisp and fresh garden radishes',
    image: '/sh-raddish.png',
    features: ['Locally grown', 'Rich in vitamins', 'Perfect for salads']
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    price: 10.99,
    description: 'Refreshing, naturally sweet watermelon',
    image: '/sh-watermelon.png',
    features: ['Hydrating', 'Low calorie', 'Summer favorite']
  },
  {
    id: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    price: 12.99,
    description: 'A selection of farm-fresh seasonal vegetables',
    image: '/sh-vegetables.png',
    features: ['Organic', 'Seasonal mix', 'Farm fresh']
  },
  {
    id: 'fresh-cherries',
    name: 'Fresh Cherries',
    price: 8.99,
    description: 'Sweet and juicy fresh cherries',
    image: '/sh-cherry.png',
    features: ['Hand-picked', 'Natural sweetness', 'Rich in antioxidants']
  },
  {
    id: 'fresh-mushroom',
    name: 'Fresh Mushrooms',
    price: 9.99,
    description: 'Fresh and flavorful mushroom variety',
    image: '/sh-mush.png',
    features: ['Versatile', 'Rich umami flavor', 'High in protein']
  }
];