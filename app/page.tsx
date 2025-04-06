import { Navbar } from "@/components/navbar";
import { About } from "@/app/(sections)/about";
import { Projects } from "@/app/(sections)/projects";
import { Skills } from "@/app/(sections)/skills";
import { Footer } from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Experience } from "./(sections)/experience";
import Education from "./(sections)/education";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <main className="min-h-scree">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-24 py-16">
          <TracingBeam>
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={300}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <About />
            </Vortex>
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
