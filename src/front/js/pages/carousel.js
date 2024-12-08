import React from 'react';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner ">
                <div className="carousel-item active" data-bs-interval="20000">
                    <div className="card-body home-card-body h-100 carousel-backgound background1">
                        <h1 className="home-h1 card-title"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
                        <div className="card-text home">

                            <h2 className="home-h2"><b><br /><br />
                                <i>
                                    A GIFT OF LOVE, FOR A GOD OF LOVE! <br />
                                    UN GESTE D'AMOUR POUR UN DIEU D'AMOUR!
                                </i>
                            </b></h2>

                            <p className="card-text"><small className="text-body-secondary">We decided to serve The Lord with all our soul</small></p>

                            <br /><br />
                            <Link to="/organisation" className="btn btn-success">
                                Read more»»»
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="20000" >
                    <div className="card-body home-card-body h-100 background2">
                        <h1 className="home-h1 card-title"><b>MISEROF - Great Team</b></h1>
                        <div className="card-text home">
                            <h2 className="home-h2"><b><br /><br />
                                <i>
                                    We are a great family working together to praise the Lord !
                                </i>
                            </b></h2>  

                            <p className="card-text"><small className="text-body-secondary">Sense of Service is our definition !</small></p>

                            <br /><br />
                            <Link to="/listMembers" className="btn btn-success">Read more»»»</Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="20000">
                    <div className="card-body home-card-body h-100 background3">
                        <h1 className="home-h1 card-title"><b>Past events</b></h1>
                        <div className="card-text home">
                            <h2 className="home-h2"><b><br /><br />
                                <i>
                                    OUR EVENTS ARE TO GIVE HOPE AND SHARE THE WORD OF GOD !<br />
                                    OUR EVENTS ARE MADE TO GIVE ALL THE GLORY TO THE LORD !
                                </i>
                            </b></h2>

                            <p className="card-text"><small className="text-body-secondary">We decided to serve The Lord with all our soul</small></p>

                            <br /><br />
                            <Link to="/pastEvent" className="btn btn-success">Read more»»»</Link>
                        </div>
                    </div>
                </div>    

                 <div className="carousel-item" data-bs-interval="20000">
                    <div className="card-body home-card-body h-100 background4">
                        <h1 className="home-h1 card-title"><b>LET'S THE WORLD KNOW</b></h1>
                        <div className="card-text home">
                            <h2 className="home-h2"><b><br /><br />
                                <i>
                                    SHARE YOUR TESTIMONY WITH US !<br />
                                    BE GRATEFUL TO THE LORD !
                                </i>
                            </b></h2>

                            <p className="card-text"><small className="text-body-secondary">Your testimony boosts the faith of thousands and thousands</small></p>

                            <br /><br />
                            <Link to="/testimonies" className="btn btn-success">Read more»»»</Link>
                        </div>
                    </div>
                 </div>
            </div>
        
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}