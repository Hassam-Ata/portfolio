"use client"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const contacts = [
    { icon: <Mail className="h-6 w-6" />, href: "mailto:hassamata86@gmail.com", label: "Email" },
    { icon: <Phone className="h-6 w-6" />, href: "tel:+923709167741", label: "Phone" },
    { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/hassam-ata?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxh3dzQgdROqUH66DcN7Ohw%3D%3D", label: "LinkedIn" },
    { icon: <Github className="h-6 w-6" />, href: "https://github.com/Hassam-Ata", label: "Github" },
  ]

  return (
    <footer className="border-t border-white/10 py-10 md:py-16 mt-24">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <motion.p
          className="text-center text-gray-400 md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Hassam Ata. All rights reserved.
        </motion.p>

        <div className="flex items-center gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:text-white/90 transition-colors duration-300"
              >
                {contact.icon}
                <span className="sr-only">{contact.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}

