import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image src="/imagenes/hero_sobre.png" alt="Sobre Raíz Artesana" fill className="object-cover" />
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <h1 className="section-title">Nuestra raíz es el arte hecho a mano</h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed mb-6">
            En Raíz Artesana, creemos en la belleza de lo auténtico. Cada pieza que ofrecemos —ya sean cerámicas,
            juguetes, bolsos o joyas— está creada con pasión, dedicación y el profundo respeto por las tradiciones
            artesanales.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Nuestro propósito es conectar a las personas con objetos que cuentan historias: de manos expertas, de
            materiales nobles, de culturas que laten en cada forma y textura.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Valoramos la sostenibilidad, el comercio justo y el trabajo en comunidad. Cada compra que hacés no solo
            lleva arte a tu hogar, sino que también apoya a artesanos que mantienen vivas sus raíces.
          </p>

          <div className="flex justify-center">
            <Link href="/productos" className="btn-primary">
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
