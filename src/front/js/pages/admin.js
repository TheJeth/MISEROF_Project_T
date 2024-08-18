import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/profile.css";

  
//create your first component
export const Admin = () => {
    const { store, actions } = useContext(Context);
    const user = store.user;

    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [password, setPassword] = useState();
    const [picture, setPicture] = useState();   

    const navigate = useNavigate();

    const handleClick = async () => {

        let result = await actions.verifyUser(email, password)
        if(result){
            navigate("/profile")
        }
        else{
            alert("There was an error attempting to log in!")
        }
     
    }

    return (

        <div className="form h-100" >
            <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
            <div className="mb-3">                
                <h1 className="text-center"> <p className="adminTitle">Admin Page</p></h1>
            </div>
            <div className="admin text-center">
                <div className="col-2 mx-auto">
                    <img height="150px" width="80%" className="rounded-circle" src="https://i.ibb.co/1qXfdp0/user.png" />
                </div>
                <div classNameName="row">
                        <div className ="col mb-3">                   
                            <Link to={"/addpastevent"} type="button" className="btn btn-success" onClick={() => actions.addEvents(description, date, picture)}>Add Past Event </Link>
                            <Link to={"/createMembers"} type="button" className="btn btn-success">Create Members</Link>
                        </div>
                        <div className ="col">
                            <Link to={"/activities"} type="button" className="btn btn-success" >Create Activities </Link>
                            <Link type="button" to={"/"} className="btn btn-success">Go to Home page</Link>
                        </div>
                        
                    </div>
                <div className="jumbotron justify-content-center d-flex text-end mx-auto col" style={{ width: "450px" }}>
                     
                </div>
            </div>


        </div>
    );
};







