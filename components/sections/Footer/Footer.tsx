import { navigationItems, profile } from "@/data/portfolio";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <strong className={styles.brand}>{profile.fullName}</strong>
        <p className={styles.desc}>Portfolio développeur fullstack, réseau et sécurité informatique.</p>
        <p className={styles.copy}>&copy; {currentYear} — Tous droits réservés.</p>
      </div>
      <div className={styles.links}>
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
