import React, { Component, Fragment } from 'react';


export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Imdad Hussain.</h1>
              <h3><span>MOBILE </span>and <span>WEB designer </span>and <span>developer</span> creating awesome and
              effective Androi & iOS Mobile Application for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="#"><i className="fa fa-envelope-o fa-fw" /></a></li>
                <li><a href="https://www.linkedin.com/in/hussainimdad" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </Fragment>
    );
  }
}