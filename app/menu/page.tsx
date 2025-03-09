"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"
import { Search, ArrowLeft, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Menu categories and items
const categories = [
  { id: "all", name: "All Dishes" },
  { id: "rice", name: "Rice Dishes" },
  { id: "soups", name: "Soups & Stews" },
  { id: "street", name: "Street Food" },
  { id: "drinks", name: "Drinks" },
]

const menuItems = [
  {
    id: 1,
    name: "Jollof Rice with Chicken",
    price: 35.0,
    category: "rice",
    image: "/placeholder.svg?height=200&width=300&text=Jollof+Rice",
  },
  {
    id: 2,
    name: "Waakye with Fish",
    price: 30.0,
    category: "rice",
    image: "/placeholder.svg?height=200&width=300&text=Waakye",
  },
  {
    id: 3,
    name: "Banku with Tilapia",
    price: 45.0,
    category: "soups",
    image: "/placeholder.svg?height=200&width=300&text=Banku",
  },
  {
    id: 4,
    name: "Fufu with Light Soup",
    price: 40.0,
    category: "soups",
    image: "/placeholder.svg?height=200&width=300&text=Fufu",
  },
  {
    id: 5,
    name: "Kenkey with Fried Fish",
    price: 25.0,
    category: "street",
    image: "/placeholder.svg?height=200&width=300&text=Kenkey",
  },
  {
    id: 6,
    name: "Tuo Zaafi",
    price: 35.0,
    category: "soups",
    image: "/placeholder.svg?height=200&width=300&text=Tuo+Zaafi",
  },
  {
    id: 7,
    name: "Red Red (Beans Stew)",
    price: 28.0,
    category: "street",
    image: "/placeholder.svg?height=200&width=300&text=Red+Red",
  },
  {
    id: 8,
    name: "Kelewele",
    price: 15.0,
    category: "street",
    image: "/placeholder.svg?height=200&width=300&text=Kelewele",
  },
  {
    id: 9,
    name: "Kontomire Stew with Yam",
    price: 32.0,
    category: "soups",
    image: "/placeholder.svg?height=200&width=300&text=Kontomire",
  },
  {
    id: 10,
    name: "Fried Rice with Chicken",
    price: 38.0,
    category: "rice",
    image: "/placeholder.svg?height=200&width=300&text=Fried+Rice",
  },
  {
    id: 11,
    name: "Sobolo Drink",
    price: 10.0,
    category: "drinks",
    image: "/placeholder.svg?height=200&width=300&text=Sobolo",
  },
  {
    id: 12,
    name: "Palm Wine",
    price: 12.0,
    category: "drinks",
    image: "/placeholder.svg?height=200&width=300&text=Palm+Wine",
  },
]

export default function MenuPage() {
  const { cartItems, addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Filter menu items based on search query and active category
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FFCB45] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-[#009688]">
            ObuRes
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[#009688] font-medium hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-[#009688] font-medium hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-[#009688] font-medium hover:underline">
              Contact
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-[#009688]" />
              {totalItems > 0 && <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">{totalItems}</Badge>}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-[#009688] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-center flex-1">Our Menu</h1>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for dishes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Menu Items */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=200&width=300"
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-[#009688] font-bold text-xl mt-2">GH₵ {item.price.toFixed(2)}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">30-45 min delivery</span>
                    <Button
                      className="bg-[#009688] hover:bg-[#00796b]"
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          quantity: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">No dishes found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

