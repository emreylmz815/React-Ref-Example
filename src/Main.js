import React, { Component } from "react";
import "./Main.css";
import $ from "jquery";
import { ToggleArea } from "./ToggleArea";
import { findDOMNode } from "react-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.searchText = React.createRef();
    this.toggleArea = React.createRef();
  }
  componentDidMount() {
    this.searchText.current.focus();
  }
  handleToggle = () => {
    // let el =findDOMNode(this.refs.toggleArea);
    // $(el).slideToggle();
    $(this.toggleArea.current).slideToggle();
  };
  render() {
    return (
      <div className="Main">
        <input type="search" ref={this.searchText} placeholder="Ara..." />
        <ToggleArea
          ref={this.toggleArea}
          text="Aradığınız her şeyi bulabilirsiniz."
        />

        <div
          className="toggle-button"
          onClick={this.handleToggle}
          onLoad={() => this.handleToggle()}
        >
          <p>&#x21C5;</p>
        </div>
      </div>
    );
  }
}
