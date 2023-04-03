import React, { useState } from "react";
import TotalQuiz from "../TotalQuiz/TotalQuiz";

const QuizOption = ({ totalquiz }) => {
  const { options, question, correctAnswer } = totalquiz;
  // console.log(correctAnswer);

  // const [correct, setCorrect] = useState([])
  
  const handleQuiz = ({ correctAnswer }) => {
    console.log('clicked',correctAnswer);
  }
    
   
    
  
 
  return (
    <div className='border-2 solid m-5 p-8 rounded-xl drop-shadow-xl hover:drop-shadow-xl"'>
      <h2
        className="text-2xl font-bold m-4 font-sans "
        dangerouslySetInnerHTML={{ __html: question }}
      >
        {/* <span className="bg-rose-400 text-white p-2 rounded-xl"
        
        >
          Question:
        </span> */}
        {/* <span className="bg-rose-400 text-white p-2 rounded-xl">Question: */}

        {/* {question} */}
      </h2>

      <div className="grid grid-cols-2 ">
        {options.map((totaloption) => (
          <TotalQuiz
            key={totaloption.id}
            totaloption={totaloption}
            handleQuiz={handleQuiz}
          ></TotalQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizOption;
