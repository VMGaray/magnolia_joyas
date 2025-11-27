import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Cadenas",
    href: "/categoria/plata-925/cadenas",
    image: "/cat-cadenas.jpg",
    color: "bg-[#C6D8C8]", // Verde salvia suave
  },
  {
    title: "Aros",
    href: "/categoria/oro-18kl/aros", // Ejemplo link
    image: "/cat-aros.jpg",
    color: "bg-[#D8C8C8]", // Rosa viejo suave
  },
  {
    title: "Pulseras",
    href: "/categoria/plata-925/pulseras",
    image: "/cat-pulseras.jpg",
    color: "bg-[#C8D1D8]", // Azul grisáceo suave
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Título de la sección */}
        <h2 className="font-serif text-3xl md:text-4xl text-magnolia-dark mb-10 text-left">
          Comprar por Categoría
        </h2>

        {/* Grilla de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.title} 
              href={cat.href}
              className="group block relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Contenedor Imagen (Cuadrado o rectangular) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Franja de color con Texto */}
              <div className={`${cat.color} py-4 text-center`}>
                <span className="font-serif text-white text-xl tracking-wide">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}