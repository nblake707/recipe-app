import React from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import spoontacular from "../api/spoontacular";
import "./SearchSection.css";

export default class SearchSection extends React.Component {
  state = {
    recipes: [],
  };

  onSearchSubmit = async term => {
    // make axios call to recipe api
    const response = await spoontacular.get("/complexSearch", {
      params: {
          query: term,
          number: '9',
          apiKey: "b8d5d1148038413aa09e4512c4718d6f"
      },
    });

    this.setState({
        recipes: response.data.items
    });
  };

  render() {
    return (
      <section className="search" id="search">
        <h1>Find the perfect dish</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </section>
    );
  }
}
