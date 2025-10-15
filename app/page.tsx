"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { BranchSlider } from "@/components/branch-slider";
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

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme, resolvedTheme } = useTheme(); // Get resolvedTheme
  const [mounted, setMounted] = useState(false); // Add mounted state

  useEffect(() => {
    setMounted(true); // Set mounted to true after hydration
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/slt-logo-dark.jpeg"
      : "/images/slt-logo-light.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                <img
                  src={logoSrc || "/placeholder.svg"} // Use the conditional logoSrc
                  alt="Smart Life Transformers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                  Smart Life Transformers
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Talent Accelerator NGO
                </p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("mission")}
                className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
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
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Transforming Lives Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Innovation
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Smart Life Transformers is a talent accelerator NGO dedicated to
              empowering individuals and communities through innovative
              solutions across multiple sectors.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => scrollToSection("branches")}
              >
                Explore Our Branches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("mission")}
                className="dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-800"
              >
                Learn More About SLT
              </Button>
            </motion.div>
          </motion.div>
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
              src="/placeholder.svg?height=500&width=1200&text=SLT+team+working+on+community+transformation+projects"
              alt="SLT team working on community transformation projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-8 md:p-12 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Transforming Communities Together
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  See how our dedicated team works across multiple sectors to
                  create lasting positive impact in communities worldwide.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  View Our Impact Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Branches
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our specialized branches, each dedicated to transforming
              lives in their respective sectors through innovation and
              excellence.
            </p>
          </motion.div>

          <BranchSlider />
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Smart Life Transformers, we believe in the power of
                innovation to create lasting positive change. Our mission is to
                accelerate talent development and provide sustainable solutions
                that transform communities.
              </p>
              <ul className="space-y-3">
                {[
                  "Empowering individuals through skill development",
                  "Creating sustainable community solutions",
                  "Fostering innovation across multiple sectors",
                  "Building partnerships for lasting impact",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-blue-100 mb-6">
                    Be part of the transformation. Together, we can create a
                    better future for communities worldwide.
                  </p>
                  <Button
                    variant="secondary"
                    className="self-start dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Involved
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform lives together? Contact us to learn more about
              our mission and how you can get involved.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 dark:from-gray-700 dark:to-gray-800">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +237 679 993 626
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  +49 15 774868865
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri 9AM-6PM
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 dark:from-gray-700 dark:to-gray-800">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  info@smartlifetransformers.org
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We reply within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 dark:from-gray-700 dark:to-gray-800">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Mile 17</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Buea, Cameroon
                </p>
              </div>
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Send Us a Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
                    alt="Smart Life Transformers Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold">Smart Life Transformers</span>
              </div>
              <p className="text-gray-400">
                Transforming lives through innovation and talent acceleration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Branches</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/slt-energies"
                    className="hover:text-white transition-colors"
                  >
                    SLT Energies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/slt-entertainment"
                    className="hover:text-white transition-colors"
                  >
                    SLT Entertainment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-400 mb-4">
                Stay connected with our community impact.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/smartLT22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2022 Smart Life Transformers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
