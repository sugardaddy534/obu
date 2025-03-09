"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Using placeholders for the food images
const images = [
  "/placeholder.svg?height=400&width=600&text=Jollof+Rice",
  "/placeholder.svg?height=400&width=600&text=Waakye",
  "/placeholder.svg?height=400&width=600&text=Banku",
  "/placeholder.svg?height=400&width=600&text=Fufu",
  "/placeholder.svg?height=400&width=600&text=Kenkey",
  "/placeholder.svg?height=400&width=600&text=Tuo+Zaafi",
]

export default function FoodSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Ghanaian dish ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

