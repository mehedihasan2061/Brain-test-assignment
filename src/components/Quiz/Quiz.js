import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const questions = useLoaderData();
    console.log(questions);
    return (
        <div>
            <h2>dfkld</h2>
        </div>
    );
};

export default Quiz;