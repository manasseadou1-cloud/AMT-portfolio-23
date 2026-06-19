import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { Footer } from "@/components/sections/Footer/Footer";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { Navigation } from "@/components/sections/Navigation/Navigation";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection/SkillsSection";
import { TrainingSection } from "@/components/sections/TrainingSection/TrainingSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrainingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

