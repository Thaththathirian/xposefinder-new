// utils/smooth-scroll.ts
// Utility functions for smooth scrolling navigation
import React from 'react';
/**
 * Smoothly scrolls to a section by its ID
 * @param sectionId - The ID of the section to scroll to (with or without #)
 * @param offset - Additional offset from the top (default: 20px)
 */
export function scrollToSection(sectionId: string, offset: number = 20): void {
  // Ensure the ID starts with #
  const id = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  
  const element = document.querySelector(id);
  if (!element) {
    console.warn(`Section with ID ${id} not found`);
    return;
  }

  // Get navbar height dynamically
  const navbar = document.querySelector('nav') || document.querySelector('header nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  
  // Calculate the position to scroll to
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Handles smooth scroll for anchor links
 * Use this as an onClick handler for anchor elements
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset?: number
): void {
  if (href.startsWith('#')) {
    e.preventDefault();
    scrollToSection(href, offset);
  }
}

/**
 * Handles smooth scroll for buttons that need to navigate to sections
 * Use this for "Book a Demo", "Get Started" buttons etc.
 */
export function handleButtonScroll(
  e: React.MouseEvent<HTMLButtonElement>,
  sectionId: string,
  offset?: number
): void {
  e.preventDefault();
  scrollToSection(sectionId, offset);
}

/**
 * Hook to handle smooth scrolling with proper cleanup
 */
export function useSmoothScroll() {
  const scrollTo = React.useCallback((sectionId: string, offset?: number) => {
    scrollToSection(sectionId, offset);
  }, []);

  const handleAnchorClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, offset?: number) => {
      handleSmoothScroll(e, href, offset);
    },
    []
  );

  const handleButtonClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, sectionId: string, offset?: number) => {
      handleButtonScroll(e, sectionId, offset);
    },
    []
  );

  return {
    scrollTo,
    handleAnchorClick,
    handleButtonClick,
  };
}

// Navigation configuration
export const NAVIGATION_SECTIONS = {
  CONCEPT: 'how-xposefinder-works',
  FEATURES: 'key-features', 
  USE_CASES: 'use-cases',
  FAQ: 'faq',
  CONTACT: 'contact',
} as const;

export const NAVBAR_ITEMS = [
  { name: "Our Concept", href: `#${NAVIGATION_SECTIONS.CONCEPT}` },
  { name: "Features", href: `#${NAVIGATION_SECTIONS.FEATURES}` },
  { name: "Use cases", href: `#${NAVIGATION_SECTIONS.USE_CASES}` },
  { name: "FAQ", href: `#${NAVIGATION_SECTIONS.FAQ}` },
  { name: "Contact", href: `#${NAVIGATION_SECTIONS.CONTACT}` },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Our Concept", href: `#${NAVIGATION_SECTIONS.CONCEPT}` },
  { label: "Key Features", href: `#${NAVIGATION_SECTIONS.FEATURES}` },
  { label: "Use Cases", href: `#${NAVIGATION_SECTIONS.USE_CASES}` },
  { label: "FAQ", href: `#${NAVIGATION_SECTIONS.FAQ}` },
  { label: "Book a Demo", href: `#${NAVIGATION_SECTIONS.CONTACT}` },
];

/**
 * Example usage in a React component:
 * 
 * import { useSmoothScroll, NAVIGATION_SECTIONS } from '@/utils/smooth-scroll';
 * 
 * function MyComponent() {
 *   const { scrollTo, handleAnchorClick, handleButtonClick } = useSmoothScroll();
 *   
 *   return (
 *     <div>
 *       <a 
 *         href="#features" 
 *         onClick={(e) => handleAnchorClick(e, '#features')}
 *       >
 *         Features
 *       </a>
 *       
 *       <button onClick={(e) => handleButtonClick(e, NAVIGATION_SECTIONS.CONTACT)}>
 *         Book a Demo
 *       </button>
 *     </div>
 *   );
 * }
 */