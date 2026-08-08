export type Product = {
  id: number;
  title: string;
  price: number;
  category: "Electronics" | "Clothing" | "Home";
  image: string;
  rating: number;
  description: string;
};

export const products: Product[] = [
  { id: 1, title: "Running Shoes", price: 99, category: "Clothing", image: "https://placehold.co/400x400?text=Running+Shoes", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 2, title: "Wireless Headphones", price: 59, category: "Electronics", image: "https://placehold.co/400x400?text=Headphones", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 3, title: "Backpack", price: 129, category: "Clothing", image: "https://placehold.co/400x400?text=Backpack", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 4, title: "Smartwatch", price: 249, category: "Electronics", image: "https://placehold.co/400x400?text=Smartwatch", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 5, title: "Sunglasses", price: 149, category: "Clothing", image: "https://placehold.co/400x400?text=Sunglasses", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 6, title: "Digital Camera", price: 499, category: "Electronics", image: "https://placehold.co/400x400?text=Camera", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 7, title: "T-shirt", price: 29, category: "Clothing", image: "https://placehold.co/400x400?text=T-shirt", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 8, title: "Smartphone", price: 699, category: "Electronics", image: "https://placehold.co/400x400?text=Smartphone", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
];