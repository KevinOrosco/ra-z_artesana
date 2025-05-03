import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ id, title, price, image }) {
  return (
    <Link href={`/productos/${id}`} className="block">
      <div className="card group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-amber-700 font-bold">${price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}
