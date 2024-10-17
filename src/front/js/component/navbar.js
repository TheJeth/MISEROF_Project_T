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

		<nav class="navbar navbar-expand-lg bg-body-tertiary nav-custom" >

			<div class="container">
				<Link to="/">
					<img
						src="https://res.cloudinary.com/dkwnepcnk/image/upload/v1724681985/Miserof_logo_vrahdp.jpg"
						className="" height="50px" width="auto" alt="The logo" />

				</Link>
				<button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					{/* <span class="navbar-toggler-icon text-black"></span> */}
					<i class="fa-solid fa-bars text-black"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">

						<li class="nav-item ">
							<Link class="nav-link active" aria-current="page" to="/organisation">About us</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/PastEvent">Past events</Link>

						</li>

						<div class="dropdown me-5">
							<a class="btn text-white borner-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								More
							</a>
							<ul class="dropdown-menu">
								<li><Link class="dropdown-item" to="/testimonies">Post Testimony</Link></li>
								<li><Link class="dropdown-item"to="/listTestimonies">Testimonies posted</Link></li>
								<li><Link class="dropdown-item" to="/listActivities">Activities</Link></li>
								<li><Link class="dropdown-item" to="/listMembers">Members</Link></li>
								<li>{sessionStorage.getItem("token") ? <div className="logged-in d-flex">
									<Link to="/admin"><button className="btn btn-primary btn-animated3" onClick={""}>Admin</button></Link>
									<button className="btn btn-primary btn-animated3" onClick={handleLogout}>Logout</button>

								</div>
									: (
										<li class="nav-item ">
											<Link to="/login" className="text-decoration-none text-black"><a class="dropdown-item" href="#">Admin Login</a></Link>
										</li>


									)
								}</li>
							</ul>
						</div>

					</ul>
				</div>
			</div>

			
		</nav>




	);
};