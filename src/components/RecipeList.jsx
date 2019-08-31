import React, { Component } from "react";

import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Recipe List Component</h1>
        <RecipeSearch></RecipeSearch>
        <Recipe></Recipe>
      </React.Fragment>
    );
  }
}

export default RecipeList;
