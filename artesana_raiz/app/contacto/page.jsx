"use client"
import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulación de envío de formulario
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
      })

      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        message: "",
      })

      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
        })
      }, 5000)
    }, 1000)
  }

  return (
    <div className="container-custom">
      {/* Logo semitransparente */}
      <div className="flex justify-center mb-8">
        <Image src="/imagenes/logowhite.png" alt="Raíz Artesana" width={200} height={80} className="rounded-full object-cover opacity-70" />
      </div>

      <h1 className="section-title">Contacto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulario */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {formStatus.submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Información de contacto</h2>

          <ul className="space-y-6">
            <li className="flex items-start">
              <Mail className="text-amber-700 mr-3 mt-1" size={20} />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>kevinorosco411@gmail.com</p>
              </div>
            </li>

            <li className="flex items-start">
              <Phone className="text-amber-700 mr-3 mt-1" size={20} />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p>1125066722</p>
              </div>
            </li>

            <li className="flex items-start">
              <MapPin className="text-amber-700 mr-3 mt-1" size={20} />
              <div>
                <h3 className="font-medium">Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 mr-3 mt-1"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
              </svg>
              <div>
                <h3 className="font-medium">WhatsApp</h3>
                <a
                  href="https://wa.me/5491125066722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline"
                >
                  Enviar mensaje
                </a>
              </div>
            </li>

            <li className="flex items-start">
              <Instagram className="text-amber-700 mr-3 mt-1" size={20} />
              <div>
                <h3 className="font-medium">Instagram</h3>
                <a
                  href="https://instagram.com/kevinorosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline"
                >
                  @kevinorosco
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
