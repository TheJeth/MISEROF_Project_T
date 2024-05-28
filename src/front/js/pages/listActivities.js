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
                        <div className="d-flex">
                                <div className="custom-width">
                                        <button type="button" className="btn btn-primary  justify-content-center" onClick={(e) => {
                                                window.print()
                                        }}><i class="fa-solid fa-print"></i></button>
                                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                </div>
                                <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalItems={store.testimonies.length}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                />
                        </div>

                </div>

        );
};
