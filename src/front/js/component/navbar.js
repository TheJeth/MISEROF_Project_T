import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";


export const Navbar = () => {
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
				<li class="nav-item">
					<a class="nav-link" href="#">Activities</a>
				</li>

				<Link to="/signup">
					<button type="button"
						className="btn btn-primary btn-animated">Sign up</button>
				</Link>
				<Link to="/login">
					<button type="button"
						className="btn btn-primary btn-animated2">Login</button>
				</Link>

				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</ul>

		</nav>
	);
};