"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  Plus, 
  Gamepad2, 
  Monitor, 
  Headphones, 
  Heart,
  ChevronRight,
  Filter,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

// --- DATA ---

const CATEGORIES = [
  { id: "all", label: "All Gear", icon: Gamepad2 },
  { id: "consoles", label: "Consoles", icon: Monitor },
  { id: "controllers", label: "Controllers", icon: Gamepad2 },
  { id: "accessories", label: "Accessories", icon: Headphones },
];

const PRODUCTS = [
  {
    id: "ps5",
    name: "PlayStation 5 Console",
    category: "consoles",
    price: 499.99,
    image: "/Image/PS5.png",
    rating: 4.9,
    isFeatured: true,
    description: "Next-generation gaming with ultra-high speed SSD and immersive 3D audio."
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    category: "consoles",
    price: 499.99,
    image: "/Image/Xbox Series X.png",
    rating: 4.8,
    isFeatured: true,
    description: "The most powerful Xbox ever, built for speed and performance."
  },
  {
    id: "dualset-ps5",
    name: "DualSense Wireless Controller",
    category: "controllers",
    price: 69.99,
    image: "/Image/Manette PS5.png",
    rating: 5.0,
    isFeatured: false,
    description: "Discover a deeper gaming experience with haptic feedback and adaptive triggers."
  },
  {
    id: "xbox-elite",
    name: "Xbox Elite Series 2",
    category: "controllers",
    price: 179.99,
    image: "/Image/Manette Xbox series X.png",
    rating: 4.7,
    isFeatured: false,
    description: "Play like a pro with the world's most advanced controller."
  },
  {
    id: "ps-vr",
    name: "PlayStation VR Headset",
    category: "accessories",
    price: 299.99,
    image: "/Image/Casque VR PlayStation.png",
    rating: 4.6,
    isFeatured: false,
    description: "Immerse yourself in extraordinary new worlds with PlayStation VR."
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S",
    category: "consoles",
    price: 299.99,
    image: "/Image/Xbox Series S.png",
    rating: 4.5,
    isFeatured: false,
    description: "Next-gen performance in our smallest Xbox ever."
  },
  {
    id: "volant-ps",
    name: "PlayStation Racing Wheel",
    category: "accessories",
    price: 349.99,
    image: "/Image/Volant Playstation.png",
    rating: 4.8,
    isFeatured: false,
    description: "High-performance racing wheel for the ultimate driving simulation."
  },
  {
    id: "ps4-pro",
    name: "PS4 PRO Console",
    category: "consoles",
    price: 399.99,
    image: "/Image/PS4 PRO.png",
    rating: 4.7,
    isFeatured: false,
    description: "Spectacular graphics and enhanced performance."
  },
  {
    id: "xbox-one-x",
    name: "Xbox One Series X",
    category: "consoles",
    price: 349.99,
    image: "/Image/Xbox one series x.png",
    rating: 4.6,
    isFeatured: false,
    description: "Experience the true power of 4K gaming."
  },
  {
    id: "manette-ps4",
    name: "PS4 Wireless Controller",
    category: "controllers",
    price: 59.99,
    image: "/Image/Manette PS4.png",
    rating: 4.8,
    isFeatured: false,
    description: "The classic controller for your PS4 setup."
  },
  {
    id: "manette-xbox-one",
    name: "Xbox One Controller",
    category: "controllers",
    price: 54.99,
    image: "/Image/Manette Xbox One.png",
    rating: 4.7,
    isFeatured: false,
    description: "Precision control for your Xbox One experience."
  }
];

