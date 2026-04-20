import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import SalesExperience from "@/components/SalesExperience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import WorkSamples from "@/components/WorkSamples";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-700 dark:selection:text-blue-300">
      <Navbar />
      <div className="container mx-auto px-6 max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SalesExperience />
        <WorkSamples />
        <Projects />
        <Education />
        <Awards />
      </div>
      <Footer />
    </main>
  );
}
