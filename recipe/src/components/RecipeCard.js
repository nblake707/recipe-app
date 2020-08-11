import React from "react";

const RecipeCard = ({ title, time, image}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="header">{title}</div>

        <div className="description">{time}</div>
      </div>
      {/* <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <i className="user icon"></i>
          75 Friends
        </span>
      </div> */}
    </div>
  );
};

export default RecipeCard;
