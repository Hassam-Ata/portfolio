"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  // Optional: Add scroll effect for navbar styling
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setScrolled(window.scrollY > 0);
    };
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Hassam Ata
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => {
              const isActive =
                (section.id === "about" && pathname === "/") ||
                pathname === `/${section.id}`;

              return (
                <Link
                  key={section.id}
                  href={section.id === "about" ? "/" : `/${section.id}`}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {sections.map((section) => {
                const isActive =
                  (section.id === "about" && pathname === "/") ||
                  pathname === `/${section.id}`;

                return (
                  <Link
                    key={section.id}
                    href={section.id === "about" ? "/" : `/${section.id}`}
                    className={`py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
