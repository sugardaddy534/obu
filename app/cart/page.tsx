"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Minus, Plus, ArrowLeft, Trash2 } from 'lucide-react'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("CASH_ON_DELIVERY")
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckout = async () => {
    if (checkoutStep === 1) {
      setCheckoutStep(2)
    } else {
      try {
        // Create order items from cart items
        const orderItems = cartItems.map(item => ({
          itemId: item.id.toString(),
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity
        }))

        // Create order object
        const order = {
          customerName: formData.name,
          customerPhone: formData.phone,
          customerAddress: formData.address,
          notes: formData.notes,
          items: orderItems,
          subtotal: totalPrice,
          deliveryFee: 10.0,
          totalAmount: totalPrice + 10.0,
          paymentMethod: paymentMethod,
          paymentStatus: paymentMethod === "CASH_ON_DELIVERY" ? "PENDING" : "PAID"
        }

        // Send order to backend
        const response = await fetch('http://localhost:8080/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        })

        if (response.ok) {
          setOrderPlaced(true)
          // Clear cart after successful order
          setTimeout(() => {
            clearCart()
          }, 2000)
        } else {
          console.error('Failed to place order')
          alert('Failed to place order. Please try again.')
        }
      } catch (error) {
        console.error('Error placing order:', error)
        alert('Error placing order. Please try again.')
      }
    }
  }

  if (orderPlaced) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center py-16 space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you for your order. We've received your request and will process it shortly. You will receive a
            confirmation via SMS.
          </p>
          <div className="pt-6">
            <Link href="/">
              <Button className="bg-[#009688] hover:bg-[#00796b]">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-[#009688] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Link>
        <h1 className="text-3xl font-bold text-center flex-1">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious Ghanaian dishes to get started</p>
          <Link href="/menu">
            <Button className="bg-[#009688] hover:bg-[#00796b]">Browse Menu</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-4 flex items-center">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=80&width=80"
                          }}
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-[#009688] font-semibold">GH₵ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {checkoutStep === 2 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                      <Input id="notes" name="notes" value={formData.notes} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>GH₵ {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>GH₵ 10.00</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>GH₵ {(totalPrice + 10).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {checkoutStep === 2 && (
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="CASH_ON_DELIVERY" id="cash" />
                        <Label htmlFor="cash">Pay on Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="MOBILE_MONEY" id="momo" />
                        <Label htmlFor="momo">MTN Mobile Money</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <Button
                  className="w-full mt-6 bg-[#009688] hover:bg-[#00796b]"
                  onClick={handleCheckout}
                  disabled={checkoutStep === 2 && (!formData.name || !formData.phone || !formData.address)}
                >
                  {checkoutStep === 1 ? "Proceed to Checkout" : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

