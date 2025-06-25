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

interface FooterProps {
  companyName?: string
  logoText?: string
  newsletterTitle?: string
  newsletterDescription?: string
  quickLinks?: Array<{ label: string; href: string }>
  contactInfo?: {
    address: string
    city: string
    phone: string
    email: string
  }
  socialLinks?: Array<{ platform: string; href: string }>
  showThemeToggle?: boolean
}

function Footer({
  companyName = "TechCorp",
  logoText = "TechCorp",
  newsletterTitle = "Stay Connected",
  newsletterDescription = "Join our newsletter for the latest updates and exclusive offers.",
  quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Products", href: "#" },
    { label: "Contact", href: "#" },
  ],
  contactInfo = {
    address: "123 Innovation Street",
    city: "Tech City, TC 12345",
    phone: "(123) 456-7890",
    email: "hello@techcorp.com",
  },
  socialLinks = [
    { platform: "Facebook", href: "#" },
    { platform: "Twitter", href: "#" },
    { platform: "Instagram", href: "#" },
    { platform: "LinkedIn", href: "#" },
  ],
  showThemeToggle = true,
}: FooterProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [email, setEmail] = React.useState("")

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

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
              <h2 className="mb-2 text-2xl font-bold tracking-tight">{logoText}</h2>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
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
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Social Media and Theme Toggle Section */}
          <div className="relative">
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
            
            {showThemeToggle && (
              <div className="flex items-center space-x-3 p-3 rounded-lg border bg-card">
                <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
                <Moon className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="dark-mode" className="text-sm font-medium">
                  Dark Mode
              </Label>
            </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 {companyName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
