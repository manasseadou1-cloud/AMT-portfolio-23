import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { skillGroups } from "@/data/portfolio";
import styles from "./SkillsSection.module.css";

// Helper to get inline SVG icons for each group
function getGroupIcon(title: string) {
  switch (title.toLowerCase()) {
    case "frontend":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="2" height="14" width="20" rx="2" y="3" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m10 7-3 3 3 3" />
          <path d="m14 13 3-3-3-3" />
        </svg>
      );
    case "backend":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="2" height="8" width="20" rx="2" y="2" />
          <rect x="2" height="8" width="20" rx="2" y="14" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "données & outils":
    case "donnees & outils":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "réseau & sécurité":
    case "reseau & securite":
    case "réseau & cybersécurité":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <path d="m12 14 3-3-3-3" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}

export function SkillsSection() {
  return (
    <section id="competences" className={styles.section}>
      <SectionHeader
        label="Compétences"
        title="Des bases solides pour créer, comprendre et sécuriser."
        description="Mes compétences couvrent l'interface, le serveur, les bases de données et les notions réseau utiles pour réfléchir à une application complète de bout en bout."
      />

      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Reveal direction="up" delay={index * 100} key={group.title}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {getGroupIcon(group.title)}
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <p className={styles.description}>{group.description}</p>
                </div>
              </div>
              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
