import React, { Component } from "react";
import "./App.css";
import { recipes } from "./templates/tempList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeList></RecipeList>
        <RecipeDetails></RecipeDetails>
      </React.Fragment>
    );
  }
}

export default App;
