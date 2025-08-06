"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/placeholder.svg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "",
    time: new Date().toLocaleDateString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc("/images/slt-logo-dark.jpeg");
    } else {
      setLogoSrc("/images/slt-logo-light.jpeg");
    }
  }, [theme]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_GENERAL!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "",
        time: new Date().toLocaleDateString(),
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt="SLT Logo"
            width={100}
            height={100}
          />
          <span className="sr-only">Smart Life Transformers</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#branches"
          >
            Branches
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/slt-energies"
          >
            SLT Energies
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/slt-entertainment"
          >
            SLT Entertainment
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4 md:px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone">Phone (Optional)</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Inquiry about services"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="interest">Area of Interest</label>
                <Select
                  name="interest"
                  value={formData.interest}
                  onValueChange={(value) =>
                    handleSelectChange("interest", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="slt-energies">SLT Energies</SelectItem>
                    <SelectItem value="slt-entertainment">
                      SLT Entertainment
                    </SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="career">Career Opportunities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  name="interest"
                  value={formData.interest}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Smart Life Transformers. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <Toaster />
    </div>
  );
}
