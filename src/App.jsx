import { useId, useRef, useState } from 'react'
import './App.css'

// Edita estos datos con su historia y sus fotos.
const COUPLE = {
  names: 'Julio & Cesia',
  since: 'No existe un manual para amar pero si existe mejorar por quien quieres en tu vida',
  dedication:
    'Entre risas, abrazos y locuras encontré mi lugar favorito: a tu lado. Este álbum es apenas una pequeña parte de todo lo que hemos vivido juntos, y una promesa de todo lo que aún nos falta por vivir. Te amo, hoy y siempre.',
}

// Coloca tu canción en /public/music/ (mp3) y pon aquí su nombre de archivo.
const SONG_SRC = '/music/cancion.mp3'

// Convierte una ruta como "/images/foto.jpg" en una ruta válida sin importar
// si el sitio vive en la raíz del dominio o en una subcarpeta (GitHub Pages).
function withBase(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

// Para agregar una foto: coloca el archivo en /public/images/ y agrega
// una entrada aquí con su ruta ("/images/nombre.jpg") y un texto.
// Ordenadas por fecha (de la más antigua a la más reciente). Escribe el
// texto que quieras en cada "caption".
const PHOTOS = [
  { id: 1, src: '/images/IMG_4355.jpg', caption: 'Noches de descanso a tu lado' },
  { id: 2, src: '/images/IMG_4358.jpg', caption: 'Bailando la vida juntos' },
  { id: 3, src: '/images/IMG_4360.jpg', caption: 'Nuestro primer viaje, el inicio de mil aventuras' },
  { id: 4, src: '/images/IMG_4362.jpg', caption: 'Nuestras citas favoritas' },
  { id: 5, src: '/images/IMG_4363.jpg', caption: 'De nuestras mejores locuras' },
  { id: 6, src: '/images/IMG_4364.jpg', caption: 'Que jamás te falten flores' },
  { id: 7, src: '/images/IMG_4365.jpg', caption: 'Marcados para siempre, tú y yo' },
  { id: 8, src: '/images/IMG_4368.jpg', caption: 'La delicadeza con la que ves la vida' },
  {
    id: 9,
    src: '/images/f0318960-5035-4f1f-aa51-1a3d7ec02aec.JPG',
    caption: 'Nuestro reencuentro, como si nunca nos hubiéramos separado',
  },
  {
    id: 10,
    src: '/images/9e0e0747-3bd7-4529-8373-2460487b4cce.JPG',
    caption: 'Besos sin explicación, de esos que solo se sienten',
    focus: '85% center',
  },
  {
    id: 11,
    src: '/images/bfb52788-06c1-49a4-ba82-91b930ef24c4.JPG',
    caption: 'Noches de confusión donde, contigo, todo tiene sentido',
  },
  {
    id: 12,
    src: '/images/79637915-8694-4adc-ae97-daad0dfdcb4b.JPG',
    caption: 'Recordando por qué no dejo de mirarte',
  },
  { id: 13, src: '/images/16c9f11b-e8d4-4c18-aa78-47d4b41abb22.JPG', caption: 'La "amenaza" familiar' },
  {
    id: 14,
    src: '/images/7124f738-279b-4cc8-bb56-41c35cd784bc.JPG',
    caption: 'Soñando cositas para nuestro hogar algún día',
  },
  { id: 15, src: '/images/7788b86c-ed28-47ee-b204-1c530a74c3a9.JPG', caption: 'Incómodos, pero juntos' },
  {
    id: 16,
    src: '/images/0186fc11-0260-42f7-967a-3f401f195089.JPG',
    caption: 'Juegos y locuras que solo nosotros entendemos',
  },
  { id: 17, src: '/images/IMG_4769.JPG', caption: 'Salidas inolvidables' },
  { id: 18, src: '/images/3bf39dc0-e7eb-4c3a-aa0e-94ceac24a916.JPG', caption: 'Ojos que hablan de amor' },
]

function PhotoCard({ src, caption, focus }) {
  const [broken, setBroken] = useState(false)

  return (
    <figure className="card">
      <div className="card-image">
        {broken ? (
          <div className="card-placeholder">
            <span>📷</span>
            <small>Agrega la imagen en /public/images</small>
          </div>
        ) : (
          <img
            src={withBase(src)}
            alt={caption}
            style={focus ? { objectPosition: focus } : undefined}
            onError={() => setBroken(true)}
            loading="lazy"
          />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function LilyFlower({ className }) {
  const gradientId = useId()
  const petalAngles = [0, 60, 120, 180, 240, 300]

  return (
    <svg className={className} viewBox="0 0 120 140" aria-hidden="true">
      <path
        d="M60 90 C 48 105, 40 118, 30 132"
        fill="none"
        stroke="#9cae8a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M46 108 C 38 104, 30 106, 24 114 C 32 118, 42 116, 46 108 Z" fill="#9cae8a" />
      <path d="M50 118 C 42 118, 35 123, 32 132 C 41 132, 49 128, 50 118 Z" fill="#8aa279" />
      <g transform="translate(60 62)">
        {petalAngles.map((angle) => (
          <path
            key={angle}
            d="M0 0 C -9 -18, -8 -40, 0 -52 C 8 -40, 9 -18, 0 0 Z"
            fill={`url(#${gradientId})`}
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="7" fill="#e8879f" />
        {petalAngles.slice(0, 5).map((angle) => (
          <g key={`s-${angle}`} transform={`rotate(${angle + 30})`}>
            <line x1="0" y1="0" x2="0" y2="-16" stroke="#b23a5e" strokeWidth="1.4" />
            <circle cx="0" cy="-16" r="1.8" fill="#7a2c46" />
          </g>
        ))}
      </g>
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#fdeef3" />
          <stop offset="100%" stopColor="#f2a3c0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function MusicButton() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setMissing(true))
    }
  }

  return (
    <div className="music">
      <audio ref={audioRef} src={withBase(SONG_SRC)} loop onError={() => setMissing(true)} />
      <button
        type="button"
        className={`music-button${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
      >
        <span className="music-note">{playing ? '⏸' : '♫'}</span>
      </button>
      {missing && <small className="music-hint">Agrega tu canción en /public/music/cancion.mp3</small>}
    </div>
  )
}

function App() {
  return (
    <div className="album">
      <MusicButton />

      <header className="dedication">
        <LilyFlower className="flower flower-left" />
        <LilyFlower className="flower flower-right" />
        <p className="eyebrow">Nuestro álbum</p>
        <h1>{COUPLE.names}</h1>
        <p className="since">Mientras yo viva, tú no estás sola.</p>
        <p className="dedication-text">{COUPLE.dedication}</p>
      </header>

      <main className="gallery">
        {PHOTOS.map((photo) => (
          <PhotoCard key={photo.id} src={photo.src} caption={photo.caption} focus={photo.focus} />
        ))}
      </main>

      <footer className="footer">
        <LilyFlower className="flower flower-footer" />
        <p>Nuestro pinterest 💛</p>
      </footer>
    </div>
  )
}

export default App
