export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
        {/* Sección de texto */}
        <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Software inteligente para</span>
                <span className="block text-primary">tu gimnasio</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Optimiza la gestión de tu gimnasio con nuestras soluciones digitales: control de membresías, acceso biométrico, inventario y sitios web personalizados.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Solicitar Demo
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Ver funcionalidades
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Imagen completamente pegada al borde derecho */}
        <div className="relative w-full h-96 lg:h-auto">
          <img
            src="/1.jpg"
            alt="GymNova - La evolución digital de tu gimnasio"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
