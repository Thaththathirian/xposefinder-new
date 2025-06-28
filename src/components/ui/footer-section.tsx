"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image";
import { useTheme } from "next-themes";

interface FooterProps {
  companyName?: string
  logoText?: string
  newsletterTitle?: string
  newsletterDescription?: string
  quickLinks?: Array<{ label: string; href: string }>
  contactInfo?: {
    // address: string
    // city: string
    // phone: string
    email: string
  }
  socialLinks?: Array<{ platform: string; href: string }>
  showThemeToggle?: boolean
}

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      // Get navbar height dynamically
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight; // 20px extra padding
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

function Footer({
  companyName = "Xposefinder",
  logoText = "Xposefinder",
  newsletterTitle = "Stay Connected",
  newsletterDescription = "Join our newsletter for the latest updates and exclusive offers.",
  quickLinks = [
    { label: "Our Concept", href: "#how-xposefinder-works" },
    { label: "Key Features", href: "#key-features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a Demo", href: "#contact" },
  ],
  contactInfo = {
    email: "contact@xposefinder.com",
  },
  socialLinks = [
    { platform: "Twitter", href: "https://x.com/xposefinder" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/XposeFinder" },
  ],
  showThemeToggle = true,
}: FooterProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [email, setEmail] = React.useState("")
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      default:
        return <Facebook className="h-4 w-4" />
    }
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Newsletter Section */}
          <div className="relative lg:col-span-1">
            <div className="mb-6">
              {mounted ? (
                <Image
                  src={resolvedTheme === "dark" ? "/logo-darktheme.svg" : "/logo-lighttheme.svg"}
                  alt="Logo"
                  width={140}
                  height={32}
                  priority
                />
              ) : (
                <Image
                  src="/logo-darktheme.svg"
                  alt="Logo"
                  width={140}
                  height={32}
                  priority
                />
              )}
            </div>
            <h3 className="mb-4 text-xl font-semibold">{newsletterTitle}</h3>
            <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
              {newsletterDescription}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm"
                  required
                />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-white transition-transform hover:scale-105"
              >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary hover:translate-x-1 transform duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Us & Follow Us Combined Section */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-semibold">Follow Us</h3>
              <div className="mb-8 flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            {getSocialIcon(social.platform)}
                            <span className="sr-only">{social.platform}</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow us on {social.platform}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>

          {/* Theme Toggle Section */}
          {showThemeToggle && (
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-lg font-semibold">Theme</h3>
              {mounted && (
                <div className="flex items-center space-x-3 p-3 rounded-lg border bg-card">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <Switch
                    id="dark-mode"
                    checked={resolvedTheme === "dark"}
                    onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
                  />
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-muted-foreground transition-colors hover:text-primary">
              Terms and Conditions
            </a>
            <a href="/cookie-settings" className="text-muted-foreground transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
