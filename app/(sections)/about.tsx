"use client";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="pt-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hassam Ata
          </h1>
          <h2 className="text-xl font-medium text-gray-400 md:text-2xl">
            MERN | NEXT_JSDeveloper
          </h2>
          <p className="text-gray-400 max-w-[750px] mx-auto">
            Passionate full-stack developer specializing in modern web
            applications with Next.js, React, and Node. Based in Karachi,
            Pakistan.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {/* Contact Icons */}
          <Link
            href="mailto:hassamata86@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>

          <Link
            href="https://github.com/Hassam-Ata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/hassam-ata?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxh3dzQgdROqUH66DcN7Ohw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>

          {/* Resume Download Button */}
          <Button
            variant="default"
            size="lg"
            className="gap-2 rounded-full ml-2"
            onClick={() => {
              // Create a link element
              const link = document.createElement("a");
              // Set the href to the resume PDF (replace with actual path)
              link.href = "/resume.pdf";
              // Set download attribute
              link.download = "Hassam_Ata_Resume.pdf";
              // Append to body
              document.body.appendChild(link);
              // Trigger click
              link.click();
              // Clean up
              document.body.removeChild(link);
            }}
          >
            <Download className="h-5 w-5" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
