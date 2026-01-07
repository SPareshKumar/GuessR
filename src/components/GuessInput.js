import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const GuessInput = ({ guess, setGuess, onSubmit, isLoading, error }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading && guess.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your guess..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100 transition-colors"
          autoFocus
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !guess.trim()}
          className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
          {isLoading ? 'Checking...' : 'Submit'}
          <AiOutlineSend className="text-xl" />
        </button>
      </div>
      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default GuessInput;
