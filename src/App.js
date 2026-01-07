import React from 'react';
import { useGame } from './hooks/useGame';
import Header from './components/Header';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import Instructions from './components/Instructions';
import WinScreen from './components/WinScreen';
import HintPanel from './components/HintPanel'; 
import { MdOutlineLightbulb, MdClose } from 'react-icons/md';

function App() {
  const {
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
    setIsHintPanelOpen
  } = useGame();

  if (isWon) {
    return (
      <WinScreen
        targetWord={targetWord}
        guessCount={guesses.length}
        onPlayAgain={startNewGame}
      />
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-4 font-sans text-gray-900 relative">
      <button 
        onClick={() => setIsHintPanelOpen(true)}
        className="fixed top-6 right-6 flex flex-col items-center group z-40"
      >
        <div className="bg-white p-3 rounded-full shadow-lg border border-blue-100 group-hover:bg-blue-600 transition-all duration-300">
          <MdOutlineLightbulb className="text-2xl text-blue-600 group-hover:text-white" />
        </div>
        <span className="text-[10px] font-bold text-blue-500 mt-1 uppercase tracking-widest">Hints</span>
      </button>

      <HintPanel 
        isOpen={isHintPanelOpen}
        onClose={() => setIsHintPanelOpen(false)}
        hintsRevealed={hintsRevealed}
        onReveal={revealHint}
        targetWord={targetWord}
      />

      <div className="max-w-3xl mx-auto py-8">
        <Header />
        
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />

        <GuessList guesses={guesses} />

        {guesses.length === 0 && <Instructions />}
      </div>
    </div>
  );
}

export default App;