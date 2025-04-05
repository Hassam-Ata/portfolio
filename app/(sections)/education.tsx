import { SectionTitle } from "@/components/section-title";
import { BookOpen, CalendarRange, GraduationCap, School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const courses = [
    "DSA",
    "Operating Systems",
    "OOPs",
    "Computer Networks",
    "Software Engineering",
    "DBMS",
  ];
  return (
    <section id="about" className="pt-20">
      {/* Education Section */}
      <SectionTitle>Education</SectionTitle>

      <div className="mx-auto grid gap-6 md:max-w-[64rem] md:grid-cols-1 mt-4">
        <Card className="border border-white bg-black/50 p-6 relative">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-500/20 text-purple-400">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    NED University of Engineering and Technology
                  </h3>
                  <p className="text-gray-400">B.E - Software Engineering</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="self-start md:self-center text-sm border-purple-500/50 bg-purple-500/10 text-purple-400"
              >
                <CalendarRange className="w-3 h-3 mr-1" />
                2022 – 2026
              </Badge>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-medium text-lg">CGPA: 3.5</span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <h3 className="font-medium text-lg">Coursework</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 py-3 px-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default Education;
