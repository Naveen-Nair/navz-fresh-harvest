interface RelatedProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const relatedProducts: RelatedProduct[] = [
  {
    id: 'handpicked-fruits',
    name: 'Handpicked Fruits',
    description: 'Fresh, seasonal fruits carefully selected for optimal ripeness and flavor.',
    image: '/main-1.png'
  },
  {
    id: 'delicious-beverages',
    name: 'Delicious Beverages',
    description: 'Refreshing organic drinks and smoothies made from natural ingredients.',
    image: '/main-2.png'
  },
  {
    id: 'gourmet-essentials',
    name: 'Gourmet & Essentials',
    description: 'Premium quality pantry staples and gourmet ingredients for your kitchen.',
    image: '/main-3.png'
  }
];