// --- COMPONENTS ---

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.97 }}
      className="group"
    >
      <Card className="bg-card border-none overflow-hidden h-full flex flex-col shadow-card hover:shadow-accent-glow transition-all duration-300">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#101010]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-product-image"
          />
          <button className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-primary transition-colors">
            <Heart size={18} />
          </button>
        </div>
        <CardContent className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[#FFB800]">
              <Star size={12} fill="currentColor" />
              <span className="text-xs text-secondary">{product.rating}</span>
            </div>
            <h3 className="text-md font-semibold text-white line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Price</span>
              <div className="flex items-start">
                <span className="text-2xl font-extrabold text-white leading-none">
                  ${Math.floor(product.price)}
                </span>
                <span className="text-[10px] font-normal text-white/70 ml-0.5 mt-1">
                  .{(product.price % 1).toFixed(2).split('.')[1]}
                </span>
              </div>
            </div>
            <Button size="icon" className="rounded-full size-10 bg-primary hover:bg-primary/90 text-white shadow-accent-glow">
              <Plus size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function GameStoreLanding() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pb-24">
      {/* --- TOP BAR --- */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-accent-glow">
              <Gamepad2 className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter italic italic">GAMESTORE</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full text-white/70">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white/70 relative">
              <ShoppingCart size={20} />
              <Badge className="absolute -top-1 -right-1 size-4 p-0 flex items-center justify-center bg-primary text-[10px] border-none">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 pt-6 flex flex-col gap-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-[#1a1a1a] to-background border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(123,47,255,0.15),transparent_70%)]" />
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 gap-4 max-w-2xl">
            <Badge variant="outline" className="w-fit border-primary/50 text-primary bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
              New Arrival
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[0.9]">
              ULTIMATE <br />
              <span className="text-primary">PERFORMANCE</span>
            </h1>
            <p className="text-sm md:text-base text-secondary max-w-md">
              Upgrade your setup with the latest next-gen consoles and accessories. Immersive experience starts here.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-md font-bold shadow-accent-glow">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full hidden md:block">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full h-full"
            >
              <Image 
                src="/Image/PS5.png" 
                alt="PS5" 
                fill 
                className="object-contain p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
              />
            </motion.div>
          </div>
        </section>

        {/* --- CATEGORY FILTER --- */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight uppercase">Discover Gear</h2>
            <Button variant="link" className="text-primary text-xs font-bold p-0">View All <ChevronRight size={14} /></Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "default" : "secondary"}
                className={`rounded-full px-6 flex items-center gap-2 h-11 transition-all duration-300 border border-white/5 ${
                  activeCategory === cat.id ? "bg-primary text-white shadow-accent-glow" : "bg-[#161616] text-secondary hover:bg-white/10"
                }`}
              >
                <cat.icon size={16} />
                <span className="text-sm font-semibold">{cat.label}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* --- PRODUCT GRID --- */}
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- FEATURED BANNER --- */}
        <section className="rounded-3xl bg-[#161616] p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(123,47,255,0.1),transparent_50%)]" />
          <div className="flex-1 flex flex-col gap-4 z-10">
            <h2 className="text-3xl font-black text-white leading-tight">TAKE CONTROL OF <br />YOUR GAME</h2>
            <p className="text-secondary text-sm max-w-sm">
              Explore our wide range of professional controllers designed for precision and durability.
            </p>
            <Button className="w-fit rounded-full bg-white text-black hover:bg-white/90 font-bold px-8">
              Explore Accessories
            </Button>
          </div>
          <div className="relative size-48 md:size-64 z-10">
            <Image 
              src="/Image/Manette PS5.png" 
              alt="Controller" 
              fill 
              className="object-contain drop-shadow-product-image animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="mt-12 bg-[#0a0a0a] pt-12 pb-24 border-t border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter italic">GAMESTORE</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The premier destination for gaming hardware and accessories since 2026. Built by gamers, for gamers.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-secondary">
              <li>Track Order</li>
              <li>Returns & Exchanges</li>
              <li>Shipping Info</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-secondary">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>&copy; 2026 GAMESTORE INC. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>DISCORD</span>
          </div>
        </div>
      </footer>

      {/* --- MOBILE THUMB NAVIGATION --- */}
      <div className="thumb-zone md:hidden">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 p-2 flex items-center justify-between shadow-elevated"
        >
          <Button variant="ghost" size="icon" className="rounded-full size-12 text-primary">
            <Gamepad2 size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full size-12 text-white/50">
            <Search size={24} />
          </Button>
          <div className="relative">
            <Button size="icon" className="rounded-full size-14 bg-primary text-white shadow-accent-glow -mt-6">
              <ShoppingCart size={28} />
            </Button>
            <Badge className="absolute -top-6 -right-1 size-5 p-0 flex items-center justify-center bg-white text-black text-[10px] font-bold border-2 border-primary">
              3
            </Badge>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full size-12 text-white/50">
            <Heart size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full size-12 text-white/50">
            <Menu size={24} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
