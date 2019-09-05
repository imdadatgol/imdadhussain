import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>Accomplished Mobile Application Developer who is able to create mobile applications for Android & iOS with React-Native. Adept at developing
                            apps based on customer specifications, recommending application changes to make more efficient programs and upgrading existing apps to make
                            them more useful. Specializes in corporate and industrial
                            applications</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Imdad Hussain</span><br />
                                        <span>
                                            Islamabad, 44000 Pakistan</span><br />
                                        <span>+92 311 06666 308</span><br />
                                        <span>hussain.imdad004@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p><a href="images/Imdad_Hussain_CV.pdf" className="button" target="_blank"><i className="fa fa-download" />Download Resume</a></p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section> {/* About Section End*/}
            </React.Fragment>
        );
    }
}