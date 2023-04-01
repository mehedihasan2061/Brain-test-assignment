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
        <div >
            <div className='grid grid-cols-2 items-center'>
                <div className=''> 
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis pariatur autem expedita esse eligendi asperiores quo, atque odit corporis optio, quod deserunt? Beatae rerum tempora officia, possimus dolores voluptas.</h2>
                </div>
                <div className='w-'>
                    <Lottie animationData={Data} loop={true}></Lottie>
                </div>
            </div>


            <div className='grid grid-cols-4 gap-5 m-5 '>
                 {
                topics.map(topic => <Topics key={topic.id} quiz={topic}></Topics>)
            }
           </div>
        </div>
    );
};

export default Home;