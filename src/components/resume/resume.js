
import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>

                <section id="resume">
                    {/* Education----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>NUCES-FAST Islamabad</h3>
                                    <p className="info">Bachelor in Computer Science <span>•</span> <em className="date"> 2017</em></p>
                                    <p></p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>IMCB G-10/4 Islamabad</h3>
                                    <p className="info">Pre-Engineering <span>•</span> <em className="date"> 2013</em></p>
                                    <p></p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>GOL Technologies (Pvt) Ltd.</h3>
                                    <p className="info">React & React-Native Developer <span>•</span> <em className="date">October 2018 - Present</em></p>
                                    <p></p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Allappo Solutions</h3>
                                    <p className="info">React-Native Developer <span>•</span> <em className="date">February 2018 - October 2018</em></p>
                                    <p></p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt.</p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand react-native" /><em>React-Native</em></li>
                                    <li><span className="bar-expand uiux" /><em>UI/UX</em></li>
                                    <li><span className="bar-expand restapi" /><em>REST APIS</em></li>
                                    <li><span className="bar-expand git" /><em>GIT</em></li>
                                    <li><span className="bar-expand firebase" /><em>FIREBASE & FABRIC CRASHLYTICS</em></li>
                                    <li><span className="bar-expand jquery" /><em>REACTJS</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section> {/* Resume Section End*/}
            </React.Fragment>
        );
    }
}