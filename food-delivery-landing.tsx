import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, CreditCard, Truck } from "lucide-react"

export default function FoodDeliveryLanding() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#FFCB45] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#009688]">ObuRes</h1>
          <Button className="bg-[#009688] hover:bg-[#00796b]">Login</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 bg-[#FFCB45]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Traditional Ghanaian food display"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">Authentic Ghanaian Cuisine</h2>
              <p className="text-xl text-black">Delicious local dishes delivered to your doorstep!</p>

              <div className="bg-white rounded-lg p-2 flex items-center shadow-lg">
                <MapPin className="h-5 w-5 text-gray-400 ml-2" />
                <Input
                  placeholder="What's your address?"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="bg-[#009688] hover:bg-[#00796b]">Use current location</Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
                  <Truck className="h-5 w-5 text-[#009688]" />
                  <span className="font-medium">Pay on Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
                  <CreditCard className="h-5 w-5 text-[#009688]" />
                  <span className="font-medium">MTN Mobile Money</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </main>

      {/* Ghanaian Dishes Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ghanaian Local Dishes</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Jollof Rice with Chicken", price: "GH₵ 35.00", image: "/placeholder.svg?height=200&width=300" },
              { name: "Waakye with Fish", price: "GH₵ 30.00", image: "/placeholder.svg?height=200&width=300" },
              { name: "Banku with Tilapia", price: "GH₵ 45.00", image: "/placeholder.svg?height=200&width=300" },
              { name: "Fufu with Light Soup", price: "GH₵ 40.00", image: "/placeholder.svg?height=200&width=300" },
              { name: "Kenkey with Fried Fish", price: "GH₵ 25.00", image: "/placeholder.svg?height=200&width=300" },
              { name: "Tuo Zaafi", price: "GH₵ 35.00", image: "/placeholder.svg?height=200&width=300" },
            ].map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{dish.name}</h3>
                  <p className="text-[#009688] font-bold text-xl mt-2">{dish.price}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">30-45 min delivery</span>
                    <Button className="bg-[#009688] hover:bg-[#00796b]">Order Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#009688] hover:bg-[#00796b] px-8 py-6 text-lg">View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Easy Payment Options</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Truck className="h-16 w-16 text-[#009688] mb-4" />
              <h3 className="text-xl font-bold mb-2">Pay on Delivery</h3>
              <p className="text-gray-600">
                Pay with cash when your food arrives at your doorstep. No advance payment needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <CreditCard className="h-16 w-16 text-[#009688] mb-4" />
              <h3 className="text-xl font-bold mb-2">MTN Mobile Money</h3>
              <p className="text-gray-600">
                Quick and secure payments using your MTN Mobile Money account. Instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UMAT Esikado Campus</h3>
              <p>University of Mines and Technology</p>
              <p>Tarkwa, Ghana</p>
              <p>Email: info@umat.edu.gh</p>
              <p>Phone: +233 123 456 789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Download Our App</h3>
              <p className="mb-4">Get the best food delivery experience on our mobile app</p>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                  App Store
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>© {new Date().getFullYear()} ObuRes - UMAT Esikado Campus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

