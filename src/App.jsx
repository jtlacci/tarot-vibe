import { useState } from "react";
import { motion } from "framer-motion";
import Deck from "./components/Deck";
import { playingCards } from "./data/cards";

function App() {
  const [isReading, setIsReading] = useState(false);

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

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "0.5rem",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "3rem",
    color: "#a78bfa",
    fontStyle: "italic",
    letterSpacing: "0.05em",
    opacity: 0.9,
    textShadow: "0 0 10px rgba(124, 58, 237, 0.3)",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
        <motion.h1
          style={titleStyle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Playing Cards
        </motion.h1>
        <motion.h2
          style={subtitleStyle}
          initial={{ y: -20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 0.9, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          Classic Card Game
        </motion.h2>

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
            <Deck cards={playingCards} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
