import { Button } from "primereact/button";
import { useState } from "react";
import useWindowSize from "./hooks/useWindowSize.js";


const NAV_LINKS = [
  { label: 'À propos', id: 'apropos' },
  { label: 'Parcours', id: 'apropos-detail' },
  { label: 'Projets', id: 'projets' },
  { label: 'Compétences', id: 'competences' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const width = useWindowSize();
    const isMobile = width < 768;

    const scrollVers = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOuvert(false);
    }

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            background: 'rgba(10,10,15,0.85)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(99,102,241,0.2)',
            zIndex: 100,
        }}>
            {/* Logo */}
            <span style={{ fontWeight: 700, fontSize: 18, color: '#a5b4fc' }}>
                Quentin Kouzmitch
                </span>

            {/* Liens  dekstop*/}
            {!isMobile && (
                <div style={{ display: 'flex', gap: 8 }}>
                {NAV_LINKS.map(lien => (
                    <Button key={lien.id} label={lien.label} text onClick={() => scrollVers(lien.id)}/>
                ))}
                </div>
            )}

            {/* Burger mobile */}
            {isMobile && (
                <Button icon={menuOuvert ? 'pi pi-times' : 'pi pi-bars'} text onClick={() => setMenuOuvert(!menuOuvert)}/>
            )}

            {/* Menu mobile déroulant*/}
            {isMobile && menuOuvert && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0, left: 0,
                    background: 'rgba(10,10,15,0.97)',
                    borderBottom: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1rem',
                    gap: 4,
                }}>
                    {NAV_LINKS.map(lien => (
                        <Button key={lien.id} label={lien.label} text style={{ justifyContent: 'flex-start'}} onClick={() => scrollVers(lien.id)}/>
                    ))}
                </div>
            )}

        </nav>
    )
}