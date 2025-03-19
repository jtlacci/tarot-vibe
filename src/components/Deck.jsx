import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = ({ cards: initialCards = [] }) => {
  const [cards, setCards] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  const drawCard = () => {
    if (cards.length === 0 || drawnCards.length >= 5) return;
    
    const randomIndex = Math.floor(Math.random() * cards.length);
    const drawnCard = cards[randomIndex];
    
    setCards(cards.filter((_, index) => index !== randomIndex));
    setDrawnCards([...drawnCards, { ...drawnCard, isFlipped: false }]);
  };

  const handleCardClick = (index) => {
    setDrawnCards(drawnCards.map((card, i) => 
      i === index ? { ...card, isFlipped: !card.isFlipped } : card
    ));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    backgroundColor: '#7c3aed',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  // Animation variants for the floating cards
  const floatingCardVariants = {
    initial: { 
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    animate: index => ({
      scale: [1, 1.01, 1],
      opacity: 1,
      y: [0, -4, 0],
      rotate: [0, 0.3, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3
        },
        rotate: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3
        },
        scale: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }),
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div style={containerStyle}>
      <button 
        style={{
          ...buttonStyle,
          opacity: cards.length === 0 || drawnCards.length >= 5 ? 0.5 : 1,
          cursor: cards.length === 0 || drawnCards.length >= 5 ? 'not-allowed' : 'pointer'
        }}
        onClick={drawCard}
        disabled={cards.length === 0 || drawnCards.length >= 5}
      >
        {drawnCards.length >= 5 ? 
          "Maximum cards drawn" : 
          `Draw a Card (${5 - drawnCards.length} remaining)`}
      </button>
      <div style={cardsContainerStyle}>
        <AnimatePresence>
          {drawnCards.map((card, index) => (
            <motion.div
              key={`${card.name}-${index}`}
              custom={index}
              variants={floatingCardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Card
                card={card}
                isFlipped={card.isFlipped}
                onClick={() => handleCardClick(index)}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Deck;
