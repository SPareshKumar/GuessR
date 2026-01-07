import React from 'react';
import { BiTrophy } from 'react-icons/bi';

const WinScreen = ({ targetWord, guessCount, onPlayAgain }) => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 max-w-sm w-full text-center animate-bounce-in">
        <BiTrophy className="text-yellow-500 text-7xl mx-auto mb-3 animate-pulse" />
        
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          🎉 Congratulations! 🎉
        </h1>
        
        <p className="text-sm text-gray-600 mb-1">
          You found the word:
        </p>
        
        <p className="text-3xl font-black bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-3">
          {targetWord.toUpperCase()}
        </p>
        
        <p className="text-sm text-gray-600 mb-6">
          It took you <span className="font-bold text-blue-600">{guessCount}</span> {guessCount === 1 ? 'guess' : 'guesses'}!
        </p>
        
        <button
          onClick={onPlayAgain}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg active:scale-95"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinScreen;