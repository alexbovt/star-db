import React, { Component } from "react";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="jumbotron mt-3 mb-4 p-4">
        <div className="row  d-flex justify-content-center">
          <div className="col-md-3">
            <img
              src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
              alt=""
              className="img-thumbnail border-0"
            />
          </div>
          <div className="col-md-7">
            <table className="table d-table">
              <thead>
                <th className="border-0">
                  <h3>Planet Name</h3>
                </th>
                <th className="border-0 float-right ">
                  <button className="btn border border-white">
                    <span>Next Planet</span>
                    <i class="fas fa-chevron-circle-right ml-2" />
                  </button>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Population</th>
                  <td>123213123</td>
                </tr>
                <tr>
                  <th scope="row">Rotation Period</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">Diametr</th>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
