import React, { Component } from "react";
import { Link } from "react-router-dom";

import config from "../config";
import BannerWidth1 from "../ads/BannerWidth1";
import BannerWidth2 from "../ads/BannerWidth2";

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      url: config.F2FGET + props.id
    };
  }

  async componentDidMount() {
    try {
      const recipe = await this.getReceipes(this.state.url);
      this.setState({ recipe });
    } catch (error) {
      console.log(error);
    }
  }

  getReceipes = async url => {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData.recipe;
  };

  renderIngredients = ingredients =>
    ingredients.map((ingredient, id) => {
      return (
        <li key={id} className="list-group-item text-slanted">
          {ingredient}
        </li>
      );
    });

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <BannerWidth1 />
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-warning text-capitalize mb-5"
                >
                  Back to recipe list
                </button>
              </Link>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/* detail */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-slanted text-capitalize text-warning">
                Provied by {publisher}
              </h6>
              {/* links */}
              <a
                className="btn btn-primary text-capitalize mt-2"
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Publisher webpage
              </a>
              <a
                className="btn btn-success text-capitalize mx-3 mt-2"
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                How-to
              </a>
              {/* ingredients */}
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4 text-capitalize">Ingredients</h2>
                {ingredients && this.renderIngredients(ingredients)}
              </ul>
            </div>
            <BannerWidth2 />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
