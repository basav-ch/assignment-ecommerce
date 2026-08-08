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
  { id: 1, title: "Running Shoes", price: 99, category: "Clothing", image: "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 2, title: "Wireless Headphones", price: 59, category: "Electronics", image: "https://images.unsplash.com/photo-1536656930057-9252abf296a5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 3, title: "Backpack", price: 129, category: "Clothing", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_9babab2f158529c6588b44b420f6d42e.webp", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 4, title: "Smartwatch", price: 249, category: "Electronics", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_f831cda332e0b454f835f58aee863195.webp", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 5, title: "Sunglasses", price: 149, category: "Clothing", image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240713/RhBC/66923b426f60443f31082d3b/-1117Wx1400H-700004001-black-MODEL.jpg", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 6, title: "Digital Camera", price: 499, category: "Electronics", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_953c4f5b0d292cca09c4f69ba91bbbfa.webp", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 7, title: "T-shirt", price: 29, category: "Clothing", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_a68f000d28ed34b12d692224b36c1f7b.webp", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
  { id: 8, title: "Smartphone", price: 699, category: "Electronics", image: "https://image01-in.oneplus.net/media/202607/27/9b44cb679a767ac76c86cd321ca8ee54.png?x-amz-process=image/format,webp/quality,Q_80", rating: 4, description: "Lorem ipsum dolor amet, conssectetur euisagend." },
];