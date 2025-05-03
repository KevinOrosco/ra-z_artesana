"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ShoppingBag } from "lucide-react"

// Datos de ejemplo para los productos
const productsData = [
  {
    id: 1,
    title: "Principito De Plata Y Double De Oro",
    description: "Principito y rosa trabajado en plata925 con detalles en double de oro. Incluye cadena y estuche",
    guarantee: "30 días",
    price: 40000,
    image: "/imagenes/principito.png",
    category: "joyas",
  },
  {
    id: 2,
    title: "Garaje de Juguete de Madera con Pista",
    description: "Es el juego perfecto para los fanáticos del transporte; este garaje de juguete de madera con piezas de pista separadas los mantendrá entretenidos durante horas.",
    guarantee: "30 días",
    price: 110000,
    image: "/imagenes/garage.png",
    category: "juguetes",
  },
  {
    id: 3,
    title: "Bolso artesanal de madera 'Árbol de la Abundancia'",
    description: "Hermos bolso de madera artesanal, una pieza única que combina elegancia y sostenibilidad. Diseñado especialmente para mujeres innovadoras, este hanbag de la marca Chit destaca por su material externo de madera.",
    guarantee: "30 días",
    price: 165000,
    image: "/imagenes/bolso_arbol.png",
    category: "bolsos",
  },
  {
    id: 4,
    title: "Cuatro Elementos Celta De Plata.",
    description: "Adorno Celta de 4 puntas, trabajado en plata900, 2,5 de diametro, 3.5 mm de altura x 0.1 cm de ancho,",
    guarantee: "30 días",
    price: 33000,
    image: "/imagenes/celta.png",
    category: "joyas",
  },
  {
    id: 5,
    title: "Tienda de Helados de Madera Lolly & Scoop",
    description: "¡Nuestro juguete más querido EVER es nuestro impresionante juego de heladería, completo con conos y obleas y coberturas; nos encanta que pueda jugar con él en cualquier lugar: jardín, cocina, sala de estar o dormitorio!",
    guarantee: "30 días",
    price: 90000,
    image: "/imagenes/helados.png",
    category: "juguetes",
  },
  {
    id: 6,
    title: "Bolso de Piel Bandolera Artesanal Mexicana Cincelado",
    description: "Bienvenid@ a Aoo Piel somos una tienda 100% mexicana, que te ofrece lo mejor en productos y servicios. Nuestros productos son de acabado artesanal, cortados y bordados por manos mexicanas, de piel genuina y de excelente calidad. Bolsos exclusivos con estilo artesanal, elaborados con piel genuina y materiales (bordados y aplicaciones) tipo rústico. Son diseños originales, prácticos e innovadores, que combinan lo tradicional con lo moderno, lo casual con lo formal y siguen las tendencias de la moda. Características Principales: - 100% Piel. - Producto 100% mexicano. - Tejido de alta Calidad. - Producto Artesanal. - Grabado Cincelado. Medidas: Altura del producto 23 cm Ancho del producto 28.5 cm Profundidad del producto 13 cm (El producto se mide a mano, puede haber una diferencia de 1-3 mm)",
    guarantee: "30 días",
    price: 220000,
    image: "/imagenes/bolso_piel.png",
    category: "bolsos",
  },
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    const productId = Number.parseInt(id)
    const foundProduct = productsData.find((p) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
    }

    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="container-custom flex justify-center items-center min-h-[50vh]">
        <p className="text-xl">Cargando producto...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container-custom flex justify-center items-center min-h-[50vh]">
        <p className="text-xl">Producto no encontrado</p>
      </div>
    )
  }

  return (
    <div className="container-custom py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Imagen del producto */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">{product.title}</h1>
          <p className="text-2xl font-bold text-amber-700 mb-6">${product.price.toLocaleString()}</p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-3">Descripción</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <h2 className="text-xl font-semibold mb-3">Garantía</h2>
            <p className="text-gray-700">{product.guarantee}</p>
          </div>

          <button className="btn-primary flex items-center justify-center gap-2 py-3 mt-auto">
            <ShoppingBag size={20} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
