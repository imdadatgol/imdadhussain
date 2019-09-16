

import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                {/* footer================================================== */}
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                {/* <li><a href="#"><i className="fa fa-facebook" /></a></li> */}
                                {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
                                {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="#"><i className="fa fa-skype" /></a></li> */}
                                <li><a href={"mailto: hussain.imdad004@gmail.com"}><i className="fa fa-envelope-o fa-fw" /></a></li>
                                <li><a href="https://www.linkedin.com/in/hussainimdad" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="skype:hussainbro786@outlook.com?chat"><i className="fa fa-skype" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2014 CeeVee</li>
                                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                                <li>Coverted in ReactJs by  <a title="Styleshout" href="">Imdad Hussain</a></li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer> {/* Footer End*/}
            </React.Fragment>
        );
    }
}
