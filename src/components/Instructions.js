import React from 'react';

const Instructions = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-sm mx-auto">
      <h3 className="text-base font-bold text-gray-800 mb-2">
        How to Play:
      </h3>

      <ul className="space-y-1 text-sm text-gray-700">
        <li className="flex items-start">
          <span className="mr-1.5">•</span>
          <span>Guess a word similar to the secret word.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-1.5">•</span>
          <span>Score (0-100%) shows semantic closeness.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-1.5">•</span>
          <span>
            <span className="text-green-600 font-semibold">Green (80%+)</span>: Very close!
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-1.5">•</span>
          <span>
            <span className="text-yellow-600 font-semibold">Yellow (40-80%)</span>: Getting there.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-1.5">•</span>
          <span>
            <span className="text-red-600 font-semibold">Red (&lt;40%)</span>: Keep trying.
          </span>
        </li>
        <li className="flex items-start pt-1">
          <span className="mr-1.5">•</span>
          <span className="font-bold text-gray-900">Reach 100% to win!</span>
        </li>
      </ul>
    </div>
  );
};

export default Instructions;