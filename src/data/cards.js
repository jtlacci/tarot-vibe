export const playingCards = [
  // Hearts
  ...Array.from({ length: 13 }, (_, i) => ({
    id: i,
    suit: "Hearts",
    value: i + 1,
    name: (() => {
      switch (i + 1) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return String(i + 1);
      }
    })(),
    symbol: "",
    color: "red",
    image: "/cards/card-back.svg"
  })),
  // Diamonds
  ...Array.from({ length: 13 }, (_, i) => ({
    id: i + 13,
    suit: "Diamonds",
    value: i + 1,
    name: (() => {
      switch (i + 1) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return String(i + 1);
      }
    })(),
    symbol: "",
    color: "red",
    image: "/cards/card-back.svg"
  })),
  // Clubs
  ...Array.from({ length: 13 }, (_, i) => ({
    id: i + 26,
    suit: "Clubs",
    value: i + 1,
    name: (() => {
      switch (i + 1) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return String(i + 1);
      }
    })(),
    symbol: "",
    color: "black",
    image: "/cards/card-back.svg"
  })),
  // Spades
  ...Array.from({ length: 13 }, (_, i) => ({
    id: i + 39,
    suit: "Spades",
    value: i + 1,
    name: (() => {
      switch (i + 1) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return String(i + 1);
      }
    })(),
    symbol: "",
    color: "black",
    image: "/cards/card-back.svg"
  }))
];
