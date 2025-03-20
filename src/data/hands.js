export const balatroHands = [
  {
    name: "High Card",
    description: "No matching cards, ranked by highest card",
    basePoints: 10,
    multiplier: 1
  },
  {
    name: "Pair",
    description: "Two cards of the same rank",
    basePoints: 20,
    multiplier: 1.5
  },
  {
    name: "Two Pair",
    description: "Two different pairs of cards",
    basePoints: 40,
    multiplier: 2
  },
  {
    name: "Three of a Kind",
    description: "Three cards of the same rank",
    basePoints: 60,
    multiplier: 3
  },
  {
    name: "Straight",
    description: "Five cards in sequence",
    basePoints: 80,
    multiplier: 4
  },
  {
    name: "Flush",
    description: "Five cards of the same suit",
    basePoints: 100,
    multiplier: 5
  },
  {
    name: "Full House",
    description: "Three of a kind and a pair",
    basePoints: 140,
    multiplier: 6
  },
  {
    name: "Four of a Kind",
    description: "Four cards of the same rank",
    basePoints: 200,
    multiplier: 7
  },
  {
    name: "Straight Flush",
    description: "Five cards in sequence, all of the same suit",
    basePoints: 300,
    multiplier: 8
  },
  {
    name: "Royal Flush",
    description: "A, K, Q, J, 10, all of the same suit",
    basePoints: 400,
    multiplier: 10
  },
  {
    name: "Five of a Kind",
    description: "Five cards of the same rank (requires Jokers)",
    basePoints: 500,
    multiplier: 15
  }
];

export const evaluateHand = (cards) => {
  if (!cards || cards.length === 0) return null;

  // Convert Ace value from 1 to 14 for proper scoring
  const normalizedCards = cards.map(card => ({
    ...card,
    value: card.value === 1 ? 14 : card.value
  }));

  // Sort cards by value for easier evaluation
  const sortedCards = [...normalizedCards].sort((a, b) => b.value - a.value);
  
  // Count occurrences of each value and suit
  const valueCounts = {};
  const suitCounts = {};
  sortedCards.forEach(card => {
    valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
  });

  const values = Object.values(valueCounts);
  const maxOfAKind = Math.max(...values);
  const isFlush = Object.values(suitCounts).some(count => count === 5);
  
  // Check for straight
  const uniqueValues = [...new Set(sortedCards.map(c => c.value))].sort((a, b) => b - a);
  const isStraight = uniqueValues.length >= 5 && 
    uniqueValues.some((val, i, arr) => 
      i <= arr.length - 5 && 
      arr[i] - arr[i + 4] === 4
    );

  // Calculate hand value
  let hand = null;

  // Check for royal flush
  if (isFlush && isStraight && sortedCards[0].value === 14 && sortedCards[4].value === 10) {
    hand = balatroHands.find(h => h.name === "Royal Flush");
  }
  // Check for straight flush
  else if (isFlush && isStraight) {
    hand = balatroHands.find(h => h.name === "Straight Flush");
  }
  // Check for five of a kind
  else if (maxOfAKind === 5) {
    hand = balatroHands.find(h => h.name === "Five of a Kind");
  }
  // Check for four of a kind
  else if (maxOfAKind === 4) {
    hand = balatroHands.find(h => h.name === "Four of a Kind");
  }
  // Check for full house
  else if (maxOfAKind === 3 && values.includes(2)) {
    hand = balatroHands.find(h => h.name === "Full House");
  }
  // Check for flush
  else if (isFlush) {
    hand = balatroHands.find(h => h.name === "Flush");
  }
  // Check for straight
  else if (isStraight) {
    hand = balatroHands.find(h => h.name === "Straight");
  }
  // Check for three of a kind
  else if (maxOfAKind === 3) {
    hand = balatroHands.find(h => h.name === "Three of a Kind");
  }
  // Check for two pair
  else if (values.filter(v => v === 2).length === 2) {
    hand = balatroHands.find(h => h.name === "Two Pair");
  }
  // Check for pair
  else if (maxOfAKind === 2) {
    hand = balatroHands.find(h => h.name === "Pair");
  }
  // High card
  else {
    hand = balatroHands.find(h => h.name === "High Card");
  }

  // Calculate total card values
  const cardValuesSum = sortedCards.reduce((sum, card) => sum + card.value, 0);

  return {
    hand,
    score: Math.floor(hand.basePoints * hand.multiplier + cardValuesSum)
  };
};
