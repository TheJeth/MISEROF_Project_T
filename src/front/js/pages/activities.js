import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link } from "react-router-dom";


export const Activities = () => {
        const { store, actions } = useContext(Context);
	const user = store.user;
        const [start_date, setStart_date] = useState();
        const [end_date, setEnd_date] = useState();
        const [description, setDescription] = useState();
        const [responsible, setResponsible] = useState();

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
                                                <input value={start_date} onChange={(e) => setStart_date(e.target.value)} type="Date" className="form-control col" id="formGroupExampleInput2"></input>
                                        </div>

                                        <div className="mb-3 row">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Ending Date:</b></p>
                                                <input value={end_date} onChange={(e) => setEnd_date(e.target.value)} type="Date" className="form-control col" id="formGroupExampleInput2"></input>
                                        </div>

                                        <div className="mb-3 row ">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Activity Description</b></p>
                                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{width : "770px"}} height="450px" className="form-control" id="formGroupExampleInput2" placeholder="Description on the activity here"></textarea>
                                        </div>
                                        <div className="mb-3 row">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Activity Pers. Responsible</b></p>
                                                <input value={responsible} onChange={(e) => setResponsible(e.target.value)} type="textArea" width= "300px" height="450px" className="form-control col" id="formGroupExampleInput2" placeholder="Enter who is responsible of the activity here"></input>
                                        </div>
                                       
                                        <div classNameName="button">
                                                <button type="button" className="btn btn-primary" onClick={(e) =>{ 
                                                        actions.createActivities(description,start_date,end_date,responsible)}}>Create Activities </button>
                                                <Link type="button" to={"/admin"} className="btn btn-primary  justify-content-center">Back to Admin</Link>
                                                <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                                                <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                        </div>
                                </div>
			</div>			
		</div>

	);
};
