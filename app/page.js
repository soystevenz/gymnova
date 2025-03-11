// app/page.js
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  )
}