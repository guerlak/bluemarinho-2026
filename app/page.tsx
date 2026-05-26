import About from "@/components/About";
import Audiovisual from "@/components/Audiovisual";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import Presentations from "@/components/Presentations";
import Repertoire from "@/components/Repertoire";
import { getPresentations } from "@/actions/get-presentations";


export default async function Home() {
  const presentationSchedule = await getPresentations();
  return (
    <main className="flex flex-col min-h-screen text-white selection:bg-white selection:text-blue-marinho">
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Repertoire />
      <Audiovisual />
      {/* Pass fetched data to the component */}
      <Presentations schedule={presentationSchedule} />
      <Contact />
    </main>
  );
}
