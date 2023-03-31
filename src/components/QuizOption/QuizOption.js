import React from 'react';
import TotalQuiz from '../TotalQuiz/TotalQuiz';

const QuizOption = ({ totalquiz }) => {
  const { options, question } = totalquiz;


  // console.log(totalquiz);

  return <div className='box-border'>
    <h2 className='text-xl m-8'>Question: {question}</h2>


    <div className='grid grid-cols-2 '>
      {
      options.map(totaloption => <TotalQuiz totaloption={totaloption}></TotalQuiz>)
    }
    </div>

  </div>;
};

export default QuizOption;