import { useTheme } from "./context/useTheme";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
        style={{
            position: 'relative',
            width: 56,
            height: 28,
            borderRadius: 100,
            border: 'none',
            cursor: 'pointer',
            background: isDark ? 'linear-gradient(135deg, #1e1b4b, #312e81)' : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            transition: 'background 0.4s ease',
            padding: 0,
            flexShrink: 0,
        }}
    >
        {/* Étoile ou nuage */}
      <span style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: isDark ? 6 : 'auto',
        right: isDark ? 'auto' : 6,
        fontSize: 11,
        transition: 'all 0.4s ease',
        opacity: 0.8,
      }}>
        {isDark ? '✦' : '☁️'}
      </span>

      {/* Curseur soleil/lune */}
      <span style={{
        position: 'absolute',
        top: '50%',
        transform: `translateY(-50%) translateX(${isDark ? 30 : 2}px)`,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: isDark
          ? 'linear-gradient(135deg, #c7d2fe, #e0e7ff)'
          : 'linear-gradient(135deg, #fef08a, #fde047)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        transition: 'all 0.4s ease',
        boxShadow: isDark
          ? '0 0 8px rgba(199,210,254,0.5)'
          : '0 0 12px rgba(251,191,36,0.6)',
      }}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}