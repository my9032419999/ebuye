import { Product } from './types';

export const config = {
  brand: {
    name: "Grameena Ruchulu",
    tagline: "HOMEMADE TELANGANA PICKLES",
    description: "Authentic homemade Telangana & Andhra pickles, handcrafted in small batches with traditional recipes, fresh ingredients and pure sesame oil."
  },
  contact: {
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43210",
    email: "hello@grameenaruchulu.com",
    whatsappNumber: "919876543210" // Ex: 919876543210 (Country code + number without plus)
  },
  products: [
    {
      id: "p1",
      name: "Avakaya (Mango) Pickle",
      teluguName: "ఆవకాయ",
      description: "The classic Andhra mango pickle made with freshly ground mustard, premium chili powder, and pure sesame oil.",
      price: 299,
      weight: "250g",
      category: "Veg",
      spiceLevel: 4,
      isBestseller: true,
      image: "https://images.unsplash.com/photo-1626082895617-2c6afedeb643?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p2",
      name: "Gongura Pickle",
      teluguName: "గోంగూర పచ్చడి",
      description: "Tangy and spicy sorrel leaves pickle, a signature delicacy of Telugu states. Pairs perfectly with hot rice and ghee.",
      price: 299,
      weight: "250g",
      category: "Veg",
      spiceLevel: 3,
      isBestseller: true,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p3",
      name: "Tomato Pickle",
      teluguName: "టమాటా పచ్చడి",
      description: "Sun-dried tomatoes blended with traditional spices for a perfectly balanced tangy and spicy flavor.",
      price: 249,
      weight: "250g",
      category: "Veg",
      spiceLevel: 2,
      isBestseller: false,
      image: "https://images.unsplash.com/photo-1582855604470-34863e41cba3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p4",
      name: "Garlic Pickle",
      teluguName: "వెల్లుల్లి పచ్చడి",
      description: "Pungent, healthy, and incredibly flavorful garlic cloves marinated in our special homemade spice blend.",
      price: 299,
      weight: "250g",
      category: "Veg",
      spiceLevel: 3,
      isBestseller: false,
      image: "https://images.unsplash.com/photo-1593504049359-715569429c78?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p5",
      name: "Chicken Pickle",
      teluguName: "చికెన్ పచ్చడి",
      description: "Premium boneless chicken chunks slow-cooked with roasted spices. A heaven for non-veg lovers.",
      price: 449,
      weight: "250g",
      category: "Non-Veg",
      spiceLevel: 4,
      isBestseller: true,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p6",
      name: "Mutton Pickle",
      teluguName: "మటన్ పచ్చడి",
      description: "Tender, high-quality mutton marinated and cooked in rich, aromatic spices for an unforgettable taste.",
      price: 499,
      weight: "250g",
      category: "Non-Veg",
      spiceLevel: 5,
      isBestseller: false,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=80"
    }
  ] as Product[]
};
