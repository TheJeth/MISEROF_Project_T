import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link, useParams } from "react-router-dom";


//create your first component
export const Profile = () => {
        const { store, actions } = useContext(Context);
        const [user, setUser] = useState(
                {
                        first_name: "",
                        last_name: "",
                        email: "",
                        tel: "",
                        password: "",
                        picture: "",
                        id: ""
                }
        );
        const [error, setError] = useState(null);
        const [file, setFile] = useState();
        const [previewURL, setPreviewURL] = useState();
        useEffect(() => {
                let fetchData = async () => {
                        let result = await actions.getUserInfo();
                        if (result) {
                                setUser(result);
                                setError(null);
                        } else {
                                setUser({
                                        first_name: "",
                                        last_name: "",
                                        email: "",
                                        tel: "",
                                        password: "",
                                        picture: "",
                                        id: ""
                                });
                                setError("An error occured while trying to get user info");
                        }
                }
                fetchData();
        }, []);

        useEffect(() => {
                if (!file) return;
                let temp = URL.createObjectURL(file)
                setPreviewURL(temp);

        }, [file]);

        return (

                <div className="form  h-auto" >
                        <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
                        <div className="mb-3">
                                <h1 className="text-center">Update Profile</h1>
                        </div>
                        <div className="row">
                                <div className="col-2">
                                        <img height="200px" className="rounded-circle" src={previewURL} />
                                        <p className="col-3 ps-0" for="picture" ><b>Select Picture</b></p>
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
                                <div className="jumbotron justify-content-center text-end mx-auto col" style={{ width: "450px" }}>
                                        <div class="form-group row" >
                                        </div>
                                        <div className="mb-3 row" >
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>First Name:</b></p>
                                                <input value={user.first_name} onChange={(e) => setUser({ first_name: e.target.value })} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Enter your first name here"></input>
                                        </div>

                                        <div className="mb-3 row">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Last Name:</b></p>
                                                <input value={user.last_name} onChange={(e) => setUser({ lastname: e.target.value })} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Enter your last name here"></input>
                                        </div>

                                        <div className="mb-3 row">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Email:</b></p>
                                                <input value={user.email} onChange={(e) => setUser({ email: e.target.value })} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                                        </div>

                                        <div className="mb-3 row">
                                                <p htmlFor="formGroupExampleInput2" className="col-3 ps-0"><b>Phone:</b></p>
                                                <input value={user.tel} onChange={(e) => setUser({ tel: e.target.value })} type="text" className="form-control col" id="formGroupExampleInput2" placeholder="Enter your Telephone here"></input>
                                        </div>

                                        <div classNameName="button">
                                                <Link to={"/"} type="button" className="btn btn-primary" onClick={() => actions.updateProfile(first_name, last_name, email, picture, id)}>Update Profile </Link>
                                                <Link type="button" to={"/admin"} className="btn btn-primary  justify-content-center">Back to Admin page</Link>
                                                <Link type="button" to={"/"} className="btn btn-primary  justify-content-center">Cancel</Link>
                                                <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                                        </div>
                                </div>
                        </div>


                </div>
        );
};
