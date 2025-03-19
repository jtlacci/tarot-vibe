import { motion } from 'framer-motion';
import React from 'react';

const getCardPattern = (id) => {
  const patterns = {
    0: ( // The Fool - Spiraling path representing the journey
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M50 10 Q80 40 50 80 Q20 120 50 150" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M30 10 Q60 40 30 80 Q0 120 30 150" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M70 10 Q100 40 70 80 Q40 120 70 150" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    1: ( // The Magician - Intersecting circles representing manifestation
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="80" r="40" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="30" cy="60" r="30" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="70" cy="60" r="30" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    2: ( // The High Priestess - Moon phases
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="40" r="20" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M30 80 A20 20 0 0 1 30 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="70" cy="100" r="15" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    3: ( // The Empress - Flowing vines and flowers
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M10 80 Q50 40 90 80" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M10 100 Q50 60 90 100" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="50" cy="60" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="30" cy="80" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="70" cy="80" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    4: ( // The Emperor - Strong geometric patterns
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <rect x="30" y="40" width="40" height="40" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <rect x="20" y="80" width="60" height="60" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <line x1="50" y1="20" x2="50" y2="140" stroke="#7c3aed" strokeWidth="1"/>
        <line x1="20" y1="80" x2="80" y2="80" stroke="#7c3aed" strokeWidth="1"/>
      </svg>
    )
  };
  return patterns[id] || patterns[0];
};

const Card = ({ card, isFlipped, onClick }) => {
  const cardStyle = {
    perspective: '1000px',
    width: '12rem',
    height: '20rem',
    cursor: 'pointer'
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    borderRadius: '1rem',
    backgroundColor: '#7c3aed',
    border: '3px solid #FFD700',
    boxShadow: `
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 20px rgba(255, 215, 0, 0.4),
      inset 0 0 15px rgba(255, 215, 0, 0.3)
    `,
    animation: 'cardGlow 2s ease-in-out infinite alternate',
    overflow: 'hidden'
  };

  const frontStyle = {
    ...faceStyle,
    backgroundColor: 'white',
    transform: 'rotateY(180deg)'
  };

  const contentStyle = {
    position: 'absolute',
    inset: 0,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #f5f3ff, #ede9fe)',
    borderRadius: 'calc(1rem - 3px)'
  };

  const keyframes = `
    @keyframes cardGlow {
      from {
        box-shadow: 
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06),
          0 0 20px rgba(255, 215, 0, 0.4),
          inset 0 0 15px rgba(255, 215, 0, 0.3);
      }
      to {
        box-shadow: 
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06),
          0 0 30px rgba(255, 215, 0, 0.6),
          inset 0 0 20px rgba(255, 215, 0, 0.4);
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <motion.div
      style={cardStyle}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={innerStyle}>
        {/* Card Back */}
        <div style={faceStyle}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            borderRadius: 'calc(1rem - 3px)',
            overflow: 'hidden',
            background: 'linear-gradient(45deg, #6d28d9, #7c3aed, #8b5cf6)'
          }}>
            <svg viewBox="0 0 100 160" width="100%" height="100%" style={{opacity: 0.25, position: 'absolute'}}>
              {/* Main mandala structure */}
              <circle cx="50" cy="80" r="35" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="80" r="25" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="80" r="15" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="80" r="5" stroke="white" fill="none" strokeWidth="0.5"/>
              
              {/* Decorative rays */}
              {[...Array(16)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="80"
                  x2={50 + 45 * Math.cos((i * Math.PI) / 8)}
                  y2={80 + 45 * Math.sin((i * Math.PI) / 8)}
                  stroke="white"
                  strokeWidth="0.5"
                />
              ))}
              
              {/* Top and bottom symbols */}
              <circle cx="50" cy="25" r="12" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="25" r="8" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="25" r="4" stroke="white" fill="none" strokeWidth="0.5"/>
              
              <circle cx="50" cy="135" r="12" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="135" r="8" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="50" cy="135" r="4" stroke="white" fill="none" strokeWidth="0.5"/>
              
              {/* Small decorative dots */}
              <circle cx="50" cy="25" r="2" fill="white"/>
              <circle cx="50" cy="135" r="2" fill="white"/>
              
              {/* Corner flourishes */}
              {/* Top left */}
              <path d="M20 20 Q35 20 35 35" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M25 25 Q35 25 35 35" stroke="white" fill="none" strokeWidth="0.5"/>
              {/* Top right */}
              <path d="M80 20 Q65 20 65 35" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M75 25 Q65 25 65 35" stroke="white" fill="none" strokeWidth="0.5"/>
              {/* Bottom left */}
              <path d="M20 140 Q35 140 35 125" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M25 135 Q35 135 35 125" stroke="white" fill="none" strokeWidth="0.5"/>
              {/* Bottom right */}
              <path d="M80 140 Q65 140 65 125" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M75 135 Q65 135 65 125" stroke="white" fill="none" strokeWidth="0.5"/>
              
              {/* Side decorative elements */}
              <path d="M15 80 Q50 55 85 80" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M15 80 Q50 65 85 80" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M15 80 Q50 95 85 80" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M15 80 Q50 105 85 80" stroke="white" fill="none" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
        
        {/* Card Front */}
        <div style={frontStyle}>
          <div style={contentStyle}>
            {getCardPattern(card?.id)}
            <h3 style={{
              color: '#2e1065',
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {card?.name || 'Unknown Card'}
            </h3>
            {card?.meaning && (
              <p style={{
                color: '#7c3aed',
                fontSize: '0.875rem',
                textAlign: 'center'
              }}>
                {card.meaning.upright}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
