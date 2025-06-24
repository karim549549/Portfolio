import Header from "@/components/custom/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionBeamIndicator } from "@/components/home/SectionBeamIndicator";
import { Spotlight } from "@/components/ui/spotlight";
import { ContactSection } from '@/components/home/ContactSection';
import { WorkSection } from '@/components/home/WorkSection';

const sections = [
  { id: "home", title: "home", content: <HeroSection /> },
  { id: "work", title: "work", content: <WorkSection /> },
  { id: "contact", title: "contact", content: <ContactSection /> },
];

export default function Home() {
  return (
    <div className=" bg-slate-100/90 dark:bg-black">
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
