import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Nav = () => {
	return (
		<nav className="nav-custom1 ">
			<ul class="nav justify-content-end  nav-custom border-bottom border-body" data-bs-theme="dark">
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="https://facebook.com/events/s/mission-socio-evangelic-roc-of/797590671964656/"><i class="fa-brands fa-facebook"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-x-twitter"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-instagram"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-tiktok"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-snapchat"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="https://www.youtube.com/@user-gk3rg2wb7">
						<i class="fa-brands fa-youtube"></i>
					</a>
				</li>

			</ul>

		</nav>
	);
};