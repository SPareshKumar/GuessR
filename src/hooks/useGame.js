import { useState, useEffect } from 'react';
import { calculateSimilarity } from '../services/apiService';
import { getRandomWord } from '../constants/wordBank';
import { 
  sortGuessesByScore, 
  checkWinCondition, 
  isDuplicateGuess 
} from '../utils/gameLogic';

export const useGame = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Hint & Give up States
  const [hintsRevealed, setHintsRevealed] = useState({ one: false, two: false });
  const [isHintPanelOpen, setIsHintPanelOpen] = useState(false);
  const [hasGivenUp, setHasGivenUp] = useState(false); // NEW STATE

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = getRandomWord();
    setTargetWord(randomWord);
    setGuesses([]);
    setIsWon(false);
    setGuess('');
    setError('');
    setHintsRevealed({ one: false, two: false });
    setIsHintPanelOpen(false);
    setHasGivenUp(false); // Reset give up state
  };

  const revealHint = (hintNumber) => {
    setHintsRevealed(prev => ({
      ...prev,
      [hintNumber]: true
    }));
  };

  const handleGiveUp = () => { // NEW FUNCTION
    setHasGivenUp(true);
    setIsHintPanelOpen(false); // Close panel when giving up
  };

  const handleSubmit = async () => {
    if (!guess.trim()) return;

    if (isDuplicateGuess(guesses, guess)) {
      setError('You already guessed this word!');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await calculateSimilarity(targetWord, guess);
      
      const newGuess = { 
        word: guess, 
        score: result.score 
      };
      
      const updatedGuesses = sortGuessesByScore([...guesses, newGuess]);
      setGuesses(updatedGuesses);
      setGuess('');

      if (checkWinCondition(result.similarity)) {
        setIsWon(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    targetWord,
    guess,
    setGuess,
    guesses,
    isWon,
    isLoading,
    error,
    handleSubmit,
    startNewGame,
    hintsRevealed,
    revealHint,
    isHintPanelOpen,
    setIsHintPanelOpen,
    hasGivenUp, // Exported state
    handleGiveUp // Exported function
  };
};