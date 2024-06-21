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

        <div className="form h-auto" >
            <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
            <div className="mb-3">
                <h1 className="text-center">Admin Page</h1>
            </div>
            <div className="row">
                <div className="col-2">
                    <img height="200px" className="rounded-circle" src="https://i.ibb.co/1qXfdp0/user.png" />
                </div>
                <div className="jumbotron justify-content-center text-end mx-auto col" style={{ width: "450px" }}>
                   
                    <div classNameName="button">
                        <center>
                            <Link to={"/profile"} type="button" className="btn btn-primary" onClick={() => actions.verifyUser(first_name, last_name, email, picture, id)}>Update profile </Link>
                            <Link to={"/"} type="button" className="btn btn-primary" onClick={() => actions.updateProfile(first_name, last_name, email, picture, id)}>Create Prayers </Link>
                            <Link type="button" to={"/createMembers"} className="btn btn-primary  justify-content-center">Create Members</Link>
                            <Link to={"/activities"} type="button" className="btn btn-primary" >Create Activities </Link>
                            <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                            <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                        </center>
                    </div>
                </div>
            </div>


        </div>
    );
};







