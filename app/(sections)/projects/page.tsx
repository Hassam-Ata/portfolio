"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/section-title";

import Image from "next/image";
import { CalendarIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

const ProjectsPage = () => {
  const projects = [
    {
      title: "SenseAi",
      date: "March 2025",
      description: "AI-powered career advancement platform",
      image: "/senseAI.png?height=900",
      badges: [
        "Next.js",
        "Shadcn",
        "Prisma",
        "Neon PostgreSQL",
        "Clerk",
        "Zod",
        "Gemini API",
        "Inngest",
      ],
      items: [
        <>
          Developed SenseAi, an AI-powered career advancement platform using{" "}
          <strong>Next.js</strong>, <strong>Prisma</strong>, and{" "}
          <strong>Neon PostgreSQL</strong>, enabling users to generate AI-driven
          industry insights, resumes, and cover letters.
        </>,
        <>
          Integrated <strong>Clerk</strong> authentication for secure user
          sign-ups and implemented <strong>Zod</strong> for robust form
          validation, ensuring data integrity.
        </>,
        <>
          Implemented an AI-powered interview preparation using{" "}
          <strong>Gemini API</strong>, generating MCQs and providing
          personalized feedback reports.
        </>,
        <>
          Automated weekly industry insights generation using{" "}
          <strong>Inngest</strong> cron jobs, enhancing user engagement with
          up-to-date market trends.
        </>,
      ],
      links: {
        demo: "https://sense-ai-five.vercel.app/",
        github: "https://github.com/Hassam-Ata/SenseAI",
      },
    },
    {
      title: "Articulate",
      date: "December 2024",
      description: "Feature-rich blogging platform",
      image: "/articulate.png?height=600&width=800",
      badges: [
        "React.js",
        "Tailwind CSS",
        "React Query",
        "Clerk",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      items: [
        <>
          Developed a blogging platform with key functionalities including
          content creation, image and video uploads, commenting system, and post
          searching and filtering.
        </>,
        <>
          Built a backend using <strong>Node.js</strong> and{" "}
          <strong>Express.js</strong> to create a <strong>RESTful API</strong>,
          integrated <strong>Clerk</strong> for authentication, and used{" "}
          <strong>MongoDB</strong> as the primary database with{" "}
          <strong>Mongoose</strong> ODM for data management.
        </>,
        <>
          Designed the frontend with <strong>React.js</strong>, optimized state
          management using <strong>React Query</strong>, and styled the
          application with <strong>Tailwind CSS</strong> for a responsive and
          modern user interface.
        </>,
      ],
      links: {
        demo: "https://www.youtube.com/watch?v=Z5Fy5rIEebs&feature=youtu.be",
        github: "https://github.com/Hassam-Ata/Articulate",
      },
    },
  ];

  return (
    <section id="projects" className="pt-20">
      <TracingBeam>
        <SectionTitle>Projects</SectionTitle>

        <div className="mx-auto grid gap-12 md:max-w-[64rem] mt-4">
          {projects.map((project, index) => (
            <div key={index}>
              <Card className="border border-white overflow-hidden">
                <div className="grid grid-cols-1 gap-6">
                  {/* Image always on top */}
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text below image */}
                  <div className="p-6 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {project.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.badges.map((badge, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-white/20 bg-white/5"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 flex-grow mb-4">
                      {project.items.map((item, i) => (
                        <p key={i} className="text-sm text-gray-300">
                          • {item}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="gap-2"
                      >
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2 border-white/10 bg-white/5"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </TracingBeam>
      <Footer />
    </section>
  );
};

export default ProjectsPage;
