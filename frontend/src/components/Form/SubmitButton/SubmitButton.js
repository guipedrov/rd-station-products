import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white text-lg lg:text-xl font-bold py-2.5 px-4 rounded-lg"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
