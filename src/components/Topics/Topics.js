import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ quiz }) => {
    // console.log(topic);
    const {id,name,logo,total } = quiz;
    return (
      <div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-60 w-52 bg-zinc-500 rounded-lg" src={logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center ">
              <h2 className="card-title">{name}</h2>
              <p>{total}</p>
              <Link to={`/quiz/${id}`}>
                <button className="btn btn-primary">Start Practice</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topics;