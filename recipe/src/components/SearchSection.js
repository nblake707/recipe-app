import React from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import spoontacular from "../api/spoontacular";
import "./SearchSection.css";

export default class SearchSection extends React.Component {
  state = {
    recipes: [],
  };

  onSearchSubmit = async (term) => {
    // make axios call to recipe api
    await spoontacular
      .get("/complexSearch", {
        params: {
          query: term,
          number: "9",
          addRecipeInformation: true,
          apiKey: "b8d5d1148038413aa09e4512c4718d6f",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          recipes: res.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="search">
        
        <div className="search-heading">
          <h1 className="perfectDish">Find the perfect dish</h1>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>

        {/* <div className="search-content"> */}
          <RecipeList recipes={this.state.recipes} />
      
      </section>
    );
  }
}
