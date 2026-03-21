import { Tag } from "primereact/tag";
import useWindowSize from "./hooks/useWindowSize";
import useInView from "./hooks/useInView";

const COMPETENCES = [
    {
        categorie: 'Frontend',
        icon: 'pi pi-desktop',
        color: '#6366f1',
        items: ['React', 'Vue.js', 'Flutter', 'HTML/CSS', 'Tailwind', 'PrimeReact', 'JavaScript', 'TypeScript', 'Bulma'],
    },
    {
        categorie: 'Backend',
        icon: 'pi pi-server',
        color: '#22d3ee',
        items: ['Node.js', 'Spring Boot', 'REST API', 'JSON', 'Java', 'Java', 'Python'],
    },
    {
        categorie: 'Bases de données',
        icon: 'pi pi-database',
        color: '#a855f7',
        items: ['MySQL', 'MongoDB'],
    },
    {
        categorie: 'Outils & DevOps',
        icon: 'pi pi-wrench',
        color: '#f59e0b',
        items: ['Git', 'Docker', 'SonarQube', 'Gitlab CI/CD', 'MQTT'],
    },
    {
        categorie: 'Design & Méthode',
        icon: 'pi pi-pen-to-square',
        color: '#f43f5e',
        items: ['Balsamiq', 'Agile', 'Scrum', 'UML', 'Maquettage', 'Prototypage', 'UX/UI'],
    },
    {
        categorie: 'Langues',
        icon: 'pi pi-globe',
        color: '#10b981',
        items: ['Français (natif)', 'Anglais (B1)'],
    },
]

function AnimatedBloc({ bloc }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      style={{
        background: 'rgba(99,102,241,0.05)',
        border: '1px solid rgba(99,102,241,0.15)',
        borderRadius: 16,
        padding: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
        <div style={{
          background: `${bloc.color}20`,
          border: `1px solid ${bloc.color}40`,
          borderRadius: 8,
          padding: '6px 10px',
        }}>
          <i className={bloc.icon} style={{ color: bloc.color, fontSize: 16 }} />
        </div>
        <span style={{ fontWeight: 600, fontSize: 15 }}>{bloc.categorie}</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {bloc.items.map(item => (
          <span
            key={item}
            style={{
              background: `${bloc.color}10`,
              border: `1px solid ${bloc.color}40`,
              color: bloc.color,
              borderRadius: 8,
              padding: '4px 12px',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [refTitre, titreVisible] = useInView()
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="competences" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>

      <div
        ref={refTitre}
        className={`fade-in ${titreVisible ? 'visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Tag
          value="Tech Stack"
          style={{
            background: 'rgba(168,85,247,0.1)',
            color: '#d8b4fe',
            border: '1px solid rgba(168,85,247,0.3)',
            marginBottom: 16,
          }}
        />
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>
          Compétences
        </h2>
        <p style={{ color: '#94a3b8', marginTop: 8 }}>
          Les technologies, outils, méthodes et langues avec lesquels je travaille
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1.5rem',
      }}>
        {COMPETENCES.map(bloc => (
          <AnimatedBloc key={bloc.categorie} bloc={bloc} />
        ))}
      </div>

    </section>
  )
}