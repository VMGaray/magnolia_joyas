import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { MENU_ITEMS } from "@/data/menuData";

export default function Navbar() {
  return (
    <header className="w-full bg-white pt-6 pb-0 border-b border-gray-100 relative z-50">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* --- BARRA SUPERIOR (Flor - Logo Texto - Carrito) --- */}
        <div className="w-full relative flex justify-center items-center mb-2 h-16">
          
          {/* 1. FLOR (Izquierda) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Image 
              src="/logo-flor.jpg"  // <--- CHEQUEÁ SI ES .JPG O .PNG
              alt="Magnolia Flor"
              width={80}
              height={80}
              // Ajustamos tamaño: 40px en celular (w-10), 64px en compu (md:w-16)
              className="w-10 md:w-16 object-contain opacity-80" 
            />
          </div>

          {/* 2. LOGO TEXTO (Centro - El que te gustaba) */}
          <Link href="/" className="text-center group flex flex-col items-center">
            <h1 className="font-serif text-3xl md:text-5xl tracking-widest text-magnolia-dark">
              MAGNOLIA
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 group-hover:text-magnolia-lilac transition-colors mt-1">
              Joyas
            </span>
          </Link>

          {/* 3. CARRITO (Derecha) */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 hover:text-magnolia-lilac transition-colors">
            <ShoppingCart size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* --- MENÚ DE NAVEGACIÓN --- */}
        <nav className="relative w-full">
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-sans text-gray-600 font-medium tracking-wide">
            
            {MENU_ITEMS.map((category) => (
              <li key={category.title} className="group py-4">
                <Link 
                  href={category.href} 
                  className="hover:text-magnolia-lilac transition-colors uppercase text-xs md:text-sm flex items-center gap-1"
                >
                  {category.title}
                  {category.sections && category.sections.length > 0 && (
                      <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform"/>
                  )}
                </Link>

                {/* MEGA MENU */}
                {category.sections && category.sections.length > 0 && (
                  <div className="absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="container mx-auto px-8 py-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {category.sections.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-serif text-magnolia-dark text-lg mb-3 border-b border-gray-100 pb-1">
                              {section.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link 
                                    href={item.href}
                                    className="text-gray-500 hover:text-magnolia-lilac text-xs transition-colors block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}