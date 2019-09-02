import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import config from "./config";
import { recipes } from "./templates/tempList";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import { async } from "q";

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
    recipe_id: 35376,
    recipes: recipes,
    searchTearm: ""
  };

  async componentDidMount() {
    try {
      const recipes = await this.getReceipes(baseUrl);
      this.setState({ recipes });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const searchTearm = event.target.value;
    this.setState({ searchTearm });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const numberOfPage = 2;
      const { searchTearm } = this.state;
      const recipes = await this.getReceipes(
        `${baseUrl}${query}${searchTearm}${pages}${numberOfPage}`
      );
      this.setState({ recipes, searchTearm: "" });
    } catch (error) {
      console.log(error);
    }
  };

  getReceipes = async url => {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData.recipes;
  };

  setRecipeId = id => {
    this.setState({ recipe_id: id });
  };

  render() {
    const { recipe_id, recipes, searchTearm } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <div style={styles.container}>
            <Route
              exact
              path="/"
              render={() => (
                <RecipeList
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
          {/* <BannerLeft /> */}
          {/* <BannerRight /> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
