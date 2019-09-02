import React, { Component } from "react";
import PropTypes from "prop-types";

class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-capitalize text-bistro">
                Search for recipes with{" "}
                <strong className="text-danger">Food2Ford</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  <em>
                    Search by single Country name (Vietnamese or Canadian or
                    Japanese ...)
                  </em>
                  <br />
                  <em>or separated comma Ingredients</em>
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    onChange={handleChange}
                    name="search"
                    placeholder="chicken, cheese, carrots"
                    type="text"
                    value={value}
                  />
                  <div className="input-group-append">
                    <button className="input-group-text bg-primary text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

RecipeSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default RecipeSearch;
