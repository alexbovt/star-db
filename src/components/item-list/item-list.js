import React, { Component } from "react";

import "./item-list.css";

export default class ItemList extends Component {
  render() {
    return (
      <div className="jumbotron p-0">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </div>
    );
  }
}
