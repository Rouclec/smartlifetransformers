"use client"

import { useState, useEffect } from "react" // Import useState and useEffect
import { motion } from "framer-motion"
import { ArrowLeft, Sun, Leaf, Zap, Shield, Users, TrendingUp, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    title: "Solar Installation",
    description: "Complete solar panel installation services for residential and commercial properties",
    icon: Sun,
    subservices: ["Residential Solar Systems", "Commercial Solar Solutions", "Industrial Solar Installations"],
  },
  {
    title: "Energy Consulting",
    description: "Expert consultation on energy efficiency and sustainable power solutions",
    icon: TrendingUp,
    subservices: ["Energy Audits", "System Design & Planning", "ROI Analysis & Financing"],
  },
  {
    title: "Maintenance & Support",
    description: "Comprehensive maintenance and support services for optimal system performance",
    icon: Shield,
    subservices: ["Regular System Maintenance", "24/7 Technical Support", "Performance Monitoring"],
  },
]

export default function SLTEnergiesPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const { theme, resolvedTheme } = useTheme() // Get resolvedTheme
  const [mounted, setMounted] = useState(false) // Add mounted state

  useEffect(() => {
    setMounted(true) // Set mounted to true after hydration
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/images/slt-energies/slt-energies-logo-dark.jpeg" : "/images/slt-energies/slt-energies-logo-light.jpeg"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-200 dark:bg-gray-900/90 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
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
                  alt="SLT Energies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">SLT Energies</h1>
                <p className="text-sm text-green-600">Sustainable Solar Solutions</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400"
              >
                Contact
              </button>
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
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Powering Tomorrow with
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {" "}
                  Clean Energy
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                SLT Energies is dedicated to transforming communities through sustainable solar energy solutions. We
                provide comprehensive solar services that reduce costs, increase energy independence, and protect our
                planet.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                  onClick={() => scrollToSection("inside-slt")}
                >
                  View Our Projects
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/slt-energies/banner-engineer-panels.jpeg"
                alt="SLT Energies engineer on solar panel roof"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/60 to-emerald-600/60 rounded-3xl flex flex-col justify-center items-center text-white text-center p-8">
                <Sun className="h-24 w-24 mb-6" />
                <h3 className="text-3xl font-bold mb-4">100% Clean Energy</h3>
                <p className="text-green-100">Harness the power of the sun for a sustainable future</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden h-96 md:h-[500px]"
          >
            <img
              src="/images/slt-energies/banner-panels-roof.jpeg"
              alt="SLT Energies solar panel installation project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
              <div className="text-white p-8 md:p-12 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Leading the Solar Revolution</h3>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  Discover how we're transforming communities with clean, sustainable energy solutions that reduce costs
                  and protect our environment.
                </p>
                <Button size="lg" variant="secondary" onClick={() => scrollToSection("inside-slt")} className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  View Our Projects
                  <Sun className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Sun, label: "Solar Installations", value: "500+", color: "text-yellow-500" },
              { icon: Leaf, label: "CO₂ Reduced (tons)", value: "2,500+", color: "text-green-500" },
              { icon: Users, label: "Happy Customers", value: "300+", color: "text-blue-500" },
              { icon: Zap, label: "Energy Generated (MWh)", value: "1,200+", color: "text-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 dark:bg-green-900/20">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solar energy solutions tailored to meet your specific needs, from initial consultation to
              ongoing maintenance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm flex flex-col dark:bg-gray-800/80 dark:border-gray-700">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <div className="space-y-3 flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sub-services:</h4>
                        {service.subservices.map((subservice, idx) => (
                          <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {subservice}
                          </div>
                        ))}
                      </div>
                      <Link href="/slt-energies/contact" className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose SLT Energies?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                As a branch of Smart Life Transformers, SLT Energies combines our NGO's mission of community
                transformation with cutting-edge solar technology. We're not just installing solar panels – we're
                building a sustainable future.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Installation",
                    description: "Certified professionals with years of experience in solar technology",
                  },
                  {
                    title: "Community Focus",
                    description: "As an NGO branch, we prioritize community benefit and accessibility",
                  },
                  {
                    title: "Sustainable Impact",
                    description: "Every installation contributes to environmental conservation",
                  },
                  {
                    title: "Ongoing Support",
                    description: "Comprehensive maintenance and support for optimal performance",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 relative overflow-hidden dark:from-gray-800 dark:to-gray-700">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Leaf className="h-24 w-24 text-green-600 mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Eco-Friendly Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our solar installations help reduce carbon footprint while providing clean, renewable energy for
                    your home or business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">25+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Years Warranty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">90%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated professionals bring years of experience in solar technology, engineering, and community
              development to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Solar Engineer",
                image: "/placeholder.svg?height=400&width=400&text=Sarah+Johnson",
                description: "15+ years in renewable energy systems design and implementation",
              },
              {
                name: "Michael Chen",
                role: "Installation Manager",
                image: "/placeholder.svg?height=400&width=400&text=Michael+Chen",
                description: "Expert in residential and commercial solar installations",
              },
              {
                name: "Dr. Amara Okafor",
                role: "Energy Consultant",
                image: "/placeholder.svg?height=400&width=400&text=Dr.+Amara+Okafor",
                description: "PhD in Sustainable Energy, specializing in energy efficiency solutions",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:text-white"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside SLT Energies Section */}
      <section id="inside-slt" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Inside SLT Energies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see the impact we're making in communities through
              sustainable solar energy solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar Installation",
                location: "Green Valley Community",
                image: "/images/slt-energies/project-panels-roof-wide.jpeg",
                description: "Complete solar system installation for 50+ homes",
              },
              {
                title: "Commercial Solar Project",
                location: "Downtown Business District",
                image: "/images/slt-energies/project-installation-1.jpeg",
                description: "Large-scale solar installation for office complex",
              },
              {
                title: "Community Solar Farm",
                location: "Rural Development Area",
                image: "/images/slt-energies/banner-panels-roof.jpeg",
                description: "Community solar farm providing clean energy to 200+ families",
              },
              {
                title: "School Solar Initiative",
                location: "Local Education Center",
                image: "/images/slt-energies/project-equipment-1.jpeg",
                description: "Educational solar installation with learning components",
              },
              {
                title: "Industrial Solar Solution",
                location: "Manufacturing District",
                image: "/images/slt-energies/project-equipment-2.jpeg",
                description: "High-capacity solar system for manufacturing facility",
              },
              {
                title: "Off-Grid Solar System",
                location: "Remote Community",
                image: "/images/slt-energies/project-team-indoor.jpeg",
                description: "Off-grid solar solution for remote community access",
              },
              {
                title: "Community Energy Workshop",
                location: "Buea Community",
                image: "/images/slt-energies/project-workshop.jpeg",
                description: "Engaging workshops on energy crises and sustainable solutions",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 dark:bg-gray-800 dark:text-white">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how SLT Energies can help you transition to clean,
              sustainable energy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri 8AM-6PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@sltenergies.org",
                description: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Solar Street",
                description: "Green City, GC 12345",
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
                  <p className="text-lg font-medium text-green-100 mb-1">{contact.info}</p>
                  <p className="text-green-200">{contact.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/slt-energies/contact">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Contact Us Today
                <Sun className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
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
                    alt="SLT Energies Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold">SLT Energies</span>
              </div>
              <p className="text-gray-400">Sustainable solar solutions for a brighter future.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Solar Installation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Energy Consulting
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Maintenance & Support
                  </button>
                </li>
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
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("inside-slt")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Our Projects
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">Get in touch for solar energy solutions.</p>
              <Link href="/slt-energies/contact">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SLT Energies - A branch of Smart Life Transformers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
