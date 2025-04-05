"use client";
import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

// Import all tech icons
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiPrisma,
  SiPostman,
  SiGit,
} from "react-icons/si";

// Import VS Code icon from vsc package
import { VscCode } from "react-icons/vsc";

export function Skills() {
  const skillsCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="h-8 w-8" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-8 w-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-8 w-8" /> },
        { name: "SQL", icon: <SiMysql className="h-8 w-8" /> },
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8" /> },
        { name: "Node.js", icon: <SiNodedotjs className="h-8 w-8" /> },
        { name: "Express.js", icon: <SiExpress className="h-8 w-8" /> },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Libraries",
      skills: [
        { name: "React.js", icon: <SiReact className="h-8 w-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8" /> },
        { name: "Prisma", icon: <SiPrisma className="h-8 w-8" /> },
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="h-8 w-8" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-8 w-8" /> },
      ],
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "VS Code", icon: <VscCode className="h-8 w-8" /> },
        { name: "Postman", icon: <SiPostman className="h-8 w-8" /> },
        { name: "Git", icon: <SiGit className="h-8 w-8" /> },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="pt-20">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-7xl mx-auto">
        {skillsCategories.map((category, index) => (
          <div key={index}>
            <Card className="border border-white bg-black/50 p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center"
                  >
                    <div className="text-white">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
