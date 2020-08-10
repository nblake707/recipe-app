import React from "react";
import "./WelcomeSection.css";
import FoodPic from "../images/orange.jpg";

const WelcomeSection = () => {
  return (
    <section className='welcome' id="home">
      <div className="pic">
        <img src={FoodPic}></img>
      </div>

      <div className="content">
        <h1>Tasty Recipes</h1>

        <p>
          Welcome to the recipe app. Click below to find some inspiraton.
        </p>
        <a href="#search" className="button">
          Search Recipes
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
