import Link from "next/link"
import Image from "next/image"

export default function CategoryCard({ title, image, slug }) {
  return (
    <Link href={`/productos?categoria=${slug}`} className="block">
      <div className="card group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-center bg-white">
          <h3 className="font-medium text-xl text-amber-900">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
