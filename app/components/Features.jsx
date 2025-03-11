// app/components/Features.jsx
export default function Features() {
    const features = [
      {
        title: "Control de Membresías",
        description: "Gestiona membresías, pagos y renovaciones automáticas con facilidad.",
        icon: "💳"
      },
      {
        title: "Acceso Biométrico",
        description: "Control de acceso mediante huella digital para mayor seguridad.",
        icon: "👆"
      },
      {
        title: "Gestión de Inventario",
        description: "Administra equipos, suplementos y todos los recursos de tu gimnasio.",
        icon: "📦"
      },
      {
        title: "Sitios Web Personalizados",
        description: "Crea tu presencia online con páginas web optimizadas para gimnasios.",
        icon: "🌐"
      }
    ]
  
    return (
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Características</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitas para tu gimnasio
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Soluciones completas para la gestión eficiente de tu negocio fitness.
            </p>
          </div>
  
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }