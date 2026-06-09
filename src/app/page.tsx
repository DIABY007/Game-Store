"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Search, 
  CreditCard, 
  Gamepad2, 
  Monitor, 
  Headphones, 
  Phone,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- CONSTANTS ---

const WHATSAPP_NUMBER = "22656636039";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const CALL_LINK = `tel:+${WHATSAPP_NUMBER}`;

// --- DATA ---

const CATEGORIES = [
  { id: "all", label: "Tout l'équipement", icon: Gamepad2 },
  { id: "consoles", label: "Consoles", icon: Monitor },
  { id: "controllers", label: "Manettes", icon: Gamepad2 },
  { id: "accessories", label: "Accessoires", icon: Headphones },
];

const PRODUCTS = [
  {
    id: "ps5",
    name: "Console PlayStation 5",
    category: "consoles",
    price: 499.99,
    image: "/Image/PS5.png",
    isFeatured: true,
    description: "Gaming nouvelle génération avec un SSD ultra-rapide et un son 3D immersif."
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    category: "consoles",
    price: 499.99,
    image: "/Image/Xbox Series X.png",
    isFeatured: true,
    description: "La Xbox la plus puissante jamais conçue, bâtie pour la vitesse et la performance."
  },
  {
    id: "dualset-ps5",
    name: "Manette sans fil DualSense",
    category: "controllers",
    price: 69.99,
    image: "/Image/Manette PS5.png",
    isFeatured: false,
    description: "Découvrez une expérience de jeu plus profonde avec le retour haptique."
  },
  {
    id: "xbox-elite",
    name: "Xbox Elite Series 2",
    category: "controllers",
    price: 179.99,
    image: "/Image/Manette Xbox series X.png",
    isFeatured: false,
    description: "Jouez comme un pro avec la manette la plus avancée au monde."
  },
  {
    id: "ps-vr",
    name: "Casque PlayStation VR",
    category: "accessories",
    price: 299.99,
    image: "/Image/Casque VR PlayStation.png",
    isFeatured: false,
    description: "Immergez-vous dans de nouveaux mondes extraordinaires avec le PS VR."
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S",
    category: "consoles",
    price: 299.99,
    image: "/Image/Xbox Series S.png",
    isFeatured: false,
    description: "Performances next-gen dans la plus petite Xbox jamais conçue."
  },
  {
    id: "volant-ps",
    name: "Volant de course PlayStation",
    category: "accessories",
    price: 349.99,
    image: "/Image/Volant Playstation.png",
    isFeatured: false,
    description: "Volant haute performance pour une simulation de conduite ultime."
  },
  {
    id: "ps4-pro",
    name: "Console PS4 PRO",
    category: "consoles",
    price: 399.99,
    image: "/Image/PS4 PRO.png",
    isFeatured: false,
    description: "Graphismes spectaculaires et performances améliorées."
  },
  {
    id: "xbox-one-x",
    name: "Xbox One Series X",
    category: "consoles",
    price: 349.99,
    image: "/Image/Xbox one series x.png",
    isFeatured: false,
    description: "Découvrez la véritable puissance du jeu en 4K."
  },
  {
    id: "manette-ps4",
    name: "Manette sans fil PS4",
    category: "controllers",
    price: 59.99,
    image: "/Image/Manette PS4.png",
    isFeatured: false,
    description: "La manette classique pour votre configuration PS4."
  },
  {
    id: "manette-xbox-one",
    name: "Manette Xbox One",
    category: "controllers",
    price: 54.99,
    image: "/Image/Manette Xbox One.png",
    isFeatured: false,
    description: "Contrôle de précision pour votre expérience Xbox One."
  }
];

