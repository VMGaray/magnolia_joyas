"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      {/* Tarjeta de Login */}
      <div className="bg-white w-full max-w-md p-8 rounded-sm shadow-sm border border-gray-100">
        
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-magnolia-dark mb-2">Bienvenida</h1>
          <p className="text-sm text-gray-500 font-sans">Ingresá a tu cuenta para ver tus pedidos</p>
        </div>

        <form className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
            <div className="relative">
                <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac transition-colors"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-wider text-gray-500">Contraseña</label>
                <Link href="#" className="text-xs text-magnolia-lilac hover:underline">¿Olvidaste tu clave?</Link>
            </div>
            <div className="relative">
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac transition-colors"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Botón Ingresar */}
          <button className="w-full bg-magnolia-dark text-white py-3 uppercase tracking-widest text-sm hover:bg-magnolia-lilac transition-colors font-bold flex items-center justify-center gap-2">
            Ingresar
            <ArrowRight size={16} />
          </button>

        </form>

        {/* Separador */}
        <div className="my-8 flex items-center gap-4">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 uppercase">O</span>
            <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Link a Registro */}
        <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">¿Todavía no tenés cuenta?</p>
            <Link 
                href="/registro" 
                className="block w-full border border-magnolia-dark text-magnolia-dark py-3 uppercase tracking-widest text-xs hover:bg-magnolia-dark hover:text-white transition-colors"
            >
                Crear Cuenta
            </Link>
        </div>

      </div>
      
      <Link href="/" className="mt-8 text-sm text-gray-400 hover:text-magnolia-dark transition-colors">
        ← Volver a la tienda
      </Link>

    </main>
  );
}