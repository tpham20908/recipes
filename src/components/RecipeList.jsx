import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
  render() {
    const {
      error,
      handleChange,
      handleSubmit,
      recipes,
      setRecipeId,
      value
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
        />
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
            {error ? (
              <h2 className="text-danger text-capitalize mx-auto">{error}</h2>
            ) : (
              recipes.map(recipe => (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  setRecipeId={setRecipeId}
                />
              ))
            )}
          </div>
          {/* end recipes */}
        </div>
      </React.Fragment>
    );
  }
}

RecipeList.propTypes = {
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  setRecipeId: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default RecipeList;
