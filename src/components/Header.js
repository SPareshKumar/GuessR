import React from 'react';

const Header = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
        GuessR
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Guess the secret word by finding semantically similar words!
      </p>
    </div>
  );
};

export default Header;