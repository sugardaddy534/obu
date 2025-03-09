import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/about" className="text-[#009688] font-medium hover:underline">
              About
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or feedback? We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} />
              </div>
              <Button className="w-full bg-[#009688] hover:bg-[#00796b]">Send Message</Button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#009688] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">UMAT Esikado Campus, Tarkwa, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#009688] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+233 123 456 789</p>
                    <p className="text-gray-600">+233 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#009688] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@obures.com</p>
                    <p className="text-gray-600">support@obures.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
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

