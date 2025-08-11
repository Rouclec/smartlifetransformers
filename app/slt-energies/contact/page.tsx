"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import emailjs from "@emailjs/browser"; // Import emailjs
import { toast } from "sonner"; // Import toast

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SLTEnergiesContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission loading
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    time: new Date().toLocaleDateString(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Ensure form element type
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ENERGIES!, // Use specific template ID
        e.currentTarget, // Pass the form element
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Solar consultation request sent!", {
        description:
          "We've received your inquiry and will contact you within 24 hours.",
      });
      setFormData({
        // Reset form data
        name: "",
        email: "",
        phone: "",
        message: "",
        time: new Date().toLocaleDateString(),
      });
    } catch (error) {
      console.error("Failed to send solar consultation request:", error);
      toast.error("Failed to send request.", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/slt-energies/slt-energies-logo-dark.jpeg"
      : "/images/slt-energies/slt-energies-logo-light.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-200 dark:bg-gray-900/90 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/slt-energies"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors dark:text-green-400 dark:hover:text-green-300"
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
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                  Solar Consultation
                </h1>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Get Your Free Quote
                </p>
              </div>
            </motion.div>

            <div className="w-24 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Start Your Solar Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to harness the power of the sun? Get a personalized solar
              consultation and discover how much you can save with clean energy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    +237 679 993 626
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    +237 677 403 246
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mon-Fri 8AM-6PM
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@sltenergies.org
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We reply within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mile 17, Buea
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Cameroon
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 dark:from-gray-800 dark:to-gray-700">
                <h3 className="font-bold text-green-800 dark:text-green-400 mb-2">
                  Why Choose Solar?
                </h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Reduce energy bills by up to 90%</li>
                  <li>• 25+ year warranty on panels</li>
                  <li>• Increase property value</li>
                  <li>• Environmental impact</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-white">
                    Get Your Free Solar Consultation
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Tell us about your property and energy needs, and we'll
                    provide a customized solar solution.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="dark:text-gray-50">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name" // Added name attribute
                          required
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                          className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="dark:text-gray-50">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email" // Added name attribute
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="phone" className="dark:text-gray-50">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone" // Added name attribute
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+1 (555) 123-4567"
                          className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                      </div>
                      {/* <div className="space-y-2">
                        <Label htmlFor="propertyType" className="dark:text-gray-50">Property Type</Label>
                        <Select onValueChange={(value) => handleInputChange("propertyType", value)} value={formData.propertyType}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white dark:border-gray-600">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <SelectItem value="residential">Residential Home</SelectItem>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="industrial">Industrial Facility</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                         Hidden input for select value to be picked up by EmailJS 
                        <input type="hidden" name="propertyType" value={formData.propertyType} />
                      </div> */}
                    </div>

                    {/* <div className="grid md:grid-cols-2 gap-4"> */}
                    {/* <div className="space-y-2">
                        <Label htmlFor="energyBill" className="dark:text-gray-50">Monthly Energy Bill</Label>
                        <Select onValueChange={(value) => handleInputChange("energyBill", value)} value={formData.energyBill}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white dark:border-gray-600">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <SelectItem value="under-100">Under $100</SelectItem>
                            <SelectItem value="100-200">$100 - $200</SelectItem>
                            <SelectItem value="200-300">$200 - $300</SelectItem>
                            <SelectItem value="300-500">$300 - $500</SelectItem>
                            <SelectItem value="over-500">Over $500</SelectItem>
                          </SelectContent>
                        </Select>
                        Hidden input for select value to be picked up by EmailJS
                        <input type="hidden" name="energyBill" value={formData.energyBill} />
                      </div> */}
                    {/* <div className="space-y-2">
                        <Label htmlFor="service" className="dark:text-gray-50">Service Needed</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)} value={formData.service}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white dark:border-gray-600">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <SelectItem value="installation">Solar Installation</SelectItem>
                            <SelectItem value="consultation">Energy Consultation</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                            <SelectItem value="quote">Free Quote</SelectItem>
                          </SelectContent>
                        </Select>
                         Hidden input for select value to be picked up by EmailJS 
                        <input type="hidden" name="service" value={formData.service} />
                      </div> */}
                    {/* </div> */}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="dark:text-gray-50">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message" // Added name attribute
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your energy goals, roof details, or any specific questions..."
                        rows={4}
                        className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                      disabled={isSubmitting} // Disable button during submission
                    >
                      {isSubmitting
                        ? "Sending..."
                        : "Get My Free Solar Consultation"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
