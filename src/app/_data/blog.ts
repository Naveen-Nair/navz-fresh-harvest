export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  mainImage: string;
  middleImages: string[];
  precontent: string[];
  postcontent: string[];
  author: string;
}
export const blogPosts: BlogPost[] = [
  {
    id: 'healthy-eating',
    title: 'The Secret to Eating Healthy & Fresh',
    subtitle: 'Learn how organic food benefits your health and the environment.',
    mainImage: '/blog-1.png',
    middleImages: ['/sh-pear.png', '/sh-watermelon.png'],
    precontent: [
      'In today\'s fast-paced world, maintaining a healthy diet can be challenging.',
      'Understanding the importance of fresh, organic produce is the first step towards better health.'
    ],
    postcontent: [
      'By making conscious choices about our food, we can improve both our personal health and environmental sustainability.',
      'Start your journey to healthier eating today with these simple steps and guidelines.'
    ],
    author: 'Naveen Nair'
  },
  {
    id: 'organic-benefits',
    title: '5 Benefits of Organic Food',
    subtitle: 'Discover why organic food is better for you and the planet',
    mainImage: '/sh-featured.png',
    middleImages: ['/sh-vegetables.png', '/sh-cherry.png'],
    precontent: [
      'Organic food has become increasingly popular as people become more conscious about their health.',
      'The benefits of organic food extend far beyond just personal health.'
    ],
    postcontent: [
      'Making the switch to organic food is an investment in both your health and the environment.',
      'Consider starting with commonly consumed items to make the transition more manageable.'
    ],
    author: 'Naveen Nair'
  },
  {
    id: 'storage-guide',
    title: 'How to Store Fresh Produce',
    subtitle: 'Tips and tricks for keeping your produce fresh longer',
    mainImage: '/sh-mushroom.png',
    middleImages: ['/sh-raddish.png', '/sh-mush.png'],
    precontent: [
      'Proper storage is essential for maintaining the freshness and nutritional value of your produce.',
      'Understanding the basics of food storage can help reduce waste and save money.'
    ],
    postcontent: [
      'Implementing these storage techniques will help you maintain fresh produce longer.',
      'Remember that different fruits and vegetables have unique storage requirements.'
    ],
    author: 'Naveen Nair'
  },
  {
    id: 'salad-prep',
    title: 'Best Salad Prep for Your Diet',
    subtitle: 'Master the art of creating nutritious and delicious salads',
    mainImage: '/sh-raddish.png',
    middleImages: ['/sh-vegetables.png', '/sh-pear.png'],
    precontent: [
      'Creating the perfect salad is both an art and a science.',
      'Understanding the balance of nutrients and textures is key to making satisfying salads.'
    ],
    postcontent: [
      'With these preparation techniques, you can enjoy fresh, crisp salads all week long.',
      'Don\'t forget to experiment with different combinations to find your perfect mix.'
    ],
    author: 'Naveen Nair'
  }
];