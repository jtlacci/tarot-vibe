import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Deck from "./components/Deck";
import { playingCards } from "./data/cards";

function App() {
  const [isReading, setIsReading] = useState(false);
  const [score, setScore] = useState(0);

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom right, #111827, #000000)",
    color: "white",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "3rem",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const scoreContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    padding: "1rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 0 25px rgba(124, 58, 237, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
  };

  const scoreValueStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    fontFamily: "monospace"
  };

  const scoreLabelStyle = {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginTop: "0.25rem"
  };

  const buttonStyle = {
    padding: "1.5rem 3rem",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    borderRadius: "12px",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "white",
    transition: "all 0.3s ease",
    boxShadow:
      "0 0 25px rgba(124, 58, 237, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
    cursor: "pointer",
    border: "none",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow:
      "0 0 35px rgba(124, 58, 237, 0.8), inset 0 0 0 2px rgba(255, 255, 255, 0.25)",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={titleContainerStyle}>
          <motion.h1
            style={titleStyle}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            TAROT BALATRO
          </motion.h1>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={score}
              style={scoreContainerStyle}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                style={scoreValueStyle}
                animate={{ 
                  scale: [1, 1.2, 1],
                  textShadow: [
                    "0 2px 4px rgba(0, 0, 0, 0.3)",
                    "0 0 20px rgba(124, 58, 237, 0.8)",
                    "0 2px 4px rgba(0, 0, 0, 0.3)"
                  ]
                }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.5, 1],
                  ease: "easeOut"
                }}
              >
                {score.toLocaleString()}
              </motion.div>
              <div style={scoreLabelStyle}>SCORE</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {!isReading ? (
          <motion.div
            style={{
              padding: "3rem 0",
              display: "flex",
              justifyContent: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
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
              Start Game
            </button>
          </motion.div>
        ) : (
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Deck cards={playingCards} onScoreChange={(points) => setScore((prev) => prev + points)} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
