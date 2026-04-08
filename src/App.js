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
    setIsHintPanelOpen,
    hasGivenUp,
    handleGiveUp
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

  // New Game Over / Give Up Screen
  if (hasGivenUp) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 max-w-sm w-full text-center animate-slide-in">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Game Over!</h1>
          <p className="text-sm text-gray-600 mb-1">The secret word was:</p>
          <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            {targetWord.toUpperCase()}
          </p>
          <button
            onClick={startNewGame}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md active:scale-95"
          >
            Play Again
          </button>
        </div>
      </div>
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
        onGiveUp={handleGiveUp} // Pass the new prop here
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