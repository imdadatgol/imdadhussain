import React, { Component } from 'react';
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'hussain.imdad004@gmail.com'
        };

    }

    render() {

        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h1><span>About Me</span></h1>

                            <p>Accomplished Mobile Application Developer who is able to create mobile applications for Android & iOS with React-Native. Adept at developing
                            apps based on customer specifications, recommending application changes to make more efficient programs and upgrading existing apps to make
                            them more useful. Specializes in corporate and industrial
                            applications</p>
                            <div className="column">
                                <div className="columns contact-details">
                                    <h3>Contact Details</h3>
                                    <p className="address">
                                            Islamabad, Pakistan<br />
                                        <span>+92 311 06666 308</span><br />
                                        <a href={"mailto:" + this.state.email}>hussain.imdad004@gmail.com</a>
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