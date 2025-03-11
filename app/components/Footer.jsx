// app/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-dark">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <h2 className="text-2xl font-bold text-white">GymNova</h2>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-base text-gray-400 md:text-right">
                &copy; {new Date().getFullYear()} GymNova. Todos los derechos reservados.
              </p>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>Software inteligente para la gestión completa de gimnasios</p>
          </div>
        </div>
      </footer>
    )
  }