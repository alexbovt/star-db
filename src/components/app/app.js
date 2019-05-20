import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <RandomPlanet />
        <div className="row">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
