import { useEffect, useState } from 'react';

export function App() {
  const [health, setHealth] = useState<string>('checking…');

  useEffect(() => {
    // Hits the NestJS API through the Vite dev proxy (see vite.config.ts).
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth('unreachable'));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>🎧 Spotify Tracker</h1>
      <p>
        API status: <strong>{health}</strong>
      </p>
    </main>
  );
}
