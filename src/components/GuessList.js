import React from 'react';
import { getBarColor, getBarTextColor } from '../utils/gameLogic';

const GuessList = ({ guesses }) => {
  if (guesses.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your Guesses ({guesses.length})
      </h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {guesses.map((g, idx) => (
          <div 
            key={idx} 
            className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-all hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">
                  #{idx + 1}
                </span>
                <span className="font-semibold text-gray-800 text-lg">
                  {g.word}
                </span>
              </div>
              <span className={`font-bold text-lg ${getBarTextColor(g.score)}`}>
                {g.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full ${getBarColor(g.score)} transition-all duration-500 rounded-full flex items-center justify-end pr-2`}
                style={{ width: `${g.score}%` }}
              >
                {g.score > 15 && (
                  <span className="text-white text-xs font-bold">
                    {g.score}%
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessList;
