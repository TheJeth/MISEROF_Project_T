import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/list.css"
import { Link } from "react-router-dom";


export const ListActivities = () => {
        const { store, actions } = useContext(Context);
        useEffect(() => {
                actions.getActivities()
        }, [])
        return (
                <div className="list">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <table>
                                <th><h3 className="la-h3"><b>Description</b></h3></th>
                                <th><h3 className="la-h3"><b> Date_start</b></h3></th>
                                <th><h3 className="la-h3"><b> Date_end</b></h3></th>
                                <th><h3 className="la-h3"><b> Person Responsible</b></h3></th>
                                {store.activities.map((activity, index) => {
                                        return (
                                                <tr>
                                                        <td><h3 className="la-h3"><b>{activity.description}</b></h3></td>
                                                        <td><h3 className="la-h3"><b>{activity.start_date}</b></h3></td>
                                                        <td><h3 className="la-h3"><b>{activity.end_date}</b></h3></td>
                                                        <td><h3 className="la-h3"><b>{activity.responsible}</b></h3></td>
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
