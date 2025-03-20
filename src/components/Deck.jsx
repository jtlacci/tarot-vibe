import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { evaluateHand } from "../data/hands";

const Deck = ({ cards: initialCards = [], onScoreChange }) => {
  const [cards, setCards] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [lastPlayedHand, setLastPlayedHand] = useState(null);

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  const handleCardSelect = (index) => {
    setSelectedCards((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return newSelected;
    });
  };

  const drawCard = () => {
    if (cards.length < 5) return;

    const drawnIndices = new Set();
    const newDrawnCards = [];

    while (newDrawnCards.length < 5) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      if (!drawnIndices.has(randomIndex)) {
        drawnIndices.add(randomIndex);
        newDrawnCards.push({ ...cards[randomIndex], isFlipped: false });
      }
    }

    setCards(cards.filter((_, index) => !drawnIndices.has(index)));
    setDrawnCards(newDrawnCards);

    // Flip cards after 1 second delay
    setTimeout(() => {
      setDrawnCards((cards) =>
        cards.map((card) => ({ ...card, isFlipped: true }))
      );
    }, 1000);
  };

  const handleDiscard = () => {
    if (selectedCards.size === 0 || cards.length < selectedCards.size) return;

    // First mark selected cards as discarded
    setDrawnCards((currentCards) =>
      currentCards.map((card, index) =>
        selectedCards.has(index) ? { ...card, isDiscarded: true } : card
      )
    );

    // After 500ms, replace discarded cards with new ones
    setTimeout(() => {
      const newDrawnCards = [...drawnCards];
      const newIndices = new Set();

      selectedCards.forEach((index) => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        newDrawnCards[index] = { ...cards[randomIndex], isFlipped: false };
        newIndices.add(randomIndex);
      });

      setCards(cards.filter((_, index) => !newIndices.has(index)));
      setDrawnCards(newDrawnCards);
      setSelectedCards(new Set());

      // Flip new cards after 1 second
      setTimeout(() => {
        setDrawnCards((cards) =>
          cards.map((card) => ({ ...card, isFlipped: true }))
        );
      }, 1000);
    }, 500);
  };

  const handlePlayHand = () => {
    if (selectedCards.size === 0 || cards.length < selectedCards.size) return;

    // Get selected cards for scoring
    const selectedCardsArray = Array.from(selectedCards);
    const cardsToScore = selectedCardsArray.map(index => drawnCards[index]);
    
    // Evaluate the hand and calculate score
    const result = evaluateHand(cardsToScore);
    if (result) {
      onScoreChange?.(result.score);
      setLastPlayedHand({
        name: result.hand.name,
        score: result.score,
        description: result.hand.description
      });

      // Clear last played hand after 3 seconds
      setTimeout(() => {
        setLastPlayedHand(null);
      }, 3000);
    }

    // First mark selected cards as played
    setDrawnCards((currentCards) =>
      currentCards.map((card, index) =>
        selectedCards.has(index) ? { ...card, isDiscarded: true } : card
      )
    );

    // After 500ms, replace played cards with new ones
    setTimeout(() => {
      const newDrawnCards = [...drawnCards];
      const newIndices = new Set();

      selectedCards.forEach((index) => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        newDrawnCards[index] = { ...cards[randomIndex], isFlipped: false };
        newIndices.add(randomIndex);
      });

      setCards(cards.filter((_, index) => !newIndices.has(index)));
      setDrawnCards(newDrawnCards);
      setSelectedCards(new Set());

      // Flip new cards after 1 second
      setTimeout(() => {
        setDrawnCards((cards) =>
          cards.map((card) => ({ ...card, isFlipped: true }))
        );
      }, 1000);
    }, 500);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
  };

  const cardsContainerStyle = {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    minHeight: "300px",
    position: "relative",
  };

  const cardSlotStyle = (index) => ({
    flex: "0 0 160px",
    height: "224px",
    position: "relative",
  });

  const buttonStyle = {
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const drawButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#7c3aed",
  };

  const playButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#7c3aed",
    margin: "0 0.5rem",
    opacity: selectedCards.size === 0 ? 0.5 : 1,
    cursor: selectedCards.size === 0 ? "not-allowed" : "pointer",
  };

  const discardButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc2626",
    margin: "0 0.5rem",
    opacity: selectedCards.size === 0 ? 0.5 : 1,
    cursor: selectedCards.size === 0 ? "not-allowed" : "pointer",
  };

  const actionButtonsStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  };

  const handInfoStyle = {
    position: "absolute",
    top: "-60px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    padding: "1rem 2.5rem",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(124, 58, 237, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
    zIndex: 10,
    minWidth: "400px",
    maxWidth: "600px",
    width: "80%"
  };

  // Animation variants for the floating cards
  const floatingCardVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      scale: [1, 1.01, 1],
      opacity: 1,
      y: [0, -4, 0],
      rotate: [0, 0.3, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3,
        },
        rotate: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3,
        },
        scale: {
          repeat: Infinity,
          duration: 4,
          ease: [0.33, 1, 0.68, 1],
          delay: index * 0.3,
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div style={containerStyle}>
      {drawnCards.length < 5 && (
        <button
          style={{
            ...drawButtonStyle,
            opacity: cards.length < 5 ? 0.5 : 1,
            cursor: cards.length < 5 ? "not-allowed" : "pointer",
          }}
          onClick={drawCard}
          disabled={cards.length < 5}
        >
          Draw Cards ({cards.length})
        </button>
      )}

      <div style={cardsContainerStyle}>
        {lastPlayedHand && (
          <motion.div
            style={handInfoStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              {lastPlayedHand.name}
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              {lastPlayedHand.description}
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "1.125rem" }}>
              Score: {lastPlayedHand.score}
            </div>
          </motion.div>
        )}
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={`slot-${index}`} style={cardSlotStyle(index)}>
            <AnimatePresence mode="wait">
              {drawnCards[index] && (
                <motion.div
                  key={`${drawnCards[index].name}-${index}`}
                  variants={floatingCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <Card
                    card={drawnCards[index]}
                    isFlipped={drawnCards[index].isFlipped}
                    index={index}
                    isSelected={selectedCards.has(index)}
                    onSelect={() => handleCardSelect(index)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {drawnCards.length > 0 && (
        <div
          style={{
            marginTop: "1rem",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          {cards.length} Cards Remaining
        </div>
      )}
      {drawnCards.length === 5 && (
        <div style={actionButtonsStyle}>
          <button
            style={playButtonStyle}
            onClick={handlePlayHand}
            disabled={selectedCards.size === 0}
          >
            Play Hand
          </button>
          <button
            style={discardButtonStyle}
            onClick={handleDiscard}
            disabled={selectedCards.size === 0}
          >
            Discard
          </button>
        </div>
      )}
    </div>
  );
};

export default Deck;
