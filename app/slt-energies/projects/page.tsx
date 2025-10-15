"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const projects = [
  {
    slug: "community-energy-workshop",
    title: "Community Energy Workshop",
    location: "Buea Community",
    date: "August 19-30th, 2025",
    image: "/images/slt-energies/training-3.jpeg",
    description: "Engaging workshops on energy crises and sustainable solutions",
    category: "Training & Education",
    participants: "50+ participants",
    hasDetailPage: true,
  },
  {
    slug: "commercial-solar-project",
    title: "Commercial Solar Project",
    location: "Buea",
    date: "2025",
    image: "/images/slt-energies/project-installation-1.jpeg",
    description: "Large-scale solar installation for office complex",
    category: "Commercial Installation",
    participants: "N/A",
    hasDetailPage: false,
  },
  {
    slug: "community-solar-farm",
    title: "Community Solar Farm",
    location: "Rural Development Area",
    date: "2025",
    image: "/images/slt-energies/banner-panels-roof.jpeg",
    description: "Community solar farm providing clean energy to 200+ families",
    category: "Community Project",
    participants: "200+ families",
    hasDetailPage: false,
  },
  {
    slug: "school-solar-initiative",
    title: "School Solar Initiative",
    location: "Local Education Center",
    date: "2025",
    image: "/images/slt-energies/project-equipment-1.jpeg",
    description: "Educational solar installation with learning components",
    category: "Educational",
    participants: "N/A",
    hasDetailPage: false,
  },
  {
    slug: "industrial-solar-solution",
    title: "Industrial Solar Solution",
    location: "Manufacturing District",
    date: "2024",
    image: "/images/slt-energies/project-equipment-2.jpeg",
    description: "High-capacity solar system for manufacturing facility",
    category: "Industrial Installation",
    participants: "N/A",
    hasDetailPage: false,
  },
  {
    slug: "off-grid-solar-system",
    title: "Off-Grid Solar System",
    location: "Remote Community",
    date: "2024",
    image: "/images/slt-energies/project-team-indoor.jpeg",
    description: "Off-grid solar solution for remote community access",
    category: "Off-Grid Solution",
    participants: "N/A",
    hasDetailPage: false,
  },
]

export default function ProjectsPage() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/slt-energies/slt-energies-logo-dark.jpeg"
      : "/images/slt-energies/slt-energies-logo-light.jpeg"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-200 dark:bg-gray-900/90 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/slt-energies"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to SLT Energies</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                <img
                  src={logoSrc || "/placeholder.svg"}
                  alt="SLT Energies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">SLT Energies</h1>
                <p className="text-sm text-green-600">Our Projects</p>
              </div>
            </motion.div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our portfolio of solar energy projects, community initiatives, and training programs that are
              transforming lives and building a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {project.hasDetailPage ? (
                  <Link href={`/slt-energies/projects/${project.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 cursor-pointer dark:bg-gray-800">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-green-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                          {project.participants !== "N/A" && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {project.participants}
                            </div>
                          )}
                        </div>
                        <div className="mt-4 text-green-600 font-semibold flex items-center">
                          View Details
                          <ArrowLeft className="h-4 w-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg dark:bg-gray-800">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-green-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                        {project.participants !== "N/A" && (
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {project.participants}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2025 SLT Energies - A branch of Smart Life Transformers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
