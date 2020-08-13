import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
   
  };

  render() {
    const inputStyle = {
      borderRadius: "500rem",
    };

    return (
      <form className="ui form" onSubmit={this.onSearchSubmit}>
        <div className="field">
          <input
            type="text"
            style={inputStyle}
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </div>
      </form>
    );
  }
}