// --- COMPONENTS ---

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  const handlePurchase = () => {
    const message = `Bonjour GameStore, je souhaite commander : ${product.name} au prix de ${product.price} USD.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
            className={`object-contain ${product.id === 'ps5' ? 'p-1 scale-110' : 'p-4'} group-hover:scale-110 transition-transform duration-500 drop-shadow-product-image`}
          />
        </div>
        <CardContent className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-md font-semibold text-white line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-white/50 uppercase tracking-widest">Prix</span>
              <div className="flex items-start">
                <span className="text-2xl font-extrabold text-white leading-none">
                  ${Math.floor(product.price)}
                </span>
                <span className="text-[10px] font-normal text-white/70 ml-0.5 mt-1">
                  .{(product.price % 1).toFixed(2).split('.')[1]}
                </span>
              </div>
            </div>
            <Button 
              onClick={handlePurchase}
              size="icon" 
              className="rounded-full size-10 bg-primary hover:bg-primary/90 text-white shadow-accent-glow"
            >
              <CreditCard size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function GameStoreLanding() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-white flex flex-col pb-24">
      {/* --- TOP BAR --- */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-accent-glow">
              <Gamepad2 className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter italic text-white">GAMESTORE</span>
          </div>

          <div className="flex-1 max-w-md hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text"
              placeholder="Rechercher une console, manette..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <input 
                      type="text"
                      autoFocus
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-primary/50"
                    />
                    <button 
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              {!isSearchOpen && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full text-white"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search size={20} />
                </Button>
              )}
            </div>

            <Button 
              render={
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                />
              }
              variant="ghost" 
              className="rounded-full text-white flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all px-4 h-10 w-auto"
            >
              <MessageSquare size={20} />
              <span className="text-xs font-bold hidden sm:inline">Une question ?</span>
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
              Nouvel Arrivage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[0.9]">
              PERFORMANCE <br />
              <span className="text-primary">ULTIME</span>
            </h1>
            <p className="text-sm md:text-base text-white/70 max-w-md">
              Améliorez votre setup avec les dernières consoles et accessoires. L'expérience immersive commence ici.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Button render={<a href="#products" />} className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-md font-bold shadow-accent-glow flex items-center justify-center">
                Acheter Maintenant
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full hidden md:block">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full h-full scale-150 origin-bottom-right"
            >
              <Image 
                src="/Image/PS5.png" 
                alt="PS5" 
                fill 
                className="object-contain p-2 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
              />
            </motion.div>
          </div>
        </section>

        {/* --- CATEGORY FILTER --- */}
        <section id="products" className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight uppercase">Découvrir l'équipement</h2>
            <Button variant="link" className="text-primary text-xs font-bold p-0">Tout voir <ChevronRight size={14} /></Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "default" : "secondary"}
                className={`rounded-full px-6 flex items-center gap-2 h-11 transition-all duration-300 border border-white/5 ${
                  activeCategory === cat.id ? "bg-primary text-white shadow-accent-glow" : "bg-[#161616] text-white/70 hover:bg-white/10"
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
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center gap-4">
              <div className="size-16 bg-white/5 rounded-full flex items-center justify-center">
                <Search size={32} className="text-white/20" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Aucun résultat</h3>
                <p className="text-white/50">Essayez d'autres mots-clés ou changez de catégorie.</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                className="border-white/10 text-white hover:bg-white/5"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </section>

        {/* --- FEATURED BANNER --- */}
        <section className="rounded-3xl bg-[#161616] p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(123,47,255,0.1),transparent_50%)]" />
          <div className="flex-1 flex flex-col gap-4 z-10">
            <h2 className="text-3xl font-black text-white leading-tight">PRENEZ LE CONTRÔLE <br />DE VOTRE JEU</h2>
            <p className="text-white/70 text-sm max-w-sm">
              Explorez notre large gamme de manettes professionnelles conçues pour la précision et la durabilité.
            </p>
            <Button 
              render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />} 
              className="w-fit rounded-full bg-white text-background hover:bg-white/90 font-extrabold px-8 py-3 flex items-center justify-center"
            >
              Nous contacter
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
        <div className="container mx-auto px-4 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter italic">GAMESTORE</span>
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              La destination ultime pour le matériel gaming depuis 2026.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-white/70 font-bold uppercase tracking-widest">
            <a href={WHATSAPP_LINK} className="hover:text-primary transition-colors">WhatsApp</a>
            <a href={CALL_LINK} className="hover:text-primary transition-colors">Appel</a>
            <a href="#" className="hover:text-primary transition-colors">Localisation</a>
          </div>
          <div className="pt-6 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/50">
            <span>&copy; 2026 GAMESTORE BURKINA FASO. TOUS DROITS RÉSERVÉS.</span>
            <div className="flex gap-4">
              <span>INSTAGRAM</span>
              <span>FACEBOOK</span>
              <span>TIKTOK</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MOBILE THUMB NAVIGATION --- */}
      <div className="thumb-zone md:hidden">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 p-2 flex items-center justify-around shadow-elevated"
        >
          <Button render={<a href="#products" />} variant="ghost" size="icon" className="rounded-full size-12 text-white/50 flex items-center justify-center">
            <Monitor size={24} />
          </Button>
          <div className="relative">
            <Button render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />} size="icon" className="rounded-full size-16 bg-primary text-white shadow-accent-glow -mt-8 flex items-center justify-center">
              <MessageCircle size={32} />
            </Button>
          </div>
          <Button render={<a href={CALL_LINK} />} variant="ghost" size="icon" className="rounded-full size-12 text-white/50 flex items-center justify-center">
            <Phone size={24} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
