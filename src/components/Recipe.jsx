import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  imgCard: {
    maxHeight: "14rem",
    height: "12rem"
  }
};

class Recipe extends Component {
  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.props.recipe;

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              style={styles.imgCard}
              className="img-card-top"
              alt="recipe"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                Provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary text-capitalize">
                Details
              </button>
              <a
                className="btn btn-success text-capitalize mx-2"
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;