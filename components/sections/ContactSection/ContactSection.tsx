"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Reveal } from "../../ui/Reveal/Reveal";
import { profile } from "@/data/portfolio";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copier le lien");
  const shareSubject = encodeURIComponent(`Portfolio de ${profile.fullName}`);
  const shareBody = encodeURIComponent(`${profile.fullName} - ${profile.role}`);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Envoi en cours...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Ajout de votre clé d'accès publique Web3Forms
    formData.append("access_key", "d36b17be-4416-40a3-80b7-522f6f0daa20");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Merci ! Votre message a bien été envoyé. Je vous répondrai très bientôt.");
        form.reset(); // Vide les champs du formulaire après envoi réussi
      } else {
        setStatus("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Impossible de contacter le serveur d'envoi. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCopy() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopyStatus("Lien copié ! ✓");
      setTimeout(() => setCopyStatus("Copier le lien"), 2000);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <Reveal direction="right" delay={100}>
        <div className={styles.infoCol}>
          <SectionHeader
            label="Contact"
            title="Prêt à apprendre, contribuer et progresser."
            description="Je suis disponible pour discuter d'une opportunité, d'un stage, d'un projet ou d'une collaboration autour du développement web, mobile, des réseaux ou de la cybersécurité."
          />

          <div className={styles.contactCards}>
            <a href={`mailto:${profile.email}`} className={styles.cardLink}>
              <span className={styles.cardType}>Email</span>
              <span className={styles.cardValue}>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phoneLink}`} className={styles.cardLink}>
              <span className={styles.cardType}>Téléphone</span>
              <span className={styles.cardValue}>{profile.phone}</span>
            </a>
            <div className={styles.cardInfo}>
              <span className={styles.cardType}>Localisation</span>
              <span className={styles.cardValue}>{profile.location}</span>
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardType}>LinkedIn</span>
              <span className={styles.cardValue}>{profile.socialName}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="left" delay={200}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="form-name">Nom</label>
            <input id="form-name" name="name" type="text" placeholder="Votre nom" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="form-email">Email</label>
            <input id="form-email" name="email" type="email" placeholder="votre.email@exemple.com" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="form-message">Message</label>
            <textarea id="form-message" name="message" rows={5} placeholder="Écrivez votre message ici" required />
          </div>
          
          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          
          {status ? <p className={styles.status}>{status}</p> : null}
          
          <div className={styles.shareBox} aria-label="Partager le portfolio">
            <p>Partager ce portfolio</p>
            <div className={styles.shareButtons}>
              <button type="button" onClick={handleCopy} className={styles.copyBtn}>
                {copyStatus}
              </button>
              <a href={`mailto:?subject=${shareSubject}&body=${shareBody}`} className={styles.emailBtn}>
                Partager par mail
              </a>
            </div>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
