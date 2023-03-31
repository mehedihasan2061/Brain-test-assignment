import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = () => {
    const quiz = useLoaderData();
    const items = quiz.data
    const { name, questions,total } = items;
    
    return (
        <div>
            <h2 className='text-primary text-xl'>{name} Quiz Part</h2>
            <h2 >Total Question: {total}</h2>
            
                {
                questions.map(totalquiz => <QuizOption totalquiz={totalquiz}></QuizOption>)
           }
           
        </div>
    );
};

export default Quiz;