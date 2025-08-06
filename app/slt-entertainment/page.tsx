"use client"

import { useState, useEffect } from "react" // Import useState and useEffect
import { motion } from "framer-motion"
import { ArrowLeft, Music, Star, Users, Calendar, Phone, Mail, MapPin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function SLTEntertainmentPage() {
  const { theme, resolvedTheme } = useTheme() // Get resolvedTheme
  const [mounted, setMounted] = useState(false) // Add mounted state

  useEffect(() => {
    setMounted(true) // Set mounted to true after hydration
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/images/slt-logo-dark.jpeg" : "/images/slt-logo-light.jpeg"

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-purple-200 dark:bg-gray-900/90 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors dark:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to SLT</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                <img
                  src={logoSrc || "/placeholder.svg"} // Use the conditional logoSrc
                  alt="SLT Entertainment Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">SLT Entertainment</h1>
                <p className="text-sm text-purple-600">Creative Solutions & Talent Development</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                Contact
              </a>
              <ThemeToggle />
            </nav>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial="initial" animate="animate" className="max-w-4xl mx-auto">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Unleashing Creative
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Potential
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              SLT Entertainment is dedicated to nurturing creative talent and providing innovative entertainment
              solutions that inspire, engage, and transform communities through the power of arts and culture.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              >
                Explore Our Talent
                <Star className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
              >
                Book Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Music className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Coming Soon</h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              SLT Entertainment is currently in development. We're working hard to bring you innovative entertainment
              solutions, talent development programs, and creative services that will transform the entertainment
              landscape.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: "Talent Management",
                  description: "Comprehensive talent development and management services",
                },
                {
                  icon: Calendar,
                  title: "Event Production",
                  description: "Full-service event planning and production capabilities",
                },
                {
                  icon: Star,
                  title: "Creative Workshops",
                  description: "Educational programs to nurture creative skills",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 dark:bg-purple-900/20">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              Get Notified When We Launch
              <Music className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Be the first to know when SLT Entertainment launches. Contact us for early access and partnership
              opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4568",
                description: "Mon-Fri 9AM-5PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@sltentertainment.org",
                description: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "456 Creative Avenue",
                description: "Arts District, AD 12345",
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  <p className="text-lg font-medium text-purple-100 mb-1">{contact.info}</p>
                  <p className="text-purple-200">{contact.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 dark:bg-gray-800">
                  <img
                    src={logoSrc || "/placeholder.svg"} // Use the conditional logoSrc
                    alt="SLT Entertainment Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold">SLT Entertainment</span>
              </div>
              <p className="text-gray-400">Creative solutions for a vibrant future.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Coming Soon</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Talent Management</li>
                <li>Event Production</li>
                <li>Creative Workshops</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Back to SLT
                  </Link>
                </li>
                <li>About Us</li>
                <li>Our Vision</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">Follow us for updates on our launch.</p>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                Follow Us
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SLT Entertainment - A branch of Smart Life Transformers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
