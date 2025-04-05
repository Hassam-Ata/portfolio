import { Navbar } from "@/components/navbar";
import { About } from "@/app/(sections)/about";
import { Projects } from "@/app/(sections)/projects";
import { Skills } from "@/app/(sections)/skills";
import { Footer } from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Experience } from "./(sections)/experience";
import Education from "./(sections)/education";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-24 py-16">
          <TracingBeam>
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
          </TracingBeam>
        </div>
        <Footer />
      </div>
    </main>
  );
}
