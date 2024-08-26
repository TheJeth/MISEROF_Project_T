import React from 'react';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active" >
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
                <div class="carousel-item" >
                    <div className="card-body home-card-body h-100 background2">
                        <h1 className="home-h1 card-title"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
                        <div className="card-text home">
                            <h2 className="home-h2"><b><br /><br />
                                <i>
                                    The cross
                                </i>
                            </b></h2>

                            <p className="card-text"><small className="text-body-secondary">We decided to serve The Lord with all our soul</small></p>

                            <br /><br />
                            <Link to="/organisation" className="btn btn-success">Read more»»»</Link>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" >

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
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
}