import React, { Component } from 'react'
import './About.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Header">
        <h1>1garo.dev</h1>
        <div className="About">
          {/* <h3>about me</h3> */}
          <h4>Alexandre Vardai. Integration Engineer @<a href="https://en.linkapi.solutions/" target="_blank">linkapi solutions</a></h4>
        </div>
      </div>
    )
  }
}
