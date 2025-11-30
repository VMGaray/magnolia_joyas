import Image from "next/image";
import Link from "next/link";
// IMPORTANTE: Ajustamos la ruta para buscar 'data' en la raíz (3 niveles arriba)
import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

// Mapeo para que el título se vea lindo (ej: 'oro-18kl' -> 'Oro 18kl')
const categoryTitles: Record<string, string> = {
  "plata-925": "Plata 925",
  "oro-18kl": "Oro 18kl",
  "enchapado": "Enchapado",
  "insumos": "Insumos",
  "personalizados": "Personalizados",
  "cadenas": "Cadenas",
  "aros": "Aros",
  "pulseras": "Pulseras",
};

export async function generateStaticParams() {
  return Object.keys(categoryTitles).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Buscamos el título bonito, o usamos el slug en mayúsculas si no existe
  const title = categoryTitles[slug] || slug.replace("-", " ").toUpperCase();

  // FILTRADO DE PRODUCTOS (DEMO):
  // Por ahora mostramos TODOS (return true) para que la página no se vea vacía,
  // ya que tus productos de prueba tienen categorías mezcladas.
  // Cuando tengas los datos reales, cambiar 'true' por: p.category === slug
  const filteredProducts = products.filter((p) => {
    return true; 
  });

  return (
    <main className="min-h-screen bg-white pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-2">Colección</p>
          <h1 className="font-serif text-4xl md:text-5xl text-magnolia-dark">{title}</h1>
          <div className="w-16 h-0.5 bg-magnolia-lilac mx-auto mt-6"></div>
        </div>

        {/* Grilla */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/producto/${product.id}`} className="group cursor-pointer">
              
              {/* Imagen */}
              <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-50 rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
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
        
        {/* Mensaje vacío */}
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <p>Próximamente agregaremos productos a esta colección.</p>
            </div>
        )}

      </div>
    </main>
  );
}