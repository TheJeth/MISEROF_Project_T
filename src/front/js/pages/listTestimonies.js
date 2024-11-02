import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/listTestimonies.css";
import { Link } from "react-router-dom";
import Pagination from "../component/pagination";

export const ListTestimonies = () => {
        const { store, actions } = useContext(Context);
        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage] = useState(10);

        useEffect(() => {
                actions.getTestimony();
        }, []);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = store.testimonies.slice(
                indexOfFirstItem,
                indexOfLastItem
        );  
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        return (
                <div className="listView h-auto">
                        <img
                                src="https://i.ibb.co/4j8Gs4q/banner.jpg"
                                height="75px"
                                width="100%"
                        />

                        <div className="testimonyFeed  mx-auto pt-5">
                                {currentItems.map((item, index) => {
                                        let convertedDate = new Date(item.dateTestimony);
                                        let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                        let months = [
                                                "Jan",
                                                "Feb",
                                                "Mar",
                                                "Apr",
                                                "May",
                                                "Jun",
                                                "Jul",
                                                "Aug",
                                                "Sep",
                                                "Oct",
                                                "Nov",
                                                "Dec",
                                        ];
                                        let formattedDate =
                                                daysOfWeek[convertedDate.getDay()] +
                                                ", " +
                                                months[convertedDate.getMonth()] +
                                                " " +
                                                convertedDate.getDate() +
                                                ", " +
                                                convertedDate.getFullYear(); 
                                        return (
                                                <div className="bg-light rounded mb-5 testimonyBubble ps-2 pt-2 ">
                                                        <p className="la-h1">{item.description}</p>
                                                        <div className="d-flex"> 
                                                                <p className="me-1">{item.full_name}</p>
                                                                <p className="la-h1">{formattedDate}</p>
                                                        </div>
                                                </div>
                                        );
                                })}
                        </div>
                        <div className="d-flex">
                                <div className="custom-width">
                                        <button
                                                type="button"
                                                className="btn btn-success  justify-content-center"
                                        >
                                                <i className="fa-solid fa-print"></i>
                                        </button>
                                        <Link
                                                type="button"
                                                to={"/"}
                                                className="btn btn-success justify-content-right"
                                        >
                                                Go to Home page
                                        </Link>
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
