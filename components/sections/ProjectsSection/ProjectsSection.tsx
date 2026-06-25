"use client";

import { useState } from "react";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { projects } from "@/data/portfolio";
import styles from "./ProjectsSection.module.css";

const PROJECTS_PER_PAGE = 6;

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  return (
    <section id="projets" className={styles.section}>
      <SectionHeader
        label="Projets"
        title="Des réalisations concrètes qui montrent ma progression."
        description="Chaque projet représente une compétence travaillée : autonomie, logique backend, interface, gestion des données ou collaboration en équipe."
      />

      <div className={styles.grid} key={currentPage}>
        {currentProjects.map((project, index) => {
          const CardWrapper = project.demoUrl ? "a" : "article";
          const cardProps = project.demoUrl
            ? {
                href: project.demoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `${styles.card} ${styles.cardLink} ${"featured" in project && project.featured ? styles.cardFeatured : ""}`,
              }
            : {
                className: `${styles.card} ${"featured" in project && project.featured ? styles.cardFeatured : ""}`,
              };

          return (
            <Reveal direction="up" delay={index * 100} key={project.name}>
              {/* @ts-ignore */}
              <CardWrapper {...cardProps}>
                {/* Animated Scan Line */}
                <div className={styles.scanLine} />

                {"featured" in project && project.featured && (
                  <div className={styles.featuredBadge}>
                    <span>⭐ Projet phare</span>
                  </div>
                )}

                <div className={styles.imageContainer}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Capture d'écran de ${project.name}`}
                      className={styles.cardImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.placeholderGrid} />
                      <span className={styles.placeholderText}>
                        {project.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay Card Number */}
                  <span className={styles.cardNumber}>{String(startIndex + index + 1).padStart(2, "0")}</span>

                  {/* Overlay demo URL indicator */}
                  {project.demoUrl && (
                    <div className={styles.demoBadge}>
                      <span>Démo Live ↗</span>
                    </div>
                  )}
                </div>

                <div className={styles.content}>
                  <div className={styles.headerBlock}>
                    <span className={styles.category}>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p className={styles.description}>{project.description}</p>
                  </div>

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
              </CardWrapper>
            </Reveal>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`${styles.pageButton} ${styles.navButton}`}
            aria-label="Page précédente"
          >
            ← Précédent
          </button>
          
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ""}`}
                aria-label={`Aller à la page ${page}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`${styles.pageButton} ${styles.navButton}`}
            aria-label="Page suivante"
          >
            Suivant →
          </button>
        </div>
      )}
    </section>
  );
}
