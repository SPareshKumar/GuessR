import React from 'react';
import { MdOutlineLightbulb, MdClose } from 'react-icons/md';

const HintPanel = ({ isOpen, onClose, hintsRevealed, onReveal, targetWord, onGiveUp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-72 h-full shadow-2xl border-l border-blue-100 p-6 animate-slide-in flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-blue-600">
            <MdOutlineLightbulb className="text-2xl" />
            <span className="font-bold text-lg">Hints</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-blue-600 transition-colors">
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="space-y-4 flex-1">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs font-bold text-blue-400 uppercase mb-2">Hint 1: Length</p>
            {hintsRevealed.one ? (
              <p className="text-blue-900 font-semibold">The word has {targetWord.length} letters.</p>
            ) : (
              <button 
                onClick={() => onReveal('one')}
                className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-all"
              >
                Reveal Length
              </button>
            )}
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs font-bold text-blue-400 uppercase mb-2">Hint 2: First Letter</p>
            {hintsRevealed.two ? (
              <p className="text-blue-900 font-semibold">The word starts with "{targetWord[0].toUpperCase()}".</p>
            ) : (
              <button 
                onClick={() => onReveal('two')}
                className={`w-full py-2 text-white rounded-lg text-sm font-bold shadow-md transition-all ${
                  hintsRevealed.one ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={!hintsRevealed.one}
              >
                Reveal First Letter
              </button>
            )}
            {!hintsRevealed.one && (
              <p className="text-[10px] text-gray-400 mt-2 text-center italic">Unlock Hint 1 first</p>
            )}
          </div>
        </div>

        {/* Give Up Button - Only shows when both hints are revealed */}
        {hintsRevealed.one && hintsRevealed.two && (
          <div className="pt-4 mt-auto border-t border-blue-100">
            <button
              onClick={onGiveUp}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-bold shadow-md hover:from-red-600 hover:to-red-700 transition-all active:scale-95"
            >
              Give Up & Reveal Word
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HintPanel;