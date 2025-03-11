// app/layout.js
import './globals.css'

export const metadata = {
  title: 'GymNova | Software para Gimnasios',
  description: 'Soluciones digitales para gestión de gimnasios: control de membresías, acceso por huella, inventario y más.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}