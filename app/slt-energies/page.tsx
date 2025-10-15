"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Sun,
  Leaf,
  Zap,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  Cpu,
  SatelliteDish,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "Solar System Installation",
    description:
      "Complete solar panel installation services for residential and commercial properties",
    icon: Sun,
    subservices: [
      "Residential Solar Systems",
      "Commercial Solar Solutions",
      "Industrial Solar Installations",
      "Home PV Systems",
      "Microgrid Systems",
    ],
  },
  {
    title: "Domestic Wiring",
    description:
      "Quality domestic wiring for safe, long-lasting electrical installations",
    icon: Zap,
    subservices: [
      "Drawing Electrical Plans",
      "Laying of Conduits",
      "Earthing",
      "Cabling and Finishing",
      "Automatic Control of Home Appliances (Smart Homes)",
    ],
  },
  {
    title: "Industrial Wiring",
    description:
      "Specialized industrial wiring services for safe, efficient, and reliable power in factories and large facilities",
    icon: Factory,
    subservices: [
      "Wiring and installing of machines",
      "Automatic & Semi-automatic Control Systems",
      "Starting Method & Control of Electric Motor",
      "Extension of Distribution Lines",
      "Installation of Electric Bumps (Furrach)",
      "Installation of Lifter, Wiring of Street Light, Traffic Control System",
    ],
  },
  {
    title: "Electronic Circuits",
    description:
      "Custom electronic circuit design and installation for efficient, reliable device operation",
    icon: Cpu,
    subservices: ["Home Security Systems", "Alarm Systems"],
  },
  {
    title: "Satellite Disk Installation",
    description:
      "Secure and accurate satellite dish installation for the best viewing experience",
    icon: SatelliteDish,
    subservices: ["Monitoring systems", "Security Camera Installation"],
  },
];

export default function SLTEnergiesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/slt-energies/slt-energies-logo-dark.jpeg"
      : "/images/slt-energies/slt-energies-logo-light.jpeg";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
                  src={logoSrc || "/placeholder.svg"}
                  alt="SLT Energies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                  SLT Energies
                </h1>
                <p className="text-sm text-green-600">
                  Sustainable Solar Solutions
                </p>
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
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Powering Tomorrow with
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {" "}
                  Clean Energy
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                SLT Energies is dedicated to transforming communities through
                sustainable solar energy solutions. We provide comprehensive
                solar services that reduce costs, increase energy independence,
                and protect our planet.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                  onClick={() => scrollToSection("inside-slt")}
                >
                  View Our Recent Projects
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
                <p className="text-green-100">
                  Harness the power of the sun for a sustainable future
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="services" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solar energy solutions tailored to meet your
              specific needs
            </p>
          </motion.div>

          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  {/* Icon Side */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      {(() => {
                        const Icon = services[currentSlide].icon;
                        return (
                          <Icon className="h-16 w-16 md:h-20 md:w-20 text-white" />
                        );
                      })()}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {services[currentSlide].title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {services[currentSlide].description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        What we offer:
                      </h4>
                      {services[currentSlide].subservices.map(
                        (subservice, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-700 dark:text-gray-300 justify-center md:justify-start"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {subservice}
                          </div>
                        )
                      )}
                    </div>

                    <Link href="/slt-energies/contact">
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3 bg-gradient-to-r from-green-500 to-emerald-600"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Leading the Solar Revolution
                </h3>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  Discover how we're transforming communities with clean,
                  sustainable energy solutions that reduce costs and protect our
                  environment.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection("inside-slt")}
                  className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
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
              {
                icon: Sun,
                label: "Solar Installations",
                value: "100+",
                color: "text-yellow-500",
              },
              {
                icon: Leaf,
                label: "CO₂ Reduced (tons)",
                value: "2,500+",
                color: "text-green-500",
              },
              {
                icon: Users,
                label: "Happy Customers",
                value: "85+",
                color: "text-blue-500",
              },
              {
                icon: Zap,
                label: "Energy Generated (MWh)",
                value: "1,200+",
                color: "text-purple-500",
              },
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
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose SLT Energies?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                As a branch of Smart Life Transformers, SLT Energies combines
                our NGO's mission of community transformation with cutting-edge
                solar technology. We're not just installing solar panels – we're
                building a sustainable future.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Installation",
                    description:
                      "Certified professionals with years of experience in solar technology",
                  },
                  {
                    title: "Community Focus",
                    description:
                      "As an NGO branch, we prioritize community benefit and accessibility",
                  },
                  {
                    title: "Sustainable Impact",
                    description:
                      "Every installation contributes to environmental conservation",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "Comprehensive maintenance and support for optimal performance",
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
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
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
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Eco-Friendly Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our solar installations help reduce carbon footprint while
                    providing clean, renewable energy for your home or business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        25+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Years Warranty
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        90%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Cost Savings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated professionals bring years of experience in solar
              technology, engineering, and community development to every
              project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Engr. Fuhneh Lewis",
                role: "CEO/ Trainer/Solar installer & Field Engineer",
                image: "/images/slt-energies/funeh.jpeg",
                description:
                  "Engineer in Electrical Power Systems ( M.Eng / PhD Researcher)",
              },
              {
                name: "Engr. Ofon Chrystutom",
                role: "Trainer/Solar",
                image: "/images/slt-energies/ofon.jpeg",
                description:
                  "Engineer in Electrical Power Systems ( M.Eng / PhD Researcher)",
              },
              {
                name: "Engr. Kang Hycenth",
                role: "Trainer/Solar",
                image: "/images/slt-energies/kang.jpeg",
                description: "Engineer in Electronic systems and solar energy",
              },
              {
                name: "Engr. Asonganyi Rouclec",
                role: "IT Manager",
                image: "/images/slt-energies/asonganyi.jpg",
                description:
                  "Software Engineer (B.Eng Computer Engineering)",
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside SLT Energies Section */}
      <section
        id="inside-slt"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Inside SLT Energies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see the impact
              we're making in communities through sustainable solar energy
              solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Community Energy Workshop",
                location: "Buea Community",
                image: "/images/slt-energies/training-3.jpeg",
                description:
                  "Engaging workshops on energy crises and sustainable solutions",
              },
              {
                title: "Commercial Solar Project",
                location: "Buea",
                image: "/images/slt-energies/project-installation-1.jpeg",
                description:
                  "Large-scale solar installation for office complex",
              },
              {
                title: "Community Solar Farm",
                location: "Rural Development Area",
                image: "/images/slt-energies/banner-panels-roof.jpeg",
                description:
                  "Community solar farm providing clean energy to 200+ families",
              },
              {
                title: "School Solar Initiative",
                location: "Local Education Center",
                image: "/images/slt-energies/project-equipment-1.jpeg",
                description:
                  "Educational solar installation with learning components",
              },
              {
                title: "Industrial Solar Solution",
                location: "Manufacturing District",
                image: "/images/slt-energies/project-equipment-2.jpeg",
                description:
                  "High-capacity solar system for manufacturing facility",
              },
              {
                title: "Off-Grid Solar System",
                location: "Remote Community",
                image: "/images/slt-energies/project-team-indoor.jpeg",
                description:
                  "Off-grid solar solution for remote community access",
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
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
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
            <Link href="/slt-energies/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                View Our Recent Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-green-500 to-emerald-600"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how SLT
              Energies can help you transition to clean, sustainable energy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+237 679 993 626 | +237 677 403 246 | +49 15 774868865",
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
                info: "Mile 17, Buea",
                description: "Cameroon",
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
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
                  <h3 className="text-xl font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-lg font-medium text-green-100 mb-1 whitespace-pre-line">
                    {contact.info}
                  </p>
                  <p className="text-green-200">{contact.description}</p>
                </motion.div>
              );
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
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-green-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Contact Us Today
                <Sun className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Google Form Section */}
      {/* <section id="solar-training-application-form" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Solar Training Program Registration
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our comprehensive solar training program running from August 19th - 23rd. Learn hands-on solar
              installation techniques, system design, and industry best practices from our expert team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4"
          >
            <iframe
              src="YOUR_GOOGLE_FORM_EMBED_URL_HERE"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Solar Training Program Registration Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 dark:bg-gray-800">
                  <img
                    src={logoSrc || "/placeholder.svg"}
                    alt="SLT Energies Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold">SLT Energies</span>
              </div>
              <p className="text-gray-400">
                Sustainable solar solutions for a brighter future.
              </p>
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
              <p className="text-gray-400 mb-4">
                Get in touch for solar energy solutions.
              </p>
              <Link href="/slt-energies/contact">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 SLT Energies - A branch of Smart Life Transformers.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
