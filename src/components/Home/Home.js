import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import Lottie from "lottie-react";
import Data from "../../Data/112900-checklist.json"

const Home = () => {
    const items = useLoaderData();
    const topics = items.data
    // console.log(topics);
    
    return (
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center">
          <div className="m-8">
            <h2 className="font-mono text-4xl font-extrabold my-2 text-orange-600/75">
              Wellcome to Quiz Episod !!!
            </h2>
            <h2 className="text-lg italic font-sans">
              There are some quiz questions that need to be answered. Each
              question is numbered one,One quiz mark will be deducted for each
              wrong mark!!!
            </h2>
          </div>
          <div className="">
            <Lottie animationData={Data} loop={true}></Lottie>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 m-5 ">
          {topics.map((topic) => (
            <Topics key={topic.id} quiz={topic}></Topics>
          ))}
        </div>
      </div>
    );
};

export default Home;