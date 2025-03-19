import { useState } from 'react'
import { motion } from 'framer-motion'
import Deck from './components/Deck'
import { tarotCards } from './data/cards'

function App() {
  const [isReading, setIsReading] = useState(false)

  const containerStyle = {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #111827, #000000)',
    color: 'white'
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(to right, #ede9fe, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const buttonStyle = {
    padding: '1.5rem 3rem',
    background: 'linear-gradient(to right, #7c3aed, #8b5cf6)',
    borderRadius: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'white',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    cursor: 'pointer',
    border: 'none'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(to right, #8b5cf6, #9333ea)',
    transform: 'scale(1.05)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <motion.h1 
          style={titleStyle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Tarot Vibe
        </motion.h1>

        {!isReading ? (
          <motion.div 
            style={{ padding: '3rem 0', display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setIsReading(true)}
              style={buttonStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, buttonHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, buttonStyle);
              }}
            >
              Begin Reading
            </button>
          </motion.div>
        ) : (
          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Deck cards={tarotCards} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default App
