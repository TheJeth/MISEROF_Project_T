import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const MembersModal = ({ index, member }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();



  return (


    <div className="modal fade" id={"#memberModal" + index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card" style={{width: "18rem"}}>
              <img src={member.picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{member.first_name} {member.last_name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


          </div>
          <div className="modal-footer">
          
          </div>
        </div>
      </div>
    </div>
  );
};