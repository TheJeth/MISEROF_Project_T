import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/list.css"
import { Link } from "react-router-dom";
import { MemberCard } from "../component/memberCard";
import Pagination from "../component/pagination";



export const ListMembers = () => {
        const { store, actions } = useContext(Context);
        const [selectedMember, setSelectedMember] = useState()

        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage] = useState(10);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = store.members.slice(
                indexOfFirstItem,
                indexOfLastItem
        );
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        useEffect(() => {
                actions.getMembers()
        }, [])
        return (
                <div className="list listView">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <table>
                                <th><h3 className="la-h3"><b>First Name</b></h3></th>
                                <th><h3 className="la-h3"><b> Last Name</b></h3></th>
                                <th><h3 className="la-h3"><b> Picture</b></h3></th>
                                {store.members.map((member, index) => {
                                        return (
                                                <tr>

                                                        <td>
                                                                <a className="btn" type="button" data-bs-toggle="modal" data-bs-target={"#memberModal" + index}>
                                                                        <h3 className="la-h3"><b>{member.first_name}</b></h3>

                                                                </a>
                                                        </td>
                                                        <td>
                                                                <a className="btn" type="button" data-bs-toggle="modal" data-bs-target={"#memberModal" + index}>
                                                                        <h3 className="la-h3"><b>{member.last_name}</b></h3>
                                                                </a>
                                                        </td>

                                                        <td>
                                                                <a className="btn-pict" type="button" data-bs-toggle="modal" data-bs-target={"#memberModal" + index}>
                                                                        <h3 className="la-h3"><b><img class="object-fit-fill border rounded" alt="..." width="100px" height="100px" src={member.picture} /></b></h3>
                                                                </a>
                                                        </td>
                                                        <div class="modal fade" id={"memberModal" + index} tabindex="-1" aria-labelledby={"memberModalLabel" + index} aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                                <div class="modal-header">

                                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                </div>
                                                                                <div class="modal-body">
                                                                                        <MemberCard member={member} />
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                        </div>
                                                </tr>
                                        )
                                })}

                        </table>

                        <div className="d-flex dpagination text-center">
                                <table className="tb-button justify-content-center">
                                        <tr>
                                                <td className="td-pagination">

                                                        <Pagination
                                                                itemsPerPage={itemsPerPage}
                                                                totalItems={store.members.length}
                                                                paginate={paginate}
                                                                currentPage={currentPage}
                                                        />
                                                </td>
                                                <td className="td-link">
                                                        <Link type="button" to={"/"} className="btn btn-success justify-content-right">Go to Home page</Link>
                                                </td>
                                        </tr>
                                    </table>
                                   </div>
                                </div>
                                        );
};