import { navigationItems, profile } from "@/data/portfolio";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navbar} aria-label="Navigation principale">
        <a className={styles.brand} href="#accueil">
          <span className={styles.brandGlow}></span>
          {profile.firstName}
        </a>
        <div className={styles.links}>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
