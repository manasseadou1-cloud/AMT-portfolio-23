import { Reveal } from "../Reveal/Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <Reveal direction="up" delay={0}>
        <p className={styles.label}>{label}</p>
      </Reveal>
      
      <Reveal direction="up" delay={150}>
        <h2>{title}</h2>
      </Reveal>

      {description ? (
        <Reveal direction="up" delay={300}>
          <p className={styles.description}>{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
