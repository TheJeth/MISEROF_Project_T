import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
//import "../../styles/list.css"
import { Link } from "react-router-dom";


export const ListTestimonies = () => {
        const { store, actions } = useContext(Context);
        useEffect(() => {
                actions.getTestimonies()
        }, [])
        return (
                <div className="list">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <table>
                                
                                {store.activities.map((activity, index) => {
                                        return (
                                                <tr>
                                                        <td><h5 className="la-h3"><b>{activity.dateTestimony}</b></h5>
                                                             <br />
                                                             <br />
                                                            <h5 className="la-h3">{activity.description}</h5>
                                                            <br />
                                                            <br />
                                                            <h5 className="la-h3"><b>{activity.full_name}</b></h5>
                                                        </td>
                                                </tr>
                                        )
                                })}

                        </table>
                        <button type="button" className="btn btn-primary  justify-content-center" onClick={(e) => {
                                window.print()
                        }}><i class="fa-solid fa-print"></i></button>
                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                </div>

        );
};
