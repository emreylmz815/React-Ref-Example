import React, { Component } from 'react'
import "./Main.css"
import $ from "jquery";
import { findDOMNode } from 'react-dom';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.searchText=React.createRef();
    }
    componentDidMount(){
        this.searchText.current.focus();
    }
    handleToggle=()=>{
      let el =findDOMNode(this.refs.toggleArea);
      $(el).slideToggle();
    }
  render() {
    return (
      <div className='Main'>
          <input type="search" ref={this.searchText} placeholder="Ara..."/>
          <div className='toggle-area' ref="toggleArea">
            <p>Dünyalar kadar arayın, <br/> Dünyada arayın! </p>
          </div>
            <div className='toggle-button' onClick={this.handleToggle} onLoad={()=>this.handleToggle()}>
              <p>&#x21C5;</p>

            </div>
      </div>
    )
  }
}
