import React, { Component } from "react";

class RecipeSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-capitalize text-bistro">
                Search for recipes with{" "}
                <strong className="text-danger">Food2Ford</strong>
              </h1>
              <form className="mt-4">
                <label htmlFor="search" className="text-capitalize">
                  Type recipes separated by comma
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="search"
                    placeholder="chicken, cheese, carrots"
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

export default RecipeSearch;
