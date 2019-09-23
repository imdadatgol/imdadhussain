import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1><span>On-Going work</span></h1>

                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt="" src="images/portfolio/modals/m-frasers.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Frasers Experience</h5>
                                                    <p>App Store</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt="" src="images/portfolio/logo.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Frasers Experience</h5>
                                                    <p>Play Store</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> */}{/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt="" src="images/portfolio/judah.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Judah</h5>
                                                    <p>Webdesign</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> item end */}{/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt="" src="images/portfolio/into-the-light.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Into The Light</h5>
                                                    <p>Photography</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> item end */}{/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-05" title>
                                            <img alt="" src="images/portfolio/farmerboy.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Farmer Boy</h5>
                                                    <p>Branding</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                item end */} {/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-06" title>
                                            <img alt="" src="images/portfolio/girl.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Girl</h5>
                                                    <p>Photography</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>

                                </div> 
                                item end */}
                                {/*
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-07" title>
                                            <img alt="" src="images/portfolio/origami.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Origami</h5>
                                                    <p>Illustrration</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> item end */}
                                {/* 
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-08" title>
                                            <img alt="" src="images/portfolio/retrocam.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Retrocam</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>  */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup--------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-frasers.jpg" alt="" />
                            <div className="description-box">
                                <h4>Frasers Experience App Store</h4>
                                <p>DISCOVER A NEW WAY TO SHOP, EAT AND PLAY - ALL IN ONE APP. Get ready for the all-new Frasers Experience (FRx) app that will bring you exciting new features! You can look forward to Digital Gift Cards, an F&B reservation service and more at your fingertips. It’s seamless, easy and all-in-one.</p>
                                <span className="categories"><i className="fa fa-tag" /><a href="https://apps.apple.com/us/app/frasers-experience/id1441727505?ls=1" className="" target="_blank">App Store</a>,<a href="https://play.google.com/store/apps/details?id=com.frasersexperience.app" target="_blank">Play Store</a> </span>
                            </div>
                            <div className="link-box">
                                {/* <a href="http://www.behance.net">Details</a> */}
                                <a className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>{/* modal-01 End */}
                    </div> {/* row End */}
                </section> {/* Portfolio Section End*/}
            </React.Fragment>
        );

    }
}