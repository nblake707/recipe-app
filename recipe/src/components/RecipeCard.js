import React from "react";
import "./css/RecipeCard.css";

const RecipeCard = ({ recipe }) => {

  const sourceUrl = recipe.sourceUrl;
  // .summary for full description
  return (
    <div className="card">
      <div className="image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="content">
        <div className="header">{recipe.title}</div>

        <div className="description">{recipe.time}</div>
      </div>
      <div className="extra content">
        {/* <span className="right floated">Joined in 2013</span> */}
        <span>
          <i className="time icon"></i>
          {recipe.cookingMinutes} Minutes
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
