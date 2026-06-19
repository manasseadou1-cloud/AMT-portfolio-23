import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { certifications, interests, languages, training } from "@/data/portfolio";
import styles from "./TrainingSection.module.css";

export function TrainingSection() {
  return (
    <section id="parcours" className={styles.section}>
      <SectionHeader label="Parcours" title="Une formation pratique, entre développement, réseau et sécurité." />

      <div className={styles.layout}>
        <div className={styles.timeline}>
          {training.map((item, index) => (
            <Reveal direction="right" delay={index * 150} key={`${item.school}-${item.period}`}>
              <article className={styles.timelineArticle}>
                <span className={styles.period}>{item.period}</span>
                <h3>{item.title}</h3>
                <strong className={styles.school}>{item.school}</strong>
                <p>{item.details}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <aside className={styles.side}>
          <Reveal direction="left" delay={100}>
            <article className={styles.panel}>
              <h3>Certifications</h3>
              <ul className={styles.certList}>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <article className={styles.panel}>
              <h3>Langues</h3>
              <div className={styles.langList}>
                {languages.map((language) => (
                  <p key={language.name} className={styles.langRow}>
                    <strong className={styles.langName}>{language.name}</strong>
                    <span className={styles.langLevel}>{language.level}</span>
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal direction="left" delay={300}>
            <article className={styles.panel}>
              <h3>Centres d'intérêt</h3>
              <div className={styles.tags}>
                {interests.map((interest) => (
                  <span key={interest} className={styles.interestTag}>
                    {interest}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
