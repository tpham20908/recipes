import React, { Component } from "react";
import PropTypes from "prop-types";

import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
  render() {
    const { recipes, setRecipeId } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipes List</h1>
            </div>
          </div>
          {/* end title */}

          {/* recipes */}
          <div className="row">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                setRecipeId={setRecipeId}
              />
            ))}
          </div>
          {/* end recipes */}
        </div>
      </React.Fragment>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  setRecipeId: PropTypes.func.isRequired
};

export default RecipeList;
