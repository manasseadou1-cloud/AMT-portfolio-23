import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { projects } from "@/data/portfolio";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section id="projets" className={styles.section}>
      <SectionHeader
        label="Projets"
        title="Des réalisations concrètes qui montrent ma progression."
        description="Chaque projet représente une compétence travaillée : autonomie, logique backend, interface, gestion des données ou collaboration en équipe."
      />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal direction="up" delay={index * 100} key={project.name}>
            <article className={styles.card}>
              {/* Animated Scan Line */}
              <div className={styles.scanLine} />

              <div className={styles.visual} aria-hidden="true">
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.visualGrid} />
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.stack}>
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                
                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Résultat :</span>
                  <strong className={styles.resultText}>{project.result}</strong>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
