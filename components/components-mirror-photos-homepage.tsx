'use client'

import { useState } from 'react'
import { Mail, Globe, X, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

export function MirrorPhotosHomepageComponent() {
  const [email, setEmail] = useState('')
  const [showAboutUs, setShowAboutUs] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscriptionStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscriptionStatus('success')
        setEmail('')
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      console.error('Error subscribing:', error)
      setSubscriptionStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mirror_logo-1uZ3MWxPGfuzc5iHvwO9lJd2D3JILA.png"
              alt="Mirror Photos Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-100">MirrorPhotos</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button 
                  className="text-gray-300 hover:text-pink-400"
                  onClick={() => setShowAboutUs(true)}
                >
                  About Us
                </button>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-gray-300 hover:text-pink-400">Contact Us</button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact MirrorPhotos</DialogTitle>
                      <DialogDescription>
                        <div className="flex flex-col space-y-4 mt-4">
                          <div className="flex items-center">
                            <Globe className="h-6 w-6 text-pink-400 mr-2" />
                            <span>Visit us at: <a href="http://www.mirrorphotos.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.mirrorphotos.io</a></span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-6 w-6 text-pink-400 mr-2" />
                            <span>Email us: <a href="mailto:mirror.photos@gmail.com" className="text-blue-400 hover:underline">mirror.photos@gmail.com</a></span>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li><a href="#projects" className="text-gray-300 hover:text-pink-400">Projects</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Us Full Page */}
      {showAboutUs && (
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowAboutUs(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">About MirrorPhotos</h2>
            <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
              <p className="text-gray-300">
                We are a team of passionate Software Engineers, driven by the desire to create innovative projects that harness the power of Artificial Intelligence and showcase our artistic skills. Our diverse experience spans multiple software companies, educational initiatives, and application development.
              </p>
              <p className="text-gray-300">
                At MirrorPhotos, we believe in the transformative power of technology and creativity. Our mission is to bridge the gap between cutting-edge AI and practical, user-friendly applications that enhance people&apos;s lives and businesses.
              </p>
              <h3 className="text-3xl font-semibold text-pink-400 mt-12">Our Expertise</h3>
              <ul className="list-disc pl-5 space-y-4 text-gray-300">
                <li>Providing state-of-the-art services in Advertisement and Promotions, leveraging AI to create impactful campaigns for businesses.</li>
                <li>Educating the next generation in the field of AI, preparing kids for a future where artificial intelligence plays a crucial role.</li>
                <li>Developing intuitive web applications for fitness tracking, helping individuals achieve their health and wellness goals.</li>
              </ul>
              <p className="text-gray-300">
                Our team&apos;s unique blend of technical expertise and creative vision allows us to tackle complex challenges and turn them into elegant, user-centric solutions. We&apos;re constantly pushing the boundaries of what&apos;s possible, always with an eye towards creating meaningful impact in the world.
              </p>
              <p className="text-gray-300">
                Join us on our journey as we continue to explore, innovate, and shape the future of technology and art. At MirrorPhotos, we&apos;re not just reflecting the present – we&apos;re crafting the future.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-100">Welcome to Mirror Photos</h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mirror Photos LLC is a company working in the field of Education, Digital art and AI experiments
          </p>
        </div>
      </section>

      {/* Projects and Blog Posts */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Projects &amp; Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((item, index) => (
              index === 0 ? (
                <div key={1} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-14%20at%205.22.07%E2%80%AFPM-zXrAmXsgCXSc07NbZ5uOyne2ebzViF.png"
                    alt="AI Art Bootcamp"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">AI Art Bootcamp</h3>
                    <p className="text-gray-300 mb-4">
                      AI Bootcamp designed for kids aged 9-15 that teaches storytelling using Generative AI models like Text to Image, Text to Video. We have successfully conducted 2 Bootcamps. Please contact us if you are interested to schedule a bootcamp. Check out the amazing videos created by our students!
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="secondary">Read More</Button>
                      <Button variant="secondary" asChild>
                        <a href="https://youtu.be/iKlBodLzerU?feature=shared" target="_blank" rel="noopener noreferrer">Watch videos created by our students</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : index === 1 ? (
                <div key={2} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zideo-dESR0Iz7qsiIQJZN2bCe4DF3NJ01Ui.png"
                    alt="Zideo - AI Video Generator"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Zideo - AI Video Generator</h3>
                    <p className="text-gray-300 mb-4">
                      Cast yourself in a personalized one-minute short film where you are the star. Create a fun, AI-generated video that makes you look stunning, perfect for sharing with friends and family.
                    </p>
                    <Button variant="secondary" asChild>
                      <a href="https://zideo.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Zideo</a>
                    </Button>
                  </div>
                </div>
              ) : index === 2 ? (
                <div key={3} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-14%20at%205.57.05%E2%80%AFPM-zEJRreoijqr2GXL4CRGhWtHwbV0Tbr.png"
                    alt="AuraScore: Web application for tracking your fitness goals"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">AuraScore: Web application for tracking your fitness goals</h3>
                    <p className="text-gray-300 mb-4">
                      Tracking your goals is the best possible way to achieve it. Use our application for tracking your fitness goals and journal about your accomplishments and gratitude journaling. Visit the application at www.aurascore.app
                    </p>
                    <Button variant="secondary">Visit AuraScore</Button>
                  </div>
                </div>
              ) : index === 3 ? (
                <div key={4} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-14%20at%205.25.18%E2%80%AFPM-wrTSXSDHOxaXsnoTqnZxqoq3SgwUsL.png"
                    alt="Content creation for teaching mythological stories to kids"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Content creation for teaching mythological stories to kids</h3>
                    <p className="text-gray-300 mb-4">
                      We at Mirror Photos create mythological, historical animated stories, so that our young generation learns about our ancient rich history and culture.
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="secondary">Learn More</Button>
                      <Button variant="secondary" asChild>
                        <a href="https://youtu.be/DkTSN-CCBI4?feature=shared" target="_blank" rel="noopener noreferrer">Watch Video</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={5} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-14%20at%205.25.59%E2%80%AFPM-b83hxfZURr1K9D1YwZHO9qoJIRzBf9.png"
                    alt="Content Creation for Business promotions"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Content Creation for Business promotions</h3>
                    <p className="text-gray-300 mb-4">
                      We help small and medium sized businesses to thrive and grow by providing beautiful promotional content that they can use in their social media and website to get traction among customers.
                    </p>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
            <p className="text-black mb-6">Stay updated with our latest projects and AI experiments!</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow text-black"
              />
              <Button type="submit" variant="secondary" disabled={subscriptionStatus === 'loading'}>
                {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="mt-4 text-green-600">Thank you for subscribing!</p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="mt-4 text-red-600">An error occurred. Please try again.</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer with Social Media Links */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 MirrorPhotos. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/mirrorphotos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.facebook.com/mirrorphotos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.twitter.com/mirrorphotos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}