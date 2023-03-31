import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const items = useLoaderData();
    const topics = items.data
    // console.log(topics);
    
    return (
        <div >
            <div className='grid grid-cols-4 gap-5 m-5 '>
                 {
                topics.map(topic => <Topics key={topic.id} quiz={topic}></Topics>)
            }
           </div>
        </div>
    );
};

export default Home;