// app/components/Products.jsx
"use client"

import { useState } from 'react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Control de Membresías",
      description: "Sistema completo para gestionar miembros, pagos y renovaciones automáticas.",
      image: "/images/membership.jpg", 
    },
    {
      id: 2,
      name: "Acceso Biométrico",
      description: "Control de acceso seguro mediante huella digital, reconocimiento facial o código QR.",
      image: "/images/biometric.jpg",
    },
    {
      id: 3,
      name: "Gestión de Inventario",
      description: "Controla tu stock de productos y equipamiento deportivo de manera eficiente.",
      image: "/images/inventory.jpg",
    },
    {
      id: 4,
      name: "Sitios Web Personalizados",
      description: "Diseño web responsivo y personalizado para la presencia digital de tu gimnasio.",
      image: "/images/website.jpg",
    }
  ];

  return (
    <div id="products" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Soluciones digitales diseñadas específicamente para gimnasios y centros deportivos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${isHovered ? 'scale-110 blur-sm' : ''}`}
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center p-4 transition-opacity duration-300">
            <p className="text-white text-center font-bold">{product.description}</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-4 bg-white">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      </div>
    </div>
  );
}
