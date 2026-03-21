import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import useWindowSize from './hooks/useWindowSize';
import useInView from './hooks/useInView';

const PROJETS = [
    {
    title: 'Simulateur de modalité de transport',
    description: 'Application de simulation de choix de modalité de transport en fonction de critères environnementaux, économiques et temporels ainsi que de préférences personnelles.',
    tags: ['Flutter', 'Python', 'Json', 'API', 'MQTT'],
    icon: 'pi pi-car',
    color: '#6366f1',
  },
  {
    title: 'Plateforme web de quiz interactifs',
    description: 'Plateforme web de quiz interactifs avec interface moderne, gestion des utilisateurs et système de notation en temps réel pour l\'afterwork de l\'entreprise Viveris.',
    tags: ['Vue.js', 'Spring Boot', 'Mongodb', 'Docker', 'SonarQube', 'Gitlab CI/CD'],
    icon: 'pi pi-question-circle',
    color: '#22d3ee',
  },
]

// Composant wrapper EN DEHORS de Projects()
function AnimatedCard({ projet }) {
  const [ref, isVisible] = useInView()
  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <Card
        style={{
          background: 'rgba(99,102,241,0.05)',
          border: '1px solid rgba(99,102,241,0.15)',
          borderTop: `3px solid ${projet.color}`,
        }}
        header={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '1.25rem 1.25rem 0',
          }}>
            <div style={{
              background: `${projet.color}20`,
              border: `1px solid ${projet.color}40`,
              borderRadius: 10,
              padding: 10,
            }}>
              <i className={projet.icon} style={{ color: projet.color, fontSize: 22 }} />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: 16 }}>{projet.title}</h3>
          </div>
        }
      >
        <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '1rem' }}>
          {projet.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {projet.tags.map(tag => (
            <Tag
              key={tag}
              value={tag}
              style={{
                background: `${projet.color}15`,
                color: projet.color,
                border: `1px solid ${projet.color}30`,
                fontSize: 11,
              }}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default function Projects() {
    const [refTitre, titreVisible] = useInView()
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="projets" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>

      {/* En-tête avec animation */}
      <div
        ref={refTitre}
        className={`fade-in ${titreVisible ? 'visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Tag
          value="Portfolio"
          style={{
            background: 'rgba(99,102,241,0.1)',
            color: '#a5b4fc',
            border: '1px solid rgba(99,102,241,0.3)',
            marginBottom: 16,
          }}
        />
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>
          Mes Projets
        </h2>
        <p style={{ color: '#94a3b8', marginTop: 8 }}>
          Une sélection de mes réalisations récentes
        </p>
      </div>

      {/* Cartes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1.5rem',
      }}>
        {PROJETS.map(projet => (
          <AnimatedCard key={projet.title} projet={projet} />
        ))}
      </div>

    </section>
  )
}
