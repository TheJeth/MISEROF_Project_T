import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/testimonies.css";
import { Link, useNavigate } from "react-router-dom";
import { ValidateTextArea } from "../store/validators";




export const Testimonies = () => {
    const { store, actions } = useContext(Context);
    const user = store.user;
    const [full_name, setFull_name] = useState();
    const [description, setDescription] = useState();

    const [invalidItems, setInvalidItems] = useState([]);
    const navigate = useNavigate();

    Date.prototype.loadDateVaue = (function () {
        var dt = new Date(this);
        dt.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return dt.toJSON().slice(0, 10);
    });

    const handleSubmit = async () => {
        let isDescriptionValid = ValidateTextArea(description, setInvalidItems);
        let isFullNameValid = ValidateTextArea(full_name, setInvalidItems);


        if (isDescriptionValid && isFullNameValid) {

            let result = await actions.postTestimony(full_name, description);


            if (result) {
                setDescription("");
                setFull_name("");

            } else {
                console.log("There was an error attempting to create the member!");
            }
        }
    }


    return (

        <div className="container-fluid org-container-fluid text-center h-100 w-100">
            <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="110%" />
            <div className="mb-3">
                <h1 className="text-center">Post your testimony !!!</h1>
            </div>
            <div className="row">
                <div className="jumbotron justify-content-center text-end mx-auto col">

                    <div className="mb-3 row" >
                        <p htmlFor="formGroupExampleInput2 " className="col-3 ps-0"><b>Full Name</b></p>
                        <input value={full_name} onChange={(e) => setFull_name(e.target.value)} style={{ width: "auto" }} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Your full name" maxlength="30"></input>
                    </div>

                    <div className="mb-3 row ">
                        <p htmlFor="formGroupExampleInput2 justify-content-center" className="col-3 ps-0"><b>Testimony</b></p>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "920px" }} height="950px" className="form-control" id="formGroupExampleInput2" placeholder="Your testimony here" maxlength="500"></textarea>
                    </div>


                    <div classNameName="button">
                        <button type="button" className="btn btn-success" onClick={handleSubmit}>Post </button>
                        <Link type="button" to={"/"} className="btn btn-success justify-content-right">Go to Home page</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};
