import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import BackButton from "../../../components/BackButton";

const categoryTitles: Record<string, string> = {
  "plata-925": "Plata 925",
  "oro-18kl": "Oro 18kl",
  "enchapado": "Enchapado",
  "insumos": "Insumos",
  "personalizados": "Personalizados",
  "cadenas": "Cadenas",
  "aros": "Aros",
  "pulseras": "Pulseras",
  "anillos": "Anillos",
  "dijes": "Dijes",
  "conjuntos": "Conjuntos",
};

export async function generateStaticParams() {
  return Object.keys(categoryTitles).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const title = categoryTitles[slug] || slug.replace("-", " ").toUpperCase();

  // --- ACÁ ESTÁ LA MAGIA DEL FILTRO ---
  const filteredProducts = products.filter((p) => {
    // 1. Si la URL es "anillos", buscamos products.category === "anillos"
    if (p.category === slug) return true;
    
    // 2. Si la URL es "plata-925", buscamos products.material === "plata-925"
    if (p.material === slug) return true;

    return false;
  });
  // ------------------------------------

  return (
    <main className="min-h-screen bg-white pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="mb-4">
            <BackButton />
        </div>
        
        <div className="text-center mb-16">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-2">Colección</p>
          <h1 className="font-serif text-4xl md:text-5xl text-magnolia-dark">{title}</h1>
          <div className="w-16 h-0.5 bg-magnolia-lilac mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/producto/${product.id}`} className="group cursor-pointer">
              
              <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-50 rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-serif text-gray-800 text-lg group-hover:text-magnolia-lilac transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex justify-center gap-1 text-yellow-400 text-[10px] mb-1">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill={i < product.rating ? "currentColor" : "none"} />
                   ))}
                </div>

                <p className="font-sans text-gray-500 font-light tracking-wide text-sm">
                  {product.formattedPrice}
                </p>
              </div>

            </Link>
          ))}
        </div>
        
        {/* Mensaje si no hay productos en esa categoría */}
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400 flex flex-col items-center">
                <p className="text-lg">Próximamente...</p>
                <p className="text-sm">Aún no cargamos productos en la sección {title}.</p>
            </div>
        )}

      </div>
    </main>
  );
}