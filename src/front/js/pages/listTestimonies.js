import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
//import "../../styles/list.css"
import { Link } from "react-router-dom";


export const ListTestimonies = () => {
        const { store, actions } = useContext(Context);
        useEffect(() => {
                actions.getTestimony()
        }, [])
        return (
                <div className="list">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <div className="testimonyFeed w-auto mx-auto">

                                {store.testimonies.map((item, index) => {
                                        let convertedDate = new Date(item.dateTestimony);
                                        let daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
                                        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                                        let formattedDate = daysOfWeek[convertedDate.getDay()]+ ", "+months[convertedDate.getMonth()]+" "+convertedDate.getDate()+", "+convertedDate.getFullYear()
                                        return (
                                                <div className="bg-light rounded mb-5 testimonyBubble ps-2 pt-2 ">
                                                        
                                                        <p className="la-h3">{item.description}</p>
                                                        <div className="d-flex ">
                                                                
                                                                <p className="me-3">{item.full_name}</p>
                                                                <p className="la-h3">{formattedDate}</p>
                                                        </div>
                                                </div>
                                        )
                                })}

                        </div>
                        <button type="button" className="btn btn-primary  justify-content-center"><i class="fa-solid fa-print"></i></button>
                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                </div>

        );
};
