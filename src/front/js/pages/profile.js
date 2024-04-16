import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




//create your first component
export const Profile = () => {
        const { store, actions } = useContext(Context);
        const user = store.user;

        const [first_name, setFirst_name] = useState();
        const [last_name, setLast_name] = useState();
        const [email, setEmail] = useState();
        const [tel, setTel] = useState();
        const [password, setPassword] = useState();
        const [picture, setPicture] = useState();

        return (

                <div className="form" >
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
                        <div className="mb-3">
                                        <h1>Update Profile</h1>
                        </div>
                        <div className="jumbotron justify-content-center mx-auto" style={{width :"350px"}}>
                                <div class="form-group justify-content-center d-flex" >
                                        <p className="me-5" for="picture" style={{width :"100px"}}>Select Picture:</p>
                                        <input type="file" class="form-control-file" id="picture" name="picture" />
                                </div>
                                <div className="mb-3 d-flex" >
                                        <p htmlFor="formGroupExampleInput2" className="form-label">First Name</p>
                                        <input value={first_name} onChange={(e) => setFirst_name(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                                </div>

                                <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Last Name</label>
                                        <input value={last_name} onChange={(e) => setLast_name(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                                </div>

                                <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                                </div>

                                <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                                        <input value={tel} onChange={(e) => setTel(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                                </div>

                                <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput3" className="form-label">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter your physical address here"></input>
                                </div>
                                <div classNameName="button">
                                        <Link to={"/"} type="button" className="btn btn-primary" onClick={() => actions.updateProfile(first_name, last_name, email, password, id)}>Update Password </Link>
                                        <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                                        <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                </div>
                        </div>
                        
                </div>
        );
};
