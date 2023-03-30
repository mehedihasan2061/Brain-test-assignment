import React from 'react';

const Topics = ({ topic }) => {
    console.log(topic);
    const {name,logo,total } = topic;
    return (
      <div>
        <div className="card card-compact  bg-base-100 shadow-xl bg-neutral-500">
          <figure>
            <img className="h-60 w-52" src={logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center ">
              <h2 className="card-title">{name}</h2>
              <p>{total}</p>
              {/* <div className="card-actions justify-end"> */}
              <button className="btn btn-primary">Start Practice</button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topics;