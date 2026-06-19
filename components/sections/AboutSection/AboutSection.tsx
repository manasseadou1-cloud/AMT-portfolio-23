import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { aboutTexts, profile } from "@/data/portfolio";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="profil" className={styles.section}>
      <SectionHeader label="Profil" title="Un développeur curieux avec une vision sécurité." />
      
      <div className={styles.content}>
        <Reveal direction="right" delay={100}>
          <div className={styles.pitch}>
            <p>{profile.shortPitch}</p>
          </div>
        </Reveal>
        
        <Reveal direction="left" delay={200}>
          <div className={styles.paragraphs}>
            {aboutTexts.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
