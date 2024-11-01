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

export default function Component() {
  const [email, setEmail] = useState('')
  const [showAboutUs, setShowAboutUs] = useState(false)
  const [showAIArtBootcamp, setShowAIArtBootcamp] = useState(false)
  const [showOilLeakDetection, setShowOilLeakDetection] = useState(false)
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
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
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
            <ul className="flex flex-wrap justify-center sm:space-x-4">
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
                            <span>Email us: <a href="mailto:hello@mirror.photos" className="text-blue-400 hover:underline">hello@mirror.photos</a></span>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
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

      {/* AI Art Bootcamp Full Page */}
      {showAIArtBootcamp && (
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowAIArtBootcamp(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">AI Animation classes</h2>
            <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
              <h3 className="text-3xl font-semibold text-pink-400">Preparing ourselves for the Intelligence Age</h3>
              <p className="text-gray-300">
                Are we ready for a future where superintelligent AI could emerge in the next few thousand days?
              </p>
              <p className="text-gray-300">
                As a software engineer and parent of a 4-year-old who just started preschool, I find myself grappling with this question. Sam Altman, CEO and co-founder of OpenAI, recently discussed the upcoming Intelligence Age, suggesting that traditional jobs we take for granted might be automated sooner than we think.
              </p>
              <h4 className="text-2xl font-semibold text-pink-400 mt-8">The Accelerating Rate of Change</h4>
              <p className="text-gray-300">
                We've always adapted to new tools and programming languages, but the pace is now unprecedented. If you believe AI is just hype, consider this: animation projects that took me a weekend 10 years ago can now be accomplished in mere hours. The tools are evolving rapidly, and so must we.
              </p>
              <h4 className="text-2xl font-semibold text-pink-400 mt-8">Teaching to Adapt</h4>
              <p className="text-gray-300">
                So, how can we prepare ourselves for a future dominated by AI?
              </p>
              <h5 className="text-xl font-semibold text-pink-400 mt-6">Embrace Broad Skill Sets Over Early Specialization</h5>
              <p className="text-gray-300">
                Instead of pushing for early specialization, let's focus on foundational skills:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Sports Example: Learning to run is more beneficial early on than specializing in cricket or baseball.</li>
                <li>Arts Example: Exposure to theater—which includes scriptwriting, music, and dance—can be more enriching than focusing solely on piano.</li>
              </ul>
              <h5 className="text-xl font-semibold text-pink-400 mt-6">Animation as a Foundational Skill</h5>
              <p className="text-gray-300">
                Animation is emerging as a critical base layer for skill development. Creating a 30-second animation involves:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Scriptwriting</li>
                <li>Imagery and Visual Arts</li>
                <li>Video Production</li>
                <li>Audio Editing</li>
              </ul>
              <p className="text-gray-300">
                This multidisciplinary approach nurtures creativity, technical skills, and problem-solving.
              </p>
              <h4 className="text-2xl font-semibold text-pink-400 mt-8">Join Our Extended AI Animation Program</h4>
              <p className="text-gray-300">
                We're excited to expand this program, giving kids more time to delve deeper into:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Text-to-Image</li>
                <li>Text-to-Music</li>
                <li>Text-to-Video</li>
                <li>Text-to-3D</li>
              </ul>
              <h4 className="text-2xl font-semibold text-pink-400 mt-8">Interested in Empowering the Next Generation?</h4>
              <p className="text-gray-300">
                If you're passionate about Learning AI animation:
              </p>
              <div className="mt-4">
                <Button asChild variant="secondary">
                  <a href="https://forms.gle/UnWUjobbTe5y4wCM7" target="_blank" rel="noopener noreferrer">
                    👉 Fill Out This Form to Sign Up
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Oil Leak Detection Full Page */}
      {showOilLeakDetection && (
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-16">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowOilLeakDetection(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">Detecting Oil Leaks with AI</h2>
            <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
              <h3 className="text-3xl font-semibold text-pink-400">Overcoming Data Scarcity with Generative Models</h3>
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-07-15_20-16-08_2278-7PweZN2mybiaAjbEGBa4LWWtYCOB6Z.png"
                alt="Oil pump jack with visible oil leak in a field"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />

              <h4 className="text-2xl font-semibold text-pink-400">Introduction</h4>
              <p className="text-gray-300">
                Oilfield services companies are some of the largest employers in Houston, and detecting oil leaks is a problem that many of these companies face. However, traditional methods of building AI models for this purpose are limited by the scarcity of real-world data. Oil spills are rare, and images are often proprietary or unavailable in the public domain. Even stock photo websites primarily provide AI-generated content, making it difficult to build robust datasets.
              </p>

              <p className="text-gray-300">
                Our goal was to build an AI model that classifies whether an image contains an oil leak or not. Tackling this problem was only made possible through recent advances in generative AI. In this blog, we'll walk through how we:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Used Stable Diffusion to generate onshore oil rig images.</li>
                <li>Manually inpainted oil spills to create synthetic datasets.</li>
                <li>Evaluated multiple platforms (Roboflow, OpenAI's fine-tuning API, and Azure Custom Vision) to find the best solution for our needs.</li>
                <li>Trained and tested a classifier that accurately predicts oil leaks from images.</li>
              </ol>

              <h4 className="text-2xl font-semibold text-pink-400">Generating Oil Rig Images with Stable Diffusion</h4>
              <p className="text-gray-300">
                To start, we needed realistic images of oil rigs, but generating both an oil rig and a visible oil spill in a single pass proved difficult. Therefore, we first focused on creating base  images of onshore oil rigs. This  was done using Stable Diffusion through the automatic1111 webUI. Crafting the right prompt was critical to ensure the images reflected West Texas-style rod pumps and not offshore rigs. Below is an example of one of our prompts:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Prompt: "onshore oil rig with rod pumps, desert environment, sunrise lighting"</li>
                <li>Negative Prompt: "offshore rig, ocean, water"</li>
              </ul>

              <p className="text-gray-300">
                After generating 20 base images, we proceeded to manually simulate oil spills on these rigs using inpainting techniques.
              </p>

              <h4 className="text-2xl font-semibold text-pink-400">Inpainting Oil Leaks for Synthetic Dataset Creation</h4>
              <p className="text-gray-300">
                Since oil spills are not random, we used domain knowledge to guide where the leaks should appear. Typically, oil leaks occur around boreholes, valves, and pipe junctions. We:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Manually painted leak-prone areas on each image (usually around the borehole).</li>
                <li>Guessed how the oil would flow and spread from the source.</li>
                <li>Generated 20 variations per base image, resulting in a dataset of 400 synthetic images.</li>
              </ol>

              <p className="text-gray-300">
                Some images intentionally resembled water spills to help train the model to differentiate between oil and other liquids. These non-leak images were kept as negative samples for training purposes.
              </p>

              <h4 className="text-2xl font-semibold text-pink-400">Choosing the Right Platform: Roboflow, OpenAI, or Azure Custom Vision</h4>
              <p className="text-gray-300">
                Depending on the problem, different platforms are available to build image classifiers. If you want to identify specific regions of an image containing the leak, tools like Roboflow or object detection models (e.g., YOLO) are ideal. Additionally, OpenAI's fine-tuning API could be used to fine-tune pre-trained models for this task.
              </p>

              <p className="text-gray-300">
                Since our primary goal was to detect the presence of oil leaks (not their exact location), we opted for Azure Custom Vision, which offered a simpler, binary classification solution.
              </p>

              <h4 className="text-2xl font-semibold text-pink-400">Training the Classifier on Azure Custom Vision</h4>
              <p className="text-gray-300">
                Using the synthetic dataset, we trained our model with Azure Custom Vision. The dataset was split into:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>70% for training</li>
                <li>15% for validation</li>
                <li>15% for testing</li>
              </ul>

              <p className="text-gray-300">
                The model was trained as a binary classifier to determine whether an oil leak was present in the image. Below are the results from Iteration 3 of our model training:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Precision: 83.1%</li>
                <li>Recall: 83.1%</li>
                <li>Average Precision (AP): 92.4%</li>
              </ul>

              <p className="text-gray-300">
                These metrics show that the model performs well in both minimizing false positives (precision) and capturing actual leaks (recall).
              </p>

              <h4 className="text-2xl font-semibold text-pink-400">Conclusion: AI for Real-Time Oil Leak Detection</h4>
              <p className="text-gray-300">
                Our work demonstrates that generative AI can address data scarcity challenges in oil leak detection, opening new possibilities for automated monitoring in oilfield operations. With 83.1% precision and recall, our model is ready to assist companies in real-time leak detection, improving both safety and regulatory compliance.
              </p>
              <p className="text-gray-300">
                While the current version detects leaks without pinpointing their exact location, future iterations could use object detection models or Roboflow to locate specific leak areas. Additionally, fine-tuning the model with real-world data, when available, could further enhance performance.
              </p>
              <p className="text-gray-300">
                By integrating this solution into monitoring systems and camera feeds, oilfield companies can reduce environmental risks, prevent downtime, and avoid fines from undetected leaks. This is just the beginning—AI and synthetic datasets are paving the way for more efficient and sustainable operations in the oilfield services industry.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Detecting Oil Leaks with AI */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-07-15_20-16-08_2278-i9M6xg68q7Pik0JojuYI23H1gbIcJ5.png"
                alt="Oil pump jack with visible oil leak in a field"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Detecting Oil Leaks with AI</h3>
                <p className="text-gray-300 mb-4">
                  Explore how we used generative AI to overcome data scarcity in building an oil leak detection model, improving safety and efficiency in the oilfield services industry.
                </p>
                <Button variant="secondary" onClick={() => setShowOilLeakDetection(true)}>
                  Read More
                </Button>
              </div>
            </div>

            {/* AI Art Bootcamp */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-14%20at%205.22.07%E2%80%AFPM-zXrAmXsgCXSc07NbZ5uOyne2ebzViF.png"
                alt="AI Art Bootcamp"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">AI Animation classes</h3>
                <p className="text-gray-300 mb-4">
                  AI animation classes that teaches storytelling using Generative AI models like Text to Image, Text to Video. We have successfully conducted 2 sessions. Please contact us if you are interested to join the classes, Check out the amazing videos created by our students!
                </p>
                <div className="flex space-x-2">
                  <Button variant="secondary" onClick={() => setShowAIArtBootcamp(true)}>
                    Read More
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="https://youtu.be/iKlBodLzerU?feature=shared" target="_blank" rel="noopener noreferrer">Watch videos created by our students</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Zideo - AI Video Generator */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
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

            {/* AuraScore */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
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
                <Button variant="secondary" asChild>
                  <a href="https://www.aurascore.app" target="_blank" rel="noopener noreferrer">Visit AuraScore</a>
                </Button>
              </div>
            </div>

            {/* Content creation for teaching mythological stories to kids */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
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

            {/* Content Creation for Business promotions */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
            <p  className="text-black mb-6">Stay updated with our latest projects and  AI experiments!</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow text-black"
              />
              <Button type="submit" variant="secondary" disabled={subscriptionStatus === 'loading'} className="w-full">
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
            <a href="https://www.instagram.com/mirrorphotosllc/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">
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
