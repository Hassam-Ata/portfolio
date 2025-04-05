"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Hassam Ata
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`transition-colors duration-300 ${
                  activeSection === section.id ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {section.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`py-2 transition-colors duration-300 ${
                    activeSection === section.id ? "text-white font-medium" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                    })
                    setIsOpen(false)
                  }}
                >
                  {section.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

