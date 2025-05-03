"use client"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/product-card"
import { ChevronDown } from "lucide-react"

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

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("categoria")

  const [categoryDropdown, setCategoryDropdown] = useState(false)
  const [priceDropdown, setPriceDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "todos")
  const [sortByPrice, setSortByPrice] = useState("default")

  const toggleCategoryDropdown = () => setCategoryDropdown(!categoryDropdown)
  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setCategoryDropdown(false)
  }

  const handlePriceSort = (sort) => {
    setSortByPrice(sort)
    setPriceDropdown(false)
  }

  // Filtrar y ordenar productos
  let filteredProducts = [...productsData]

  if (selectedCategory !== "todos") {
    filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory)
  }

  if (sortByPrice === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortByPrice === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="container-custom">
      <h1 className="section-title">Productos</h1>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <div className="relative">
        <button
          className="flex items-center justify-between w-full md:w-52 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-amber-50 transition"
          onClick={toggleCategoryDropdown}
        >

            <span>
              {selectedCategory === "todos"
                ? "Todas las categorías"
                : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </span>
            <ChevronDown size={16} />
          </button>

          {categoryDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
                  onClick={() => handleCategorySelect("todos")}
                >
                  Todas las categorías
                </li>
                <li
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
                  onClick={() => handleCategorySelect("juguetes")}
                >
                  Juguetes
                </li>
                <li
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
                  onClick={() => handleCategorySelect("joyas")}
                >
                  Joyas
                </li>
                <li
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
                  onClick={() => handleCategorySelect("bolsos")}
                >
                  Bolsos
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center justify-between w-full md:w-52 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-amber-50 transition"
            onClick={togglePriceDropdown}
          >
            <span>
              {sortByPrice === "default"
                ? "Ordenar por precio"
                : sortByPrice === "asc"
                  ? "Precio: menor a mayor"
                  : "Precio: mayor a menor"}
            </span>
            <ChevronDown size={16} />
          </button>

          {priceDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer" onClick={() => handlePriceSort("default")}>
                  Predeterminado
                </li>
                <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer" onClick={() => handlePriceSort("asc")}>
                  Precio: menor a mayor
                </li>
                <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer" onClick={() => handlePriceSort("desc")}>
                  Precio: mayor a menor
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg">No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
