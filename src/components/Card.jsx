import { motion } from 'framer-motion';
import React from 'react';

const getCardPattern = (id) => {
  const patterns = {
    0: ( // The Fool
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 140 C50 140 50 20 70 20" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="75" cy="15" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M65 25 C65 25 68 22 71 25" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    1: ( // The Magician
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 100 L70 100" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 80 L50 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 60 C50 40 50 40 65 60" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M40 40 L60 40" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    2: ( // The High Priestess
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 40 L30 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M70 40 L70 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 60 C50 60 50 60 65 60" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M40 30 A10 10 0 0 1 60 30" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    3: ( // The Empress
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M50 30 C70 30 70 80 50 80 C30 80 30 130 50 130" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="45" cy="90" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="55" cy="70" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="45" cy="50" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    4: ( // The Emperor
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <rect x="35" y="40" width="30" height="80" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 50 L50 30 L65 50" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M40 60 L60 60" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M40 80 L60 80" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    5: ( // The Hierophant
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M35 40 L65 40" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 40 L50 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="35" cy="120" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="50" cy="120" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="65" cy="120" r="5" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    6: ( // The Lovers
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M35 80 C35 60 65 60 65 80" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="35" cy="100" r="15" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <circle cx="65" cy="100" r="15" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <circle cx="50" cy="40" r="10" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    7: ( // The Chariot
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 100 L70 100 L60 60 L40 60 Z" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="35" cy="110" r="8" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <circle cx="65" cy="110" r="8" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    8: ( // Strength
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M40 80 C45 70 55 70 60 80" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 90 C50 90 50 90 65 90" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M40 60 C50 40 50 40 60 60" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    9: ( // The Hermit
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M50 40 L50 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="50" cy="30" r="8" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M40 120 L60 120" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    10: ( // Wheel of Fortune
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="80" r="30" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 50 L50 110" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M30 80 L70 80" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M35 65 L65 95" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M35 95 L65 65" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    11: ( // Justice
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 60 L70 60" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 60 L50 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 50 L65 50" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <path d="M45 40 L55 40" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    12: ( // The Hanged Man
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M30 40 L70 40" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 40 L50 80" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 100 C50 80 50 80 65 100" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    13: ( // Death
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M40 60 C50 60 50 100 60 100" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="50" cy="80" r="20" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M45 75 C50 70 50 90 55 85" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    14: ( // Temperance
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M40 60 C50 80 50 80 60 100" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M60 60 C50 80 50 80 40 100" stroke="#7c3aed" fill="none" strokeWidth="2"/>
      </svg>
    ),
    15: ( // The Devil
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M50 40 L50 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 60 L65 60" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M35 100 L65 100" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M30 80 L70 80" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    16: ( // The Tower
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M40 120 L40 40 L60 40 L60 120" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M30 30 L70 30" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M35 50 L65 90" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    17: ( // The Star
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="80" r="5" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <circle cx="30" cy="60" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="70" cy="60" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="30" cy="100" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="70" cy="100" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="50" cy="40" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
        <circle cx="50" cy="120" r="3" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    18: ( // The Moon
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M35 40 A15 15 0 0 0 65 40" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M30 120 C50 100 50 100 70 120" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    19: ( // The Sun
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="80" r="20" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 50 L50 110" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M30 80 L70 80" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M35 65 L65 95" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M35 95 L65 65" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
    20: ( // Judgment
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <path d="M40 100 C50 60 50 60 60 100" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M35 40 C50 30 50 30 65 40" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M30 50 C50 40 50 40 70 50" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    ),
    21: ( // The World
      <svg width="100%" height="100%" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', opacity: 0.1}}>
        <circle cx="50" cy="80" r="30" stroke="#7c3aed" fill="none" strokeWidth="2"/>
        <path d="M50 50 L50 110" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <path d="M30 80 L70 80" stroke="#7c3aed" fill="none" strokeWidth="1.5"/>
        <circle cx="50" cy="80" r="15" stroke="#7c3aed" fill="none" strokeWidth="1"/>
      </svg>
    )
  };
  return patterns[id] || patterns[0];
};

const Card = ({ card, isFlipped, onClick, index }) => {
  const cardStyle = {
    perspective: '1000px',
    width: '12rem',
    height: '20rem',
    cursor: 'pointer',
    animation: `float 8s ease-in-out infinite`,
    animationDelay: `${(index || 0) * 0.2}s`,
    transform: `translateY(${Math.random() * 2}px)`, // Reduced random initial position
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
    border: '3px solid #FFD700',
    borderRadius: '1rem',
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
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom right, #f5f3ff, #ede9fe)',
    borderRadius: 'calc(1rem - 3px)',
    color: '#1f2937'
  };

  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#4c1d95'
  };

  const predictionStyle = {
    fontSize: '1rem',
    textAlign: 'center',
    lineHeight: '1.4',
    fontStyle: 'italic',
    color: '#4c1d95',
    marginTop: 'auto'
  };

  const logoStyle = {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0'
  };

  const keyframes = `
    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-2px) rotate(0.25deg);
      }
      50% {
        transform: translateY(0px) rotate(0deg);
      }
      75% {
        transform: translateY(2px) rotate(-0.25deg);
      }
      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }
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
            background: `
              repeating-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.03) 0px,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px,
                transparent 3px
              ),
              radial-gradient(circle at 50% 50%, 
                rgba(255, 255, 255, 0.12) 0%, 
                rgba(255, 255, 255, 0.04) 25%, 
                rgba(255, 255, 255, 0) 50%),
              radial-gradient(circle at 85% 15%, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0) 50%),
              radial-gradient(circle at 15% 85%, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0) 50%),
              linear-gradient(45deg, #6d28d9, #7c3aed, #8b5cf6)
            `,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `
                linear-gradient(to bottom, 
                  rgba(0,0,0,0.1) 0%, 
                  rgba(0,0,0,0) 15%, 
                  rgba(0,0,0,0) 85%, 
                  rgba(0,0,0,0.1) 100%
                ),
                linear-gradient(to right, 
                  rgba(0,0,0,0.1) 0%, 
                  rgba(0,0,0,0) 15%, 
                  rgba(0,0,0,0) 85%, 
                  rgba(0,0,0,0.1) 100%
                )
              `
            }} />
            <svg viewBox="0 0 100 160" width="100%" height="100%" style={{opacity: 0.2, position: 'absolute'}}>
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
            <div style={nameStyle}>{card.name}</div>
            <div style={logoStyle}>
              {getCardPattern(card.id)}
            </div>
            <div style={predictionStyle}>{card.prediction}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
