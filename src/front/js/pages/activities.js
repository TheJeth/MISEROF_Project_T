import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link } from "react-router-dom";


export const Activities = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container-fluid org-container-fluid text-center">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

			
			
			
		</div>

	);
};
