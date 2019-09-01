import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import config from "./config";
import { recipes } from "./templates/tempList";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

const styles = {
  container: {
    // margin: "0 140px 0 200px"
  }
};

class App extends Component {
  state = {
    recipe_id: 35376,
    recipes: recipes,
    url: config.F2FSEARCH
  };

  // async componentDidMount() {
  //   try {
  //     const recipes = await this.getReceipes(this.state.url);
  //     this.setState({ recipes });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getReceipes = async url => {
  //   const data = await fetch(url);
  //   const jsonData = await data.json();
  //   return jsonData.recipes;
  // };

  setRecipeId = id => {
    // event.preventDefault();
    this.setState({ recipe_id: id });
  };

  render() {
    const { recipe_id, recipes } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <div style={styles.container}>
            <Route
              exact
              path="/"
              render={() => (
                <RecipeList recipes={recipes} setRecipeId={this.setRecipeId} />
              )}
            />
            <Route
              path="/details"
              render={() => <RecipeDetails id={recipe_id} />}
            />
            {/* <RecipeList recipes={recipes} setRecipeId={this.setRecipeId} />
            {/* <RecipeDetails id={recipe_id} /> */}
          </div>
          {/* <BannerLeft /> */}
          {/* <BannerRight /> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
