import React from "react";
import SearchBar from "./SearchBar";
import "./SearchSection.css";

export default class SearchSection extends React.Component {
  render() {
    return (
      <section className="search" id="search">
        <h1>Find the perfect dish</h1>
        <SearchBar />
      </section>
    );
  }
}
