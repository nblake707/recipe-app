import React from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import "./SearchSection.css";

export default class SearchSection extends React.Component {
  state = {
    recipes: [],
  };

  onSearchSubmit = () => {
    // make axios call to recipe api
  };

  render() {
    return (
      <section className="search" id="search">
        <h1>Find the perfect dish</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />

        <div className="ui link cards">
          {/* <RecipeList /> */}
        </div>
      </section>
    );
  }
}
