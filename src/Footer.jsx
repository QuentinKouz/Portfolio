import { Button } from "primereact/button";

const NAV_LINKS = [
  { label: 'À propos', id: 'apropos' },
  { label: 'Parcours', id: 'apropos-detail' },
  { label: 'Projets', id: 'projets' },
  { label: 'Compétences', id: 'competences' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
    const scrollVers = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <footer style={{
            borderTop: '1px solid rgba(99,102,241,0.2)',
            padding: '2rem',
            textAlign: 'center',
        }}>

            {/* Nom */}
            <p style={{ fontWeight: 700, fontSize: 18, color: '#a5b4fc', marginBottom: '1rem' }}>
                Quentin Kouzmitch
            </p>


            {/* Liens */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, marginBottom: '1rem' }}>
                {NAV_LINKS.map(lien => (
                    <Button key={lien.id} label={lien.label} text size="small"onClick={() => scrollVers(lien.id)}/>
                ))}
            </div>

            {/* Réseaux sociaux */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 8,
                marginBottom: '1.5rem',
            }}>
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
            </div>

            {/* Copyright */}
            <p style={{ color: '#475569', fontSize: 13 }}>
                © {new Date().getFullYear()} Quentin Kouzmitch — Fait avec React & PrimeReact
            </p>

        </footer>
  )
}