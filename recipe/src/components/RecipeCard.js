import React from "react";
import "./css/RecipeCard.css";
import { Card, Icon, Image } from 'semantic-ui-react'

const RecipeCard = ({ recipe }) => {
  // const sourceUrl = recipe.sourceUrl;
  // .summary for full description
  ///////////////////////////////////////////////////

  return (
    <div className="card">
      <div className="image">
        <img className="resImage" src={recipe.image} alt={recipe.title} />
      </div>
      <div className="content">
        <div className="header">{recipe.title}</div>

        <div className="description">{recipe.time}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="time icon"></i>
          {recipe.cookingMinutes} Minutes
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
