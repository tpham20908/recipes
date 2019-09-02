import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import config from "./config";
import { recipes } from "./templates/tempList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

const pages = config.NUMBEROFPAGE;
const query = config.QUERY;
const baseUrl = config.F2FSEARCH;

const styles = {
  container: {
    // margin: "0 140px 0 200px"
  }
};

class App extends Component {
  state = {
    error: "",
    recipe_id: 35376,
    recipes: recipes,
    searchTearm: ""
  };

  async componentDidMount() {
    try {
      this.getReceipes(baseUrl);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const searchTearm = event.target.value;
    this.setState({ searchTearm });
  };

  handleSubmit = event => {
    event.preventDefault();
    try {
      const numberOfPage = 2;
      const { searchTearm } = this.state;
      this.getReceipes(
        `${baseUrl}${query}${searchTearm}${pages}${numberOfPage}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  getReceipes = async url => {
    const data = await fetch(url);
    const jsonData = await data.json();
    const recipes = jsonData.recipes;
    if (recipes.length === 0) {
      this.setState(() => {
        return { error: "Sorry, but your search did not return any results." };
      });
    } else {
      this.setState(() => {
        return { error: "", recipes, searchTearm: "" };
      });
    }
  };

  setRecipeId = id => {
    this.setState({ recipe_id: id });
  };

  render() {
    const { error, recipe_id, recipes, searchTearm } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <div style={styles.container}>
            <Route
              exact
              path="/"
              render={() => (
                <RecipeList
                  error={error}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  recipes={recipes}
                  setRecipeId={this.setRecipeId}
                  value={searchTearm}
                />
              )}
            />
            <Route
              path="/details"
              render={() => <RecipeDetails id={recipe_id} />}
            />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
