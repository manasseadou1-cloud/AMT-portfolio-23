import { highlights, profile } from "@/data/portfolio";
import { Reveal } from "../../ui/Reveal/Reveal";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.content}>
        <Reveal direction="up" delay={0}>
          <p className={styles.eyebrow}>{profile.role}</p>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <h1 className={styles.title}>{profile.fullName}</h1>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <p className={styles.text}>{profile.headline}</p>
        </Reveal>

        <Reveal direction="up" delay={450}>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projets">
              Voir mes projets
            </a>
            <a className={styles.secondaryButton} href="#contact">
              Me contacter
            </a>
            <a
              className={styles.downloadButton}
              href="/Informaticien_CV_ADOU.pdf"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal direction="left" delay={300}>
        <aside className={styles.identityCard} aria-label="Présentation rapide">
          <div className={styles.photoBox}>
            <svg className={styles.hudSvg} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#35f27d" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#35f27d" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Grid background */}
              <path d="M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400" stroke="#35f27d" strokeWidth="0.5" strokeOpacity="0.05" />
              <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350" stroke="#35f27d" strokeWidth="0.5" strokeOpacity="0.05" />

              {/* Radar Sweep */}
              <circle cx="200" cy="200" r="140" fill="url(#radar-glow)" />
              <circle cx="200" cy="200" r="140" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.2" />
              <circle cx="200" cy="200" r="95" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.15" />
              <circle cx="200" cy="200" r="50" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.1" />

              {/* Outer animated ring */}
              <circle cx="200" cy="200" r="160" stroke="#35f27d" strokeWidth="2" strokeDasharray="40 120" strokeOpacity="0.4" className={styles.spinSlow} />
              <circle cx="200" cy="200" r="160" stroke="#35f27d" strokeWidth="1" strokeDasharray="15 35" strokeOpacity="0.2" className={styles.spinSlowReverse} />

              {/* Inner rotating brackets */}
              <path d="M 120 200 A 80 80 0 0 1 280 200" stroke="#35f27d" strokeWidth="2" strokeDasharray="25 15" strokeOpacity="0.6" className={styles.spinFast} />
              <path d="M 280 200 A 80 80 0 0 1 120 200" stroke="#35f27d" strokeWidth="2" strokeDasharray="25 15" strokeOpacity="0.6" className={styles.spinFast} />

              {/* Crosshairs */}
              <line x1="200" y1="20" x2="200" y2="380" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.1" />
              <line x1="20" y1="200" x2="380" y2="200" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.1" />

              {/* Simulated network nodes */}
              <g>
                {/* Central Node */}
                <circle cx="200" cy="200" r="6" fill="#35f27d" />
                <circle cx="200" cy="200" r="14" stroke="#35f27d" strokeWidth="1" className={styles.ping} />

                {/* Connected Nodes */}
                <line x1="200" y1="200" x2="130" y2="130" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <circle cx="130" cy="130" r="4" fill="#35f27d" />
                <circle cx="130" cy="130" r="10" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.4" className={styles.pingDelay1} />

                <line x1="200" y1="200" x2="280" y2="150" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <circle cx="280" cy="150" r="4" fill="#35f27d" />
                <circle cx="280" cy="150" r="10" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.4" className={styles.pingDelay2} />

                <line x1="200" y1="200" x2="260" y2="260" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="260" cy="260" r="4" fill="#35f27d" />

                <line x1="200" y1="200" x2="140" y2="260" stroke="#35f27d" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="140" cy="260" r="4" fill="#35f27d" />
              </g>

              {/* Futuristic HUD Text */}
              <text x="30" y="45" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6">NET.SYS: ACTIVE</text>
              <text x="30" y="60" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6">SEC.SHIELD: SAFE</text>
              <text x="30" y="75" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6">PORT: 22 / 443</text>

              <text x="370" y="335" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6" textAnchor="end">LATENCY: 8ms</text>
              <text x="370" y="350" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6" textAnchor="end">IP: 10.0.8.23</text>
              <text x="370" y="365" fill="#35f27d" fontFamily="monospace" fontSize="9" opacity="0.6" textAnchor="end">LOC: ABIDJAN</text>

              {/* Scanner laser line */}
              <line x1="20" y1="0" x2="380" y2="0" stroke="#35f27d" strokeWidth="1.5" opacity="0.8" className={styles.scanLine} />
            </svg>
            {/* ======================================================
                📸 VOTRE PHOTO — Remplacez l'URL ci-dessous
                   par le chemin de votre image, ex: "/images/ma-photo.jpg"
                   Copiez votre photo dans le dossier public/ du projet
                ====================================================== */}
            <img
              src="/maes.jpeg"
              alt={`Photo de ${profile.firstName}`}
              className={styles.profilePhoto}
            />

            <div className={styles.hudOverlay}>
              <span className={styles.hudTitle}>ADOU.SECURE_CORE</span>
              <span className={styles.hudSubtitle}>Système Réseau &amp; Sécurité opérationnel</span>
            </div>
          </div>
          <div className={styles.quickInfo}>
            {highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
