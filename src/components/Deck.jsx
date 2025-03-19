import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

const Deck = ({ cards: initialCards = [] }) => {
  const [cards, setCards] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  const drawCard = () => {
    if (cards.length === 0) return;
    
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
    minHeight: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  const gridContainerStyle = {
    width: '100%',
    maxWidth: '72rem',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '2rem',
    placeItems: 'center'
  };

  const deckPileStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 10
  };

  return (
    <div style={containerStyle}>
      {/* Drawn cards spread */}
      <div style={gridContainerStyle}>
        <div style={gridStyle}>
          <AnimatePresence mode="popLayout">
            {drawnCards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  card={card}
                  isFlipped={card.isFlipped}
                  onClick={() => handleCardClick(index)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Deck pile */}
      <motion.div 
        style={deckPileStyle}
        animate={{ 
          scale: cards.length > 0 ? 1 : 0.8, 
          opacity: cards.length > 0 ? 1 : 0 
        }}
      >
        {cards.length > 0 && (
          <motion.div 
            style={{
              position: 'relative',
              width: '12rem',
              height: '20rem',
              cursor: 'pointer'
            }}
            onClick={drawCard}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img 
              src="/cards/card-back.svg" 
              alt="Card Back"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>
              {cards.length} cards remaining
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Deck;
