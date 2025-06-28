"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  // User, 
  // MessageSquare, 
  // Building, 
  // Send,
  CheckCircle,
  // LoaderCircle,
  // ArrowRight,
  // Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import BookingCalendar from "./booking-calendar"; 

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<{ success: boolean; error?: string }>;
  className?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({ className }: ContactFormProps) {
  // const [formData, setFormData] = useState<ContactFormData>({
  //   name: "",
  //   email: "",
  //   company: "",
  //   phone: "",
  //   message: ""
  // });
  
  // const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // const handleInputChange = (field: keyof ContactFormData, value: string) => {
  //   setFormData(prev => ({ ...prev, [field]: value }));
  //   if (errors[field]) {
  //     setErrors(prev => ({ ...prev, [field]: "" }));
  //   }
  // };

  // const validateForm = (): boolean => {
  //   const newErrors: Record<string, string> = {};
    
  //   if (!formData.name.trim()) {
  //     newErrors.name = "Name is required";
  //   }
    
  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Please enter a valid email address";
  //   }
    
  //   if (!formData.message.trim()) {
  //     newErrors.message = "Message is required";
  //   } else if (formData.message.trim().length < 10) {
  //     newErrors.message = "Message must be at least 10 characters";
  //   }
    
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (!validateForm()) return;
    
  //   setStatus("loading");
  //   setSubmitMessage("");
    
  //   try {
  //     if (onSubmit) {
  //       const result = await onSubmit(formData);
  //       if (result.success) {
  //         setStatus("success");
  //         setSubmitMessage("Thank you! Your message has been sent successfully.");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           company: "",
  //           phone: "",
  //           message: ""
  //         });
  //       } else {
  //         setStatus("error");
  //         setSubmitMessage(result.error || "Something went wrong. Please try again.");
  //       }
  //     } else {
  //       // Default success simulation
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //       setStatus("success");
  //       setSubmitMessage("Thank you! Your message has been sent successfully.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         company: "",
  //         phone: "",
  //         message: ""
  //       });
  //     }
  //   } catch {
  //     setStatus("error");
  //     setSubmitMessage("An error occurred. Please try again.");
  //   }
  // };

  const resetForm = () => {
    setStatus("idle");
    setSubmitMessage("");
    // setErrors({});
  };

  return (
    <section id="contact" className={cn(
      "relative py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden scroll-mt-20",
      className
    )}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
        />
        <div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div 
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div 
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-foreground">Book a </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to start your project? Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div 
            className="lg:col-span-2"
          >
            {status !== "success" ? (
              <div
                className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border dark:border-white/20 bg-background dark:bg-[#181825] md:p-8 shadow-lg"
              >
                <BookingCalendar />
              </div>
            ) : (
              <div
                className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border p-12 text-center shadow-lg"
              >
                <div
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {submitMessage}
                </p>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="px-6"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div 
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div 
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">contact@xposefinder.com</p>
                  </div>
                </div>

                {/* <div 
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl rounded-2xl border border-primary/20 p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Quick Response</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 