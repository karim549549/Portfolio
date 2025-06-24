import Header from "@/components/custom/Header";
import { HeroSection } from "@/components/custom/HeroSection";
import { SectionBeamIndicator } from "@/components/ui/SectionBeamIndicator";
import { Spotlight } from "@/components/ui/spotlight";

const sections = [
  { id: "home", title: "home", content: <HeroSection /> },
  { id: "about", title: "about", content: <div className="h-[80vh] flex items-center justify-center text-4xl text-white">About Section</div> },
  { id: "projects", title: "projects", content: <div className="h-[80vh] flex items-center justify-center text-4xl text-white">Projects Section</div> },
];

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main className="overflow-hidden relative">
        <Spotlight />
        <div className="max-w-7xl mx-auto flex">
          <SectionBeamIndicator sections={sections} />
        </div>
      </main>
    </div>
  );
}
