"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    detailedDescription: string
    features: string[]
    applications: string[]
    image: string
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="group perspective-1000 h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div className="relative h-48 overflow-hidden rounded-t-lg bg-white flex items-center justify-center border-b border-gray-200">
            {!imageError ? (
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                style={{ backgroundColor: 'white' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white text-gray-400">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Image not available</p>
                </div>
              </div>
            )}
            <div className="absolute top-3 left-3">
              <Badge className="bg-blue-600 text-white shadow-md">{product.category}</Badge>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-32">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
            <div className="flex-1 overflow-y-auto">
              <p className="text-gray-700 text-sm mb-3">{product.detailedDescription}</p>

              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Applications:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-1">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
