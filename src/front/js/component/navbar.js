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

		<nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom" >

			<div className="container">
				<Link to="/">
					<img
						src="https://res.cloudinary.com/dkwnepcnk/image/upload/v1724681985/Miserof_logo_vrahdp.jpg"
						className="" height="50px" width="auto" alt="The logo" />

				</Link>
				<button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					{/* <span className="navbar-toggler-icon text-black"></span> */}
					<i className="fa-solid fa-bars text-black"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">

						<li className="nav-item ">
							<Link className="nav-link active" aria-current="page" to="/organisation">About us</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/PastEvent">Past events</Link>

						</li>

						<div className="dropdown me-5">
							<a className="btn text-white borner-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								More
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="testimonies">Post Testimony</a></li>
								<li><a className="dropdown-item" href="listTestimonies">Testimonies posted</a></li>
								<li><a className="dropdown-item" href="listActivities">Activities</a></li>
								<li><a className="dropdown-item" href="listMembers">Members</a></li>
								<li>{sessionStorage.getItem("token") ? <div className="logged-in d-flex">
									<Link to="/administrator"><button className="btn btn-primary btn-animated3">Admin</button></Link>
									<button className="btn btn-primary btn-animated3" onClick={handleLogout}>Logout</button>

								</div>
									: (
										<li className="nav-item ">
											<Link to="/login" className="text-decoration-none text-black"><a className="dropdown-item" href="#">Admin Login</a></Link>
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