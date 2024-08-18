import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const MemberCard = ({ member }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();



    return (



        <div className="card mx-auto" style={{ width: "18rem" }}>
            <img src={member?.picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-black">{member.first_name} {member.last_name}</h5>
                <p className="card-text text-black">{member.description}</p>

            </div>
        </div>


    );
};