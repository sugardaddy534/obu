import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FFCB45] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-[#009688]">
            ObuRes
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[#009688] font-medium hover:underline">
              Home
            </Link>
            <Link href="/menu" className="text-[#009688] font-medium hover:underline">
              Menu
            </Link>
            <Link href="/contact" className="text-[#009688] font-medium hover:underline">
              Contact
            </Link>
            <Link href="/cart">
              <Button variant="outline" className="border-[#009688] text-[#009688]">
                Cart
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ObuRes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bringing authentic Ghanaian cuisine to UMAT Esikado Campus and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ObuRes was founded in 2023 by a group of UMAT students who were passionate about Ghanaian cuisine and
              wanted to make it more accessible to the campus community.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small delivery service from a shared kitchen has now grown into a beloved food delivery
              platform serving the entire Esikado Campus and surrounding areas.
            </p>
            <p className="text-gray-600">
              Our mission is to celebrate Ghana's rich culinary heritage while providing convenient, affordable, and
              delicious meals to our customers.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=ObuRes+Team"
              alt="ObuRes team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose ObuRes?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFCB45] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#009688]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Authentic Flavors</h3>
              <p className="text-gray-600">
                We use traditional recipes and locally sourced ingredients to ensure authentic Ghanaian flavors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFCB45] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#009688]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Our dedicated delivery team ensures your food arrives hot and fresh within 45 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFCB45] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#009688]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Flexible Payment</h3>
              <p className="text-gray-600">Choose between Pay on Delivery or MTN Mobile Money for your convenience.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to try our delicious dishes?</h2>
          <Link href="/menu">
            <Button className="bg-[#009688] hover:bg-[#00796b] px-8 py-6 text-lg">View Our Menu</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
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
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:underline">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:underline">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
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

