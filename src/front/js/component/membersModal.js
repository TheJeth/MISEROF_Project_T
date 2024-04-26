import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const MembersModal = ({ index, member }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();



  return (


    <div class="modal fade" id={"#memberModal" + index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card" style={{width: "18rem"}}>
              <img src={member.picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{member.first_name} {member.last_name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


          </div>
          <div class="modal-footer">
          
          </div>
        </div>
      </div>
    </div>
  );
};