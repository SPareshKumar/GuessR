export const sortGuessesByScore = (guesses) => {
  return [...guesses].sort((a, b) => b.score - a.score);
};

export const checkWinCondition = (similarity) => {
  return similarity >= 0.99;
};

export const isDuplicateGuess = (guesses, newGuess) => {
  return guesses.some(g => g.word.toLowerCase() === newGuess.toLowerCase());
};

export const getBarColor = (score) => {
  if (score > 80) return 'bg-green-500';
  if (score >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getBarTextColor = (score) => {
  if (score > 80) return 'text-green-700';
  if (score >= 40) return 'text-yellow-700';
  return 'text-red-700';
};

export const getBarBorderColor = (score) => {
  if (score > 80) return 'border-green-300';
  if (score >= 40) return 'border-yellow-300';
  return 'border-red-300';
};
