import { content } from "@/lib/content";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const { person, about, skills, projects, experience, contact } = content;

  return (
    <>
      <Navbar name={person.name} />
      <main id="main">
        <Hero person={person} />
        <About about={about} person={person} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact contact={contact} person={person} />
      </main>
      <Footer person={person} />
    </>
  );
}
