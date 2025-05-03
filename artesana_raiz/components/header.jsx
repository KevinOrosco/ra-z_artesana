"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/imagenes/logoblanco.png" alt="Raíz Artesana" width={80} height={80} className="h-8 md:h-14 lg:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-900 hover:text-amber-700 font-medium">
              Inicio
            </Link>
            <Link href="/productos" className="text-amber-900 hover:text-amber-700 font-medium">
              Productos
            </Link>
            <Link href="/sobre-nosotros" className="text-amber-900 hover:text-amber-700 font-medium">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-amber-900 hover:text-amber-700 font-medium">
              Contacto
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Buscar" className="text-amber-900 hover:text-amber-700">
              <Search size={20} />
            </button>
            <button aria-label="Mi cuenta" className="text-amber-900 hover:text-amber-700">
              <User size={20} />
            </button>
            <button aria-label="Carrito de compras" className="text-amber-900 hover:text-amber-700">
              <ShoppingBag size={20} />
            </button>
            <button
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="md:hidden text-amber-900 hover:text-amber-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-3">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/"
                  className="block text-amber-900 hover:text-amber-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="block text-amber-900 hover:text-amber-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="block text-amber-900 hover:text-amber-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block text-amber-900 hover:text-amber-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
