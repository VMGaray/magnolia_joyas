"use client";

import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 py-12">
      
      <div className="bg-white w-full max-w-md p-8 rounded-sm shadow-sm border border-gray-100">
        
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-magnolia-dark mb-2">Crear Cuenta</h1>
          <p className="text-sm text-gray-500 font-sans">Sumate a Magnolia y disfrutá beneficios exclusivos</p>
        </div>

        <form className="space-y-5">
          
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nombre</label>
                <div className="relative">
                    <input type="text" className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac" />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
             </div>
             <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Apellido</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac" />
             </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
            <div className="relative">
                <input type="email" className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Contraseña</label>
            <div className="relative">
                <input type="password" className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Repetir Contraseña</label>
            <div className="relative">
                <input type="password" className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-magnolia-lilac" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <button className="w-full bg-magnolia-dark text-white py-3 uppercase tracking-widest text-sm hover:bg-magnolia-lilac transition-colors font-bold flex items-center justify-center gap-2 mt-4">
            Registrarme
            <ArrowRight size={16} />
          </button>

        </form>

        <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
                ¿Ya tenés cuenta?{" "}
                <Link href="/ingresar" className="text-magnolia-lilac font-bold hover:underline">
                    Ingresar
                </Link>
            </p>
        </div>

      </div>

    </main>
  );
}