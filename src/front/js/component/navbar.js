import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	// Function to handle logout and navigate to login page
	const handleLogout = () => {
		actions.logout();
		navigate("/login");
	};

	// Function to navigate to profile
	const goToProfile = () => navigate("/profile");


	return (
		<nav className="navbar nav-custom ">


			<div className="navbar-brand mb-0 h1 d-flex">
				<Link to="/">
					<img
						src="https://i.ibb.co/bmLJDgh/Miserof-logo.jpg"
						className="w-100" height="30px" alt="The logo" />

				</Link>
			</div>

			<ul class="nav justify-content-end  border-body" data-bs-theme="dark">

				<li class="nav-item ">
					<Link class="nav-link active" aria-current="page" to="/organisation">About us</Link>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Locations</a>
				</li>

				<div class="dropdown">
					<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Activities
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="prayer">Prayers</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>

				{store.token ? <div>
					<button className="btn btn-primary btn-animated3" onClick={handleLogout}>Logout</button>
					<button className="btn btn-primary btn-animated4" onClick={goToProfile}>Profile</button>
				</div>
					: (

						<>


							<Link to="/login">
								<button type="button"
									className="btn btn-primary btn-animated2">Admin</button>
							</Link>
						</>
					)
				}

			</ul>

		</nav>
	);
};