export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sam W.',
    role: 'Regular Customer',
    avatar: '/av-1.png',
    text: 'Absolutely love the fresh produce and quick delivery!'
  },
  {
    id: '2',
    name: 'Liam P.',
    role: 'Food Enthusiast',
    avatar: '/av-2.png',
    text: 'Their organic fruits are the best I\'ve ever tasted!'
  },
  {
    id: '3',
    name: 'Sophia M.',
    role: 'Health Coach',
    avatar: '/av-3.png',
    text: 'Highly recommend for anyone looking for quality groceries'
  }
];