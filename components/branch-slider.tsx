"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Zap, Music, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const branches = [
  {
    id: "slt-energies",
    title: "SLT Energies",
    description: "Sustainable solar energy solutions for communities and businesses",
    icon: Zap,
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    href: "/slt-energies",
    features: ["Solar Panel Installation", "Energy Consulting", "Maintenance Services"],
  },
  {
    id: "slt-entertainment",
    title: "SLT Entertainment",
    description: "Creative entertainment solutions and talent development programs",
    icon: Music,
    color: "from-purple-400 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    href: "/slt-entertainment",
    features: ["Talent Management", "Event Production", "Creative Workshops"],
  },
  {
    id: "slt-tech",
    title: "SLT Tech",
    description: "Technology solutions and digital transformation services",
    icon: Zap,
    color: "from-blue-400 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    href: "/slt-tech",
    features: ["Web Development", "Mobile Apps", "Digital Consulting"],
  },
]

export function BranchSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % branches.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * 66.666}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {branches.map((branch, index) => {
            const Icon = branch.icon
            return (
              <div key={branch.id} className="w-2/3 flex-shrink-0 px-4">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${branch.bgColor} rounded-3xl p-8 h-96 relative overflow-hidden group cursor-pointer`}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${branch.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{branch.title}</h3>

                    <p className="text-gray-600 mb-6 flex-grow">{branch.description}</p>

                    <div className="space-y-2 mb-6">
                      {branch.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href={branch.href}>
                      <Button
                        className={`bg-gradient-to-r ${branch.color} hover:opacity-90 transition-opacity w-full group`}
                      >
                        Explore {branch.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2 items-center">
          {branches.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
