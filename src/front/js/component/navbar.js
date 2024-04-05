import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div className="container d-flex nav-custom navbar">
			
			
					<div className="navbar-brand mb-0 h1 d-flex">
						<Link to="/">
								<img 
								src="https://previews.dropbox.com/p/thumb/ACOIyeAjB97BAeGFJTNcn7teRXOokOCikWVJ7cd402HZjkkc51fQydUVZCra6PbNtWVRWwqiXXv7YWTvUsO7FTC8V1I1VuV_RnPXEtQOKvoQvGf8P-56gCGlAsTUhP2j1NRZLxdtTiQ9q79tkkkicn5K2WCjWV5Yy50uQB-ZvV05ugoeo8IPWDMRTdYPmrkTFJDGnNfe_MiWprzFj-0s8v9o1-fYH-wyAyYRcjSMIieK2Sgu-YoBD0wh9Q_Kr__tSkNay5pLGXtVCsardCtAraCvflL7tVxIh2zMDjjQhQCbe-owxlYE76GUI0toNsiS4Amstnx2nc-jndE0elJzNW8_/p.jpeg"
								className="w-100" height="30px" alt="The logo" />
						</Link>
					</div>
				
			<ul class="nav justify-content-end  bg-dark border-bottom border-body" data-bs-theme="dark">
				
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="#">About us</a>
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

		</div>
	);
};
