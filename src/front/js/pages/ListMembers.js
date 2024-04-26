import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/list.css"
import { Link } from "react-router-dom";
import { MembersModal } from "../component/membersModal";



export const ListMembers = () => {
        const { store, actions } = useContext(Context);
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
                                                        <MembersModal index={index} member={member} />
                                                        <td>
                                                                <a type="button" data-bs-toggle="modal" data-bs-target={"#memberModal"+index}>
                                                                        <h3 className="la-h3"><b>{member.first_name}</b></h3>

                                                                </a>
                                                        </td>
                                                        <td>
                                                                <a type="button" data-bs-toggle="modal" data-bs-target={"#memberModal"+index}>
                                                                        <h3 className="la-h3"><b>{member.last_name}</b></h3>
                                                                </a>
                                                        </td>
                                                        <td>
                                                                <a type="button" data-bs-toggle="modal" data-bs-target={"#memberModal"+index}>
                                                                        <h3 className="la-h3"><b>{member.picture}</b></h3>
                                                                </a>
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
