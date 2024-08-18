import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link, useParams } from "react-router-dom";




//create your first component
export const AddPastEvent = () => {
        const { store, actions } = useContext(Context);
        const user = store.event;
        const [description, setDescription] = useState();
        const [date, setDate] = useState();
        const [picture, setPicture] = useState();
        const [file, setFile] = useState();
        const [previewURL, setPreviewURL] = useState();

        useEffect(() => {
                if (!file) return;
                let temp = URL.createObjectURL(file)
                setPreviewURL(temp);

        }, [file]);

        return (

                <div className="form h-auto" >
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
                        <div className="mb-3">
                                <h1 className="text-center"> <p className="adminTitle">Add Past Event</p></h1>
                        </div>
                        <div className="admin text-center">
                                <div className="col-2 mx-auto">
                                        <img height="150px" width="80%" className="rounded-circle" src={previewURL} />

                                        <p className="col-3 ps-0" for="picture" ><b className="blabel">Select Picture</b></p>

                                        <input type="file" className="rounded-circle" name="myImage" accept="image/png, image/gif, image/jpeg, image/bmp, image/svg+xml, image/webp"
                                                onChange={(e) => {
                                                        if (e.target.files && e.target.files.length > 0) {
                                                                setFile(e.target.files[0]);
                                                        }
                                                        else {
                                                                <img height="200px" className="rounded-circle" src="https://i.ibb.co/1qXfdp0/user.png" />
                                                        }
                                                }} />
                                </div>

                        </div>
                        <div className="jumbotron justify-content-center text-end mx-auto" style={{ height: "70%" }}>
                                <div className="mb-3 d-flex">
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b className="blabel">Date of the event</b></p>
                                        <input value={Date} onChange={(e) => setDate(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter The date here"></input>
                                </div>

                                <div className="mb-3 d-flex">
                                        <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b className="blabel">Description</b></p>
                                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="The description of the event here" height="400px" width="1020px " maxlength="100"></input>
                                </div>


                                <div classNameName="button">
                                        <button className="btn btn-primary" onClick={() => actions.addEvents(description, date, picture)}>Add a past event </button>
                                        <Link type="button" to={"/admin"} className="btn btn-primary  justify-content-center">Back to Admin page</Link>
                                        <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                </div>

                        </div>

                </div>
        );
};







