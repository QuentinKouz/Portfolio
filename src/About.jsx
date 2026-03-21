import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import useWindowSize from "./hooks/useWindowSize";
import photo from "./assets/Photo_portfolio.jpg";
import useInView from "./hooks/useInView";

const CV_NOM = "CV_KOUZMITCH_Quentin.pdf";

const PARCOURS = [
  {
    annee: '2025 — Aujourd\'hui',
    titre: 'Master 1 IHM',
    lieu: 'Université Paul Sabatier, Toulouse',
    icon: 'pi pi-graduation-cap',
    color: '#6366f1',
  },
  {
    annee: '2021 — 2025',
    titre: 'Licence Informatique',
    lieu: 'Université Paul Sabatier, Toulouse',
    icon: 'pi pi-graduation-cap',
    color: '#a855f7',
  },
  {
    annee: '2021',
    titre: 'Bac spécialités NSI & Maths',
    lieu: 'Mention obtenue',
    icon: 'pi pi-verified',
    color: '#22d3ee',
  },
]

function AnimatedEtape({ etape }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      style={{
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        background: 'rgba(99,102,241,0.05)',
        border: '1px solid rgba(99,102,241,0.15)',
        borderLeft: `3px solid ${etape.color}`,
        borderRadius: 12,
        padding: '1rem',
      }}
    >
      <div style={{
        background: `${etape.color}20`,
        border: `1px solid ${etape.color}40`,
        borderRadius: 8,
        padding: 8,
        flexShrink: 0,
      }}>
        <i className={etape.icon} style={{ color: etape.color, fontSize: 16 }} />
      </div>
      <div>
        <p style={{ fontWeight: 600, fontSize: 15, color: '#f1f5f9', marginBottom: 2 }}>
          {etape.titre}
        </p>
        <p style={{ fontSize: 13, color: '#94a3b8' }}>{etape.lieu}</p>
        <p style={{ fontSize: 12, color: etape.color, marginTop: 2 }}>{etape.annee}</p>
      </div>
    </div>
  )
}

export default function About() {
  const [refTitre, titreVisible] = useInView()
  const [refPhoto, photoVisible] = useInView()
  const [refTexte, texteVisible] = useInView()
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="apropos-detail" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
      maxWidth: 1100,
      margin: '0 auto',
    }}>

      <div
        ref={refTitre}
        className={`fade-in ${titreVisible ? 'visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Tag
          value="À propos"
          style={{
            background: 'rgba(99,102,241,0.1)',
            color: '#a5b4fc',
            border: '1px solid rgba(99,102,241,0.3)',
            marginBottom: 16,
          }}
        />
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>
          Qui suis-je ?
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
        gap: '3rem',
        alignItems: 'start',
      }}>

        {/* Colonne gauche — photo */}
        <div
          ref={refPhoto}
          className={`fade-in ${photoVisible ? 'visible' : ''}`}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
        >
          <div style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            padding: 3,
          }}>
            <img
              src={photo}
              alt="Quentin Kouzmitch"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          <Button
            label="Télécharger mon CV"
            icon="pi pi-download"
            onClick={() => {
              const a = document.createElement('a')
              a.href = `/${CV_NOM}`
              a.download = CV_NOM
              a.click()
            }}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              border: 'none',
              width: '100%',
              justifyContent: 'center',
            }}
          />
        </div>

        {/* Colonne droite — texte + parcours */}
        <div
          ref={refTexte}
          className={`fade-in ${texteVisible ? 'visible' : ''}`}
        >
          <p style={{
            color: '#94a3b8',
            lineHeight: 1.8,
            fontSize: 16,
            marginBottom: '2rem',
          }}>
            Étudiant en Master Informatique parcours Interaction Homme-Machine (IHM) à 
            l'Université Paul Sabatier de Toulouse, je me passionne pour le développement 
            d'interfaces modernes et l'expérience utilisateur. Mon parcours, du Bac 
            spécialités NSI & Maths jusqu'à la Licence Informatique, m'a permis de construire 
            des bases solides en développement Full-Stack. Aujourd'hui je cherche à mettre 
            mes compétences au service de projets ambitieux.
          </p>

          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: '1.25rem', color: '#f1f5f9' }}>
            Mon parcours
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PARCOURS.map(etape => (
              <AnimatedEtape key={etape.titre} etape={etape} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}