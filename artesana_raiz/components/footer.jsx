import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navegación */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-amber-300 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-amber-300 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-amber-300 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/kevinorosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-amber-300 transition-colors"
                >
                  <Instagram size={18} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491125066722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-amber-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Buenos+Aires,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-amber-300 transition-colors"
                >
                  <MapPin size={18} className="mr-2" />
                  Buenos Aires, Argentina
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: kevinorosco411@gmail.com</li>
              <li>Teléfono: 1125066722</li>
            </ul>
          </div>

          {/* Métodos de pago y envío */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Métodos de pago</h3>
            <div className="flex space-x-3 mb-6">
              <Image
                src="/imagenes/mercado-pago.png"
                alt="Mercado Pago"
                width={50}
                height={30}
                className="bg-white p-1 rounded"
              />
              <Image
                src="/imagenes/mastercard.png"
                alt="Mastercard"
                width={50}
                height={30}
                className="bg-white p-1 rounded"
              />
              <Image src="/imagenes/visa.png" alt="Visa" width={50} height={30} className="bg-white p-1 rounded" />
            </div>

            <h3 className="text-xl font-semibold mb-4">Métodos de envío</h3>
            <div className="flex space-x-3">
              <Image
                src="/imagenes/correo-argentino.png"
                alt="Correo Argentino"
                width={50}
                height={30}
                className="bg-white p-1 rounded"
              />
              <Image
                src="/imagenes/andreani.png"
                alt="Andreani"
                width={50}
                height={30}
                className="bg-white p-1 rounded"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© 2025 Raíz Artesana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
