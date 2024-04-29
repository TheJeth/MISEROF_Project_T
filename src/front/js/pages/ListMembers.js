import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/list.css"
import { Link } from "react-router-dom";
import { MemberCard } from "../component/memberCard";



export const ListMembers = () => {
        const { store, actions } = useContext(Context);
        const [selectedMember, setSelectedMember] = useState()
        useEffect(() => {
                actions.getMembers()
        }, [])
        return (
                <div className="list">
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

                        <table>
                                <th><h3 className="la-h3"><b>First_name</b></h3></th>
                                <th><h3 className="la-h3"><b> Last_namet</b></h3></th>
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
                                                                <a className="btn" type="button" data-bs-toggle="modal" data-bs-target={"#memberModal" + index}>
                                                                        <h3 className="la-h3"><b>{member.picture}</b></h3>
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

                        <button type="button" className="btn btn-primary  justify-content-center" onClick={(e) => {
                                window.print()
                        }}><i class="fa-solid fa-print"></i></button>
                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                </div>

        );
};