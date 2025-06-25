"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showRating?: boolean;
  showNavigation?: boolean;
  showDots?: boolean;
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO",
    company: "InnovateSphere",
    content: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Operations Director",
    company: "CloudScale",
    content: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "James Kim",
    role: "Engineering Lead",
    company: "DataPro",
    content: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP of Technology",
    company: "FutureNet",
    content: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialCarousel({
  testimonials = defaultTestimonials,
  autoplay = true,
  autoplayInterval = 5000,
  showRating = true,
  showNavigation = true,
  showDots = true,
  className
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const resumeAutoplay = () => {
    if (autoplay) {
      autoplayRef.current = setInterval(handleNext, autoplayInterval);
    }
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(handleNext, autoplayInterval);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [handleNext, autoplay, autoplayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15
    })
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className={cn("py-16 md:py-24 bg-gradient-to-br from-background to-muted/20", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real customers have to say about their experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] perspective-1000 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.4 }
                }}
                className="absolute inset-0"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                  <CardContent className="p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden">
                    <motion.div
                      className="absolute top-6 right-6 opacity-10"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Quote className="w-16 h-16 text-primary" />
                    </motion.div>

                    <div className="relative z-10">
                      <motion.blockquote
                        className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        &quot;{testimonials[currentIndex].content}&quot;
                      </motion.blockquote>

                      {showRating && (
                        <motion.div
                          className="flex gap-1 mb-6"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          <AvatarFallback>
                            {testimonials[currentIndex].name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {showNavigation && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full h-10 w-10 border-border/50 hover:bg-accent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {showDots && (
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full h-10 w-10 border-border/50 hover:bg-accent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialCarouselDemo() {
  return (
    <div className="min-h-screen bg-background">
      <TestimonialCarousel />
    </div>
  );
}

export default TestimonialCarouselDemo; 