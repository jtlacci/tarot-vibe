import { motion } from "framer-motion";
import React from "react";

const getCardPattern = (suit, value) => {
  const symbols = {
    Hearts: "⚚",
    Diamonds: "⚱",
    Clubs: "†",
    Spades: "⛤",
  };

  const displayValue =
    value === "Ace"
      ? "A"
      : value === "Jack"
      ? "J"
      : value === "Queen"
      ? "Q"
      : value === "King"
      ? "K"
      : value;

  const symbol = symbols[suit];
  const color =
    suit === "Hearts" || suit === "Diamonds" ? "#dc2626" : "#1f2937";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 160 224"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", opacity: 0.45 }}
    >
      {/* Corner numbers/symbols */}
      <text x="16" y="36" fontSize="24" fill={color} className="font-bold">
        {displayValue}
      </text>
      <text x="16" y="60" fontSize="24" fill={color}>
        {symbol}
      </text>

      <text
        x="144"
        y="36"
        fontSize="24"
        fill={color}
        className="font-bold"
        textAnchor="end"
      >
        {displayValue}
      </text>
      <text x="144" y="60" fontSize="24" fill={color} textAnchor="end">
        {symbol}
      </text>

      {/* Center symbol */}
      <text
        x="80"
        y="120"
        fontSize="96"
        fill={color}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {symbol}
      </text>

      {/* Bottom corner numbers/symbols (inverted) */}
      <g transform="rotate(180 80 112)">
        <text x="16" y="36" fontSize="24" fill={color} className="font-bold">
          {displayValue}
        </text>
        <text x="16" y="60" fontSize="24" fill={color}>
          {symbol}
        </text>

        <text
          x="144"
          y="36"
          fontSize="24"
          fill={color}
          className="font-bold"
          textAnchor="end"
        >
          {displayValue}
        </text>
        <text x="144" y="60" fontSize="24" fill={color} textAnchor="end">
          {symbol}
        </text>
      </g>
    </svg>
  );
};

const Card = ({ card, isFlipped, onClick, index }) => {
  const cardStyle = {
    position: "relative",
    width: "160px",
    height: "224px",
    perspective: "1000px",
    cursor: "pointer",
    userSelect: "none",
  };

  const innerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "",
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    msBackfaceVisibility: "hidden",
    borderRadius: "12px",
    border: "1px solid #FFD700",
    boxShadow:
      "0 0 25px rgba(124, 58, 237, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
    animation: "cardGlow 2s ease-in-out infinite alternate",
    overflow: "hidden",
  };

  const frontStyle = {
    ...faceStyle,
    backgroundColor: "white",
    transform: "rotateY(180deg)",
  };

  const contentStyle = {
    position: "absolute",
    inset: 0,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#faf9f6",
    borderRadius: "12px",
    color: "#1f2937",
  };

  const keyframes = `
    @keyframes cardGlow {
      from {
        box-shadow: 0 0 25px rgba(124, 58, 237, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.15);
      }
      to {
        box-shadow: 0 0 25px rgba(124, 58, 237, 0.8), inset 0 0 0 2px rgba(255, 255, 255, 0.15);
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement("style");
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
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              borderRadius: "12px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.25,
                background: `
                repeating-linear-gradient(
                  -45deg,
                  rgba(255, 255, 255, 0.1) 0px,
                  rgba(255, 255, 255, 0.1) 1px,
                  transparent 1px,
                  transparent 10px
                ),
                repeating-linear-gradient(
                  45deg,
                  rgba(255, 255, 255, 0.1) 0px,
                  rgba(255, 255, 255, 0.1) 1px,
                  transparent 1px,
                  transparent 10px
                )
              `,
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 160 224"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", opacity: 0.25 }}
              >
                <pattern
                  id="cardBackPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0 L40 20 L20 40 L0 20 Z"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="8"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cardBackPattern)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card Front */}
        <div style={frontStyle}>
          <div style={contentStyle}>{getCardPattern(card.suit, card.name)}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
