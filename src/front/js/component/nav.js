import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Nav = () => {
	return (
		<nav className="nav-custom1 position-relative">
			<ul class="nav justify-content-center  nav-custom border-bottom border-body" data-bs-theme="dark">
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="https://twitter.com/MISEROF18948/status/1788876904713355315?t=a-OmUq_y6vCqV41jxjj8HA&s=19">
						<i class="fa-brands fa-square-x-twitter"></i>
						<i class="fa-brands fa-square-twitter"></i>
					</a>					
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="https://www.facebook.com/share/p/HT4cAnGk53RjnWYq/?mibextid=qi2Omg"><i class="fa-brands fa-facebook"></i></a>
				</li>
				<li class="nav-item ">
					<a class="nav-link active" aria-current="page" href="https://youtube.com/@user-gk3rg2wb7?si=8_3ok5VfSBYPT5cR">
						<i class="fa-brands fa-youtube"></i>
					</a>
				</li>							
			</ul>

		</nav>
	);
};