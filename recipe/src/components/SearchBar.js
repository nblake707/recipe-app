import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onSearchSubmit = (e) => {

    }

  render() {
    return (
        <form>
            <label>
                <div className="field">

                </div>
                <input></input>
            </label>
        </form>
  
    );
  }
}
