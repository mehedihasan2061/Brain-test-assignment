import React from 'react';

const TotalQuiz = ({ totaloption, handleQuiz }) => {
  return (
    <div className="m-4 p-4 rounded-xl bg-white hover:bg-violet-700 text-black hover:text-white font-semibold active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 hover:font-bold hover:italic cursor-pointer ...">
      
      <h2 onClick={handleQuiz}>{totaloption}</h2>
    </div>
  );
};

export default TotalQuiz;