"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/section-title";
import {
  BriefcaseIcon,
  SearchCodeIcon,
  DatabaseIcon,
  ServerIcon,
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="pt-20">
      <SectionTitle>Experience</SectionTitle>

      <div className="mx-auto grid gap-6 md:max-w-[64rem] md:grid-cols-1 mt-3">
        <Card className="border border-white  p-6 relative">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full text-indigo-500">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Intern at NCL-NED</h3>
                  <p className="text-gray-400">MERN Developer</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-sm border-indigo-500/50 bg-indigo-500/10 text-indigo-400"
              >
                Sept. 2024 - Nov. 2024
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-full bg-indigo-500/10 text-indigo-400 shrink-0">
                  <SearchCodeIcon className="w-4 h-4" />
                </div>
                <p>
                  Developed <strong>STORM MACHINE</strong>, a cargo truck
                  showcase platform with a search feature using{" "}
                  <span className="text-indigo-400">React.js</span>, Modular
                  CSS, and React Router DOM.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-full bg-indigo-500/10 text-indigo-400 shrink-0">
                  <ServerIcon className="w-4 h-4" />
                </div>
                <p>
                  Built a backend with{" "}
                  <span className="text-indigo-400">Node.js</span> and{" "}
                  <span className="text-indigo-400">Express.js</span>,
                  implementing RESTful APIs for efficient data handling.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-full bg-indigo-500/10 text-indigo-400 shrink-0">
                  <DatabaseIcon className="w-4 h-4" />
                </div>
                <p>
                  Designed and managed a relational database using{" "}
                  <span className="text-indigo-400">MySQL</span> and Sequelize
                  ORM, ensuring structured and scalable data storage.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
