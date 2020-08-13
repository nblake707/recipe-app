import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({recipes}) => {

  const allRecipes = recipes.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
      />
    );
  });

  return <div className="ui link cards" >{allRecipes}</div>;
};

export default RecipeList;
