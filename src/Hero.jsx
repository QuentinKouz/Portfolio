import { Button } from "primereact/button";
import useWindowSize from "./hooks/useWindowSize";

export default function Hero() {
    const width = useWindowSize();
    const isMobile = width < 768;

    const scrollVers = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
         <section id="apropos" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: isMobile ? '5rem 1.5rem 2rem' : '6rem 2rem 2rem',
      background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.15) 0%, transparent 60%)',
    }}>

      {/* Badge disponibilité */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(34,197,94,0.1)',
        border: '1px solid rgba(34,197,94,0.25)',
        borderRadius: 100,
        padding: '6px 16px',
        fontSize: 13,
        color: '#86efac',
        marginBottom: '1.5rem',
      }}>
        <span style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#22c55e',
          display: 'inline-block',
        }} />
        Disponible pour de nouveaux projets
      </div>

      {/* Titre */}
      <h1 style={{
        fontSize: isMobile ? '2rem' : '3.5rem',
        fontWeight: 800,
        marginBottom: '1rem',
        lineHeight: 1.2,
        color: '#f1f5f9',
      }}>
        Bonjour, je suis{' '}
        <span style={{
          background: 'linear-gradient(135deg, #a5b4fc, #d8b4fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Quentin Kouzmitch
        </span>
      </h1>

      {/* Sous-titre */}
      <p style={{
        fontSize: isMobile ? '1rem' : '1.2rem',
        color: '#94a3b8',
        maxWidth: 500,
        lineHeight: 1.7,
        marginBottom: '2rem',
      }}>
        Étudiant en Master IHM à Toulouse - passionné par les interfaces modernes et l'expérience utilisateur.
      </p>
      {/* Boutons */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 12,
        width: isMobile ? '100%' : 'auto',
        marginBottom: '2rem',
      }}>
        <Button
          label="Voir mes projets"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => scrollVers('projets')}
          style={{
            width: isMobile ? '100%' : 'auto',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            border: 'none',
          }}
        />
        <Button
          label="Me contacter"
          icon="pi pi-envelope"
          outlined
          onClick={() => scrollVers('contact')}
          style={{
            width: isMobile ? '100%' : 'auto',
            borderColor: 'rgba(165,180,252,0.4)',
            color: '#a5b4fc',
          }}
        />
      </div>

      {/* Réseaux sociaux */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button
          icon="pi pi-linkedin"
          rounded text
          tooltip="LinkedIn"
          tooltipOptions={{ position: 'bottom' }}
          onClick={() => window.open('https://www.linkedin.com/in/quentin-kouzmitch-35014b221', '_blank')}
          style={{ color: '#94a3b8' }}
        />
        <Button
          icon="pi pi-github"
          rounded text
          tooltip="GitHub"
          tooltipOptions={{ position: 'bottom' }}
          onClick={() => window.open('https://github.com/QuentinKouz', '_blank')}
          style={{ color: '#94a3b8' }}
        />
        <Button
          icon="pi pi-envelope"
          rounded text
          tooltip="Email"
          tooltipOptions={{ position: 'bottom' }}
          onClick={() => window.open('mailto:quentinkou@gmail.com', '_blank')}
          style={{ color: '#94a3b8' }}
        />
      </div>

    </section>
  )
}