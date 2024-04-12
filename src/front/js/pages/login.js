import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link, Navigate } from "react-router-dom";
import "../../styles/login.css";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const token = sessionStorage.getItem("token");
    const navigate = useNavigate();


    console.log("This is your token", store.token);

    const handleClick = async () => {

        let result = await actions.login(email, password)
        if(result){
            navigate("/profile")
        }
        else{
            alert("There was an error attempting to log in!")
        }
     
    }


    return (
        <div className="text-center mt-5">

            <h1>Login</h1>
            {(store.token && store.token != "" && store.token != undefined) ? "You are logged in with a token" + store.token :

                <div className="Login">
                    <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                    <button type="button"
                        className="btn btn-primary btn-animated"
                        onClick={handleClick} >Login
                    </button>

                    <div className="forgotPassword">
						<Link to="/forgotPassword"> Forgot password </Link>
					</div>
                </div>

                
            }
        </div>
    );
};
