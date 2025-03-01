import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer  text-center"  >
		<ul className="nav  nav-custom justify-content-center  bg-dark border-bottom border-body p-1" data-bs-theme="dark">
			<li className="nav-item ">
				<div className="p-0 m-0">
					<h6 className="h6-footer"> Address : 1411 South Hancock Avenue, Dover, Delaware 19901  ||  Tels : 407-444-1248 || 407-715-0613 || 407-218-27-88        ||    Email : miserof27@gmail.com </h6>
					<h6 className="h6-foot">@ All Rights reserved - 2024 ||---|| <Link to=""><i>Powered by TheJeth</i></Link></h6>
				</div>
			</li>
		</ul>
		<ul className="nav justify-content-center  nav-custom border-bottom border-body" data-bs-theme="dark">
			<li className="nav-item ">
				<a className="nav-link active" aria-current="page" href="https://x.com/MISEROF18948/status/1859422365437829341?t=syfGIb3EbdAc3fMjbIVsIA&s=08">
					<i className="fa-brands fa-square-x-twitter"></i>
					<i className="fa-brands fa-square-twitter"></i>
				</a>
			</li>
			<li className="nav-item ">
				<a className="nav-link active" aria-current="page" href="https://www.facebook.com/share/p/HT4cAnGk53RjnWYq/?mibextid=qi2Omg"><i className="fa-brands fa-facebook"></i></a>
			</li>
			<li className="nav-item ">
				<a className="nav-link active" aria-current="page" href="https://youtube.com/@user-gk3rg2wb7?si=8_3ok5VfSBYPT5cR">
					<i className="fa-brands fa-youtube"></i>
				</a>
			</li>
		</ul>
	</footer>
);
