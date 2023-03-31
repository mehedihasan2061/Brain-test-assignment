import React from 'react';

const TotalQuiz = ({ totaloption }) => {
    console.log(totaloption);
    return (
      <div className="border-solid">
        <h2> <input type="radio" name="" id="" /> {totaloption} </h2>
      </div>
    );
};

export default TotalQuiz;