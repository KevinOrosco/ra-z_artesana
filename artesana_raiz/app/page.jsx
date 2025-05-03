import Image from "next/image"
import Link from "next/link"
import CategoryCard from "@/components/category-card"
import FeatureCard from "@/components/feature-card"
import { Truck, HandMetal, HeadsetIcon } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
        <Image
          src="/imagenes/lugar.png"
          alt="Raíz Artesana - Artesanías hechas a mano"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* Logo Section */}
      <section className="container-custom flex justify-center">
      <Image
        src="/imagenes/logowhite.png"
        alt="Raíz Artesana"
        width={200} // asegurate de que ancho y alto sean iguales
        height={200}
        className="my-8 rounded-full object-cover"
      />
      </section>

      {/* Categories Section */}
      <section className="container-custom">
        <h2 className="section-title">Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard title="Juguetes" image="/imagenes/oso.png" slug="juguetes" />
          <CategoryCard title="Joyas" image="/imagenes/joyas.png" slug="joyas" />
          <CategoryCard title="Bolsos" image="/imagenes/bolso.png" slug="bolsos" />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/productos" className="btn-primary">
            Explorar productos
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard icon={<Truck size={36} />} title="Envíos a todo el país" />
          <FeatureCard icon={<HandMetal size={36} />} title="Hecho a mano" />
          <FeatureCard icon={<HeadsetIcon size={36} />} title="Servicio al cliente" />
        </div>
      </section>
    </div>
  )
}
