import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/list.css"
import { Link } from "react-router-dom";
import Pagination from "../component/pagination";


export const ListActivities = () => {
        const { store, actions } = useContext(Context);

        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage] = useState(10);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = store.testimonies.slice(
                indexOfFirstItem,
                indexOfLastItem
        );
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        useEffect(() => {
                actions.getActivities()
        }, [])
        return (
                <div className="list listActivities h-100  overflow-scroll">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <table >
                                <th className="tdActivities"><h3 className="la-h3"><b>Description</b></h3></th>
                                <th className="tdActivities"><h3 className="la-h3"><b> Date_start</b></h3></th>
                                <th className="tdActivities"><h3 className="la-h3"><b> Date_end</b></h3></th>
                                <th className="tdActivities"><h3 className="la-h3"><b> Person Responsible</b></h3></th>
                                {store.activities.map((activity, index) => {
                                        return (
                                                <tr className="tdActivities">
                                                        <td><h4 className="la-h4"><b>{activity.description}</b></h4></td>
                                                        <td><h4 className="la-h4"><b>{activity.start_date}</b></h4></td>
                                                        <td><h4 className="la-h4"><b>{activity.end_date}</b></h4></td>
                                                        <td><h4 className="la-h4"><b>{activity.responsible}</b></h4></td>
                                                </tr>
                                        )
                                })} 

                        </table>
                        <div className="d-flex justify-content-center">
                                
                                        <button type="button" className="btn btn-primary  justify-content-center" onClick={(e) => {
                                                window.print()
                                        }}><i class="fa-solid fa-print"></i></button>
                                       
                                <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalItems={store.activities.length}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                        
                                /> 

                                <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                

                        </div>

                </div>

        );
};