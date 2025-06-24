import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.body.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        padding: '0.5em 1em',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        background: dark ? '#222' : '#f5f5f5',
        color: dark ? '#fff' : '#222',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}