import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = () => {
    const quiz = useLoaderData();
    const items = quiz.data
    const { name, questions,total } = items;
    
    return (
      <div>
        <div className="m-8 bg-slate-200 p-4 rounded-xl">
          <h2 className="text-primary font-bold text-4xl font-mono my-4">
            {name} Quiz Part
          </h2>
          <h2 className="font-semibold">Total Question: {total}</h2>
        </div>

        {questions.map((totalquiz) => (
          <QuizOption totalquiz={totalquiz}></QuizOption>
        ))}
      </div>
    );
};

export default Quiz;