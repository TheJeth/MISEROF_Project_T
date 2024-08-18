import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer  text-center">
		<ul class="nav  nav-custom justify-content-center  bg-dark border-bottom border-body p-3" data-bs-theme="dark">
			<li class="nav-item ">
				<p>
					<h6 className="h6-footer"> Address : 1411 South Hancock Avenue, Dover, Delaware 19901  ||  Tels : 407-444-1248 || 407-715-0613 || 407-218-27-88        ||    Email : miserof27@gmail.com </h6>
					<h6 className="h6-foot">@ All Rights reserved - 2024 ||---|| <Link to=""><i>Powered by TheJeth</i></Link></h6>
				</p>
			</li>
		</ul>

	</footer>
);
