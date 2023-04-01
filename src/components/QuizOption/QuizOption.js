import React from 'react';
import TotalQuiz from '../TotalQuiz/TotalQuiz';

const QuizOption = ({ totalquiz }) => {
  const { options, question } = totalquiz;


  // console.log(totalquiz);

  return (
    <div className='border-2 solid m-5 p-8 rounded-xl drop-shadow-xl hover:drop-shadow-xl"'>
      <h2 className="text-2xl font-bold m-4 font-sans "><span className='bg-rose-400 text-white p-2 rounded-xl'>Question:</span> {question}</h2>
      <div className="grid grid-cols-2 ">
        {options.map((totaloption) => (
          <TotalQuiz totaloption={totaloption}></TotalQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizOption;