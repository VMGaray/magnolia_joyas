import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Anillo Bloom Amatista",
    price: "$95.000",
    image: "/prod-anillo.jpg",
    rating: 5,
    description: "Plata 925 con piedra natural Amatista facetada. Un toque de color vibrante y elegancia atemporal.",
  },
  {
    id: 2,
    name: "Brazalete Starlight Oro",
    price: "$180.000",
    image: "/prod-pulsera.jpg",
    rating: 5,
    description: "Oro 18kl. Diseño rígido con detalles de cubic zirconia incrustados que capturan la luz.",
  },
  {
    id: 3,
    name: "Collar Corazón Rose",
    price: "$120.000",
    image: "/prod-collar.jpg",
    rating: 4,
    description: "Delicado collar enchapado en oro rosa con dije de corazón minimalista. Ideal para regalar.",
  },
  {
    id: 4,
    name: "Aros Ocean Drop",
    price: "$110.000",
    image: "/prod-aros.jpg",
    rating: 5,
    description: "Plata 925 con topacio azul colgante. Movimiento y brillo inspirados en el océano.",
  },
  {
    id: 5,
    name: "Conjunto Aurora Boreal",
    price: "$210.000",
    image: "/prod-conjunto.jpg",
    rating: 5,
    description: "Set exclusivo de gargantilla y aros en Plata 925 con cristales Swarovski tornasol.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <h2 className="font-serif text-3xl md:text-4xl text-magnolia-dark mb-12 text-left">
          Piezas Destacadas
        </h2>

        {/* Grilla de 5 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group relative h-[450px] w-full [perspective:1000px] cursor-pointer">
              
              {/* Tarjeta Giratoria */}
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-lg rounded-sm">
                
                {/* --- CARA FRONTAL --- */}
                <div className="absolute inset-0 h-full w-full bg-white [backface-visibility:hidden] flex flex-col">
                  
                  {/* Imagen */}
                  <div className="relative flex-grow w-full overflow-hidden bg-gray-50 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                    <span className="absolute top-2 left-2 bg-white text-[10px] uppercase tracking-widest px-2 py-1 text-gray-500 shadow-sm">
                      New
                    </span>
                  </div>

                  {/* Info Frontal */}
                  <div className="text-center space-y-2 pb-4 px-2 h-[100px]">
                    <div className="flex justify-center gap-1 text-yellow-500/50">
                       {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}/>
                       ))}
                    </div>
                    <h3 className="font-serif text-gray-800 text-lg leading-tight">
                      {product.name}
                    </h3>
                    <p className="font-sans text-gray-500 font-light tracking-wide">
                      {product.price}
                    </p>
                  </div>
                </div>

                {/* --- CARA TRASERA --- */}
                <div className="absolute inset-0 h-full w-full bg-magnolia-light border border-magnolia-lilac/30 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  
                  <h3 className="font-serif text-magnolia-dark text-xl mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-8 font-light">
                    {product.description}
                  </p>

                  <button className="flex items-center gap-2 bg-magnolia-dark text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-magnolia-lilac transition-colors shadow-md">
                    <ShoppingBag size={14} />
                    Ver Detalle
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}