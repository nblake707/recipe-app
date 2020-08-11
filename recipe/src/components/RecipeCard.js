import React from "react";

const RecipeCard = (props) => {
  return (
    <div class="card">
      <div class="image">
        <img />
      </div>
      <div class="content">
        <div class="header">Matt Giampietro</div>
        <div class="meta">
          <a>Friends</a>
        </div>
        <div className="description">Matthew is an interior.</div>
      </div>
      <div class="extra content">
        <span class="right floated">Joined in 2013</span>
        <span>
          <i class="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
