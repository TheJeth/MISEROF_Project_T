import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ValidateTextArea } from "../store/validators";


export const Activities = () => {
        const { store, actions } = useContext(Context);
        const user = store.user;
        const [startDate, setStartDate] = useState();
        const [endDate, setEndDate] = useState();
        const [description, setDescription] = useState();
        const [responsible, setResponsible] = useState();
        const [invalidItems, setInvalidItems] = useState([]);
        const navigate = useNavigate();


        const handleSubmit = async () => {
                let isDescriptionValid = ValidateTextArea(description, setInvalidItems);
                let isResponsibleValid = ValidateTextArea(responsible, setInvalidItems);

                let formattedStartDate = new Date(startDate);
                let formattedEnDate = new Date(endDate);


                if (
                        isDescriptionValid && isResponsibleValid) {

                        let result = await actions.createActivities(description, formattedStartDate, formattedEnDate, responsible);
                }

                if (result) {
                        setDescription("");
                        setResponsible("");

                } else {
                        console.log("There was an error attempting to create the member!");
                }
        }



return (

        <div className="container-fluid org-container-fluid text-center">
                <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
                <div className="mb-3">
                        <h1 className="text-center">Creating Activities</h1>
                </div>
                <div className="row">
                        <div className="col-2">
                                <img height="200px" className="rounded-circle" src="https://i.ibb.co/1qXfdp0/user.png" />
                        </div>
                        <div className="jumbotron justify-content-center text-end mx-auto col" style={{ width: "450px" }}>

                                <div className="mb-3 row" >
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Starting Date:</b></p>
                                        <input value={startDate} onChange={(e) => {

                                                setStartDate(e.target.value);
                                        }} type="Date" className="form-control col" id="formGroupExampleInput2"></input>
                                </div>

                                <div className="mb-3 row">
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Ending Date:</b></p>
                                        <input value={endDate} onChange={(e) => {

                                                setEndDate(e.target.value);
                                        }} type="Date" className="form-control col" id="formGroupExampleInput2"></input>
                                </div>

                                <div className="mb-3 row ">
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Activity Description</b></p>
                                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "770px" }} height="450px" className="form-control" id="formGroupExampleInput2" placeholder="Description on the activity here"></textarea>
                                </div>
                                <div className="mb-3 row">
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Activity Pers. Responsible</b></p>
                                        <input value={responsible} onChange={(e) => setResponsible(e.target.value)} type="textArea" width="300px" height="450px" className="form-control col" id="formGroupExampleInput2" placeholder="Enter who is responsible of the activity here"></input>
                                </div>

                                <div classNameName="button">
                                        <button type="button" className="btn btn-primary" onClick={(e) => {
                                                let formattedStartDate = new Date(startDate);
                                                let formattedEnDate = new Date(endDate);
                                                actions.createActivities(description, formattedStartDate, formattedEnDate, responsible)
                                        }}>Create Activities </button>

                                        <Link type="button" to={"/admin"} className="btn btn-primary  justify-content-center">Back to Admin</Link>
                                        <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                </div>
                        </div>
                </div>
        </div>

);
};
