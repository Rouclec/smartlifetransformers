"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Users, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Project data - you'll replace this with your actual content
const projectData: Record<string, any> = {
  "community-energy-workshop": {
    title: "Community Energy Workshop",
    location: "Buea Community",
    date: "August 19-30th, 2025",
    category: "Training & Education",
    participants: "50+ participants",
    heroImage: "/images/slt-energies/training-3.jpeg",
    overview:
      "Our comprehensive 2 weeks solar training program brought together aspiring solar technicians, engineers, and community members to learn about renewable energy solutions. The workshop covered everything from basic solar principles to hands-on installation techniques.",
    objectives: [
      "Educate participants on solar energy fundamentals and system design",
      "Provide hands-on training in solar panel installation and maintenance",
      "Empower local communities with renewable energy knowledge",
      "Create job opportunities in the growing solar industry",
      "Address the energy crisis through sustainable solutions",
    ],
    outcomes: [
      "50+ participants successfully completed the training program",
      "Participants gained practical skills in solar installation",
      "Increased community awareness about renewable energy",
      "Several participants secured employment in the solar industry",
      "Strengthened local capacity for sustainable energy solutions",
    ],
    gallery: [
      {
        type: "image",
        src: "/images/slt-energies/training-4.jpeg",
        caption:
          "Workshop participants learning about solar panel installation",
      },
      {
        type: "image",
        src: "/images/slt-energies/training-2.jpeg",
        caption: "Indoor training session on circuit design",
      },
      {
        type: "image",
        src: "/images/slt-energies/training-5.jpeg",
        caption: "Hands-on practice with solar equipment",
      },
      {
        type: "image",
        src: "/images/slt-energies/project-equipment-2.jpeg",
        caption: "Learning about solar inverters and battery systems",
      },
      {
        type: "image",
        src: "/images/slt-energies/partners.jpeg",
        caption: "Main Chiefs / Engineers",
      },
      {
        type: "image",
        src: "/images/slt-energies/banner-engineer-panels.jpeg",
        caption: "Practical rooftop installation training",
      },
      //   {
      //     type: "image",
      //     src: "/images/slt-energies/banner-panels-roof.jpeg",
      //     caption: "Completed solar panel installation demonstration",
      //   },
    ],
    testimonials: [
      {
        name: "RWINWI HERBERT NGANJU",
        role: "Electrical Engineer",
        quote:
          "The workshop gave me a clear understanding of how solar systems operate. I now have the confidence to install panels and support my community in adopting clean energy solutions.",
      },
      {
        name: "AGBOR DIRANE ANAAH",
        role: "University Student",
        quote:
          "Through this training, I gained practical knowledge about solar technology and how to apply it in real-life projects. It has inspired me to pursue a career in renewable energy.",
      },
      {
        name: "CHI PEACE NDE",
        role: "Community Volunteer",
        quote:
          "The program was a great learning experience. I now share what I learned with others in my community, showing them how solar energy can improve daily life.",
      },
      {
        name: "MENDI JETTEL",
        role: "Technician Apprentice",
        quote:
          "The training was practical and easy to follow. I learned how to properly connect panels, inverters, and batteries, and I now feel ready to work on real solar projects.",
      },
    ],
    impact:
      "This workshop represents our commitment to building local capacity in renewable energy. By training community members, we're not just installing solar panels – we're creating a sustainable ecosystem of skilled professionals who can drive the clean energy transition in Cameroon.",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug];

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/slt-energies/slt-energies-logo-dark.jpeg"
      : "/images/slt-energies/slt-energies-logo-light.jpeg";

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/slt-energies/projects">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-200 dark:bg-gray-900/90 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/slt-energies/projects"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Projects</span>
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
              <div className="hidden md:block">
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                  SLT Energies
                </h1>
                <p className="text-sm text-green-600">Project Details</p>
              </div>
            </motion.div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  {project.participants}
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives & Outcomes */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Objectives
              </h3>
              <ul className="space-y-4">
                {project.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Outcomes
              </h3>
              <ul className="space-y-4">
                {project.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Photo Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((media: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMedia(index)}
                >
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {media.type === "image" ? (
                      <img
                        src={media.src || "/placeholder.svg"}
                        alt={media.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-gray-900">
                        <img
                          src={media.thumbnail || "/placeholder.svg"}
                          alt={media.caption}
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-green-600 ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                    {media.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {project.testimonials && project.testimonials.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                What Participants Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.testimonials.map((testimonial: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
                  >
                    <div className="text-green-600 text-5xl mb-4">"</div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
            <p className="text-lg text-green-100 leading-relaxed">
              {project.impact}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interested in Our Training Programs?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Contact us to learn about upcoming workshops and training
              opportunities in renewable energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/slt-energies/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/slt-energies/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2025 SLT Energies - A branch of Smart Life Transformers. All
            rights reserved.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedMedia !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-6xl w-full">
            <img
              src={project.gallery[selectedMedia].src || "/placeholder.svg"}
              alt={project.gallery[selectedMedia].caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {project.gallery[selectedMedia].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
