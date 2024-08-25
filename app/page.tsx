import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperiences from "@/components/WorkExperiences";


export default function Home() {
  return (
    <>
    <div>
        <Hero/>
        <About/>
     <WorkExperiences/>
        <Projects/>
        <Contact/>
    </div>
    </>
  );
}
