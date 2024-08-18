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

    const handleClick = async () => {

        let result = await actions.login(email, password)
        if(result){
            navigate("/admin")
        }
        else{
            alert("There was an error attempting to log in!")
        }
     
    }


    return (
        <div className="text-center mt-5 h-100">
            <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
            <h1 className="loginTitle">Login</h1>  
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
