import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({recipes}) => {
    const allRecipes = recipes.map( recipe => {
return (
        <RecipeCard 
          key={recipe.id} 
          title={recipe.title} 
          time={recipe.readyInMinutes}
          image={recipe.image.imageUrls}  
        />
)
    })

    return (
        <div className="ui link cards">
            {allRecipes}
        </div>
    )
}

export default RecipeList;
