import React, { Component } from 'react'
import logo from './navlogo2.png';

export default class NavBar extends Component {
  render() {
    return (
<div className="navbar navbar-expand-lg navbar-dark fixed-top nav">
  <img className="logo" src={logo} alt="logo"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto" style={{fontSize:18}}>
      <li className="nav-item">
          <a className="nav-link" href="#poster">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#trailer">Trailer</a>
      </li>
      
      
      <li className="nav-item">
          <a className="nav-link" href="#news">News</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="Aboutus.html">About</a>
      </li>
      
      </ul>
      <div className="input-group mr-5" style={{width:300}}>
              <input type="text" className="form-control" placeholder="Search for Title" 
              onChange = {(e) => this.props.textChange(e.target.value)}/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search" /* style={{color:White }} */ ></i></button>
              </div>
            </div>
      <button type="button " className="btn btn-danger my-2 my-sm-0">Join Us</button>
      </div>
</div>
    )
  }
}
