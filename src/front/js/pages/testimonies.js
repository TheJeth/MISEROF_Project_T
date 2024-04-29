import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link } from "react-router-dom";


export const Testimonies = () => {
    const { store, actions } = useContext(Context);
    const user = store.user;
    const [full_name, setFull_name] = useState();
    const [description, setDescription] = useState();
    const [dateTestimony, setDateTestimony] = useState();

    return (

        <div className="container-fluid org-container-fluid text-center">
            <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
            <div className="mb-3">
                <h1 className="text-center">Post your testimony !!!</h1>
            </div>
            <div className="row">
                <div className="jumbotron justify-content-center text-end mx-auto col" style={{ width: "450px" }}>

                    <div className="mb-3 row" >
                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Full Name</b></p>
                        <input value={full_name} onChange={(e) => setFull_name(e.target.value)} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Your full name"></input>
                    </div>

                    <div className="mb-3 row ">
                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Testimony</b></p>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "920px" }} height="850px" className="form-control" id="formGroupExampleInput2" placeholder="Your testimony here"></textarea>
                    </div>

                    <div className="mb-3 row" >
                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Date</b></p>
                        <input value={dateTestimony} onChange={(e) => setDateTestimony(e.target.value)} type="Date" className="form-control col" style={{ width: "220px" }} id="formGroupExampleInput2" placeholder="Your full name"></input>
                    </div>

                    <div classNameName="button">
                        <button type="button" className="btn btn-primary" onClick={(e) => {
                            actions.postTestimony(full_name, description, dateTestimony)
                        }}>Post </button>
                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};
