import React, { Component } from "react";

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
    recipes: recipes
  };

  async componentDidMount() {
    const url = config.F2FURL;
    try {
      const recipes = await this.getReceipes(url);
      this.setState({ recipes });
    } catch (error) {
      console.log(error);
    }
  }

  getReceipes = async url => {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData.recipes;
  };

  render() {
    const { recipes } = this.state;

    return (
      <React.Fragment>
        <div style={styles.container}>
          <RecipeList recipes={recipes} />
          <RecipeDetails />
        </div>
        {/* <BannerLeft /> */}
        {/* <BannerRight /> */}
      </React.Fragment>
    );
  }
}

export default App;
