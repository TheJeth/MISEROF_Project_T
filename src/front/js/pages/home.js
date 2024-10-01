import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import { Carousel } from "./carousel";




export const Home = () => { 
	const { store, actions } = useContext(Context);

	return (

		<div className="card h-auto" >
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

			<Carousel />


		</div>
	);
};
