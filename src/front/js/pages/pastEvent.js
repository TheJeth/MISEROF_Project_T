import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/pastEvent.css";
//import "../../styles/index.css";
import { Link } from "react-router-dom";

export const PastEvent = () => {
	const { store, actions } = useContext(Context);
	const [selectedMember, setSelectedMember] = useState()
	useEffect(() => {
		actions.getEvents()  
	}, [])

	return (

		<div className="card mb-3 h-auto w-100 event-bck">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<div className="mb-3">
				
			</div>
			<div className="card-body home-card-body">
			<h1 classname="text-center "><center className="pastEvent">Past Events</center></h1>
				<table className="tb-pastEvents">
					<><tr>
						<td>
							<img src="https://i.ibb.co/br5SmJV/Group.jpg border rounded" alt="..." width="100px" height="100px" />
						</td>
						<td>  
							<p className="pastEvent">
								JUNE 2024<br />
								June Evangelistic Tour: North Columbus (OHIO)
								Christian Service: Telephone Counseling
								Online prayer services
							</p>
						</td>
					</tr>
						<tr>
							<td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KBV2B8xJONuxG6LEWIdqXPxHsuZZT_zENw&s border rounded" alt="..." width="100px" height="100px" />
							</td>
							<td>
								<p className="pastEvent">
									DECEMBER 2021
									Evangelism Tour: Columbus (OHIO)
									Christian Service: Counseling
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-a42fnrXad8oOu2c5rP_HH8lu0yLDv9tw&s border rounded" alt="..." width="100px" height="100px" />
							</td>
							<td>
								<p className="pastEvent">
									NOVEMBER 2019 <br />
									Evangelism Tour: Orlando Florida (Orange County)
									GREAT ANNUAL SPIRITUAL AWAKENING

								</p>
							</td>
						</tr><tr>
							<td>
								<img src="https://res-console.cloudinary.com/dkwnepcnk/thumbnails/v1/image/upload/v1724989558/R3JvdXBfbWVldGluZ19iajRrMWw=/drilldown 
								 border rounded" alt="..." width="100px" height="100px" />
							</td>
							<td>
								<p className="pastEvent">
									DECEMBER 2, 2019 – APRIL 2021 <br />

									Invention of a major show: MISEROF “Gouvernail la Nuit Apporte Conseils” MIGNAC
									Teachings:
									1. Family education
									2. Family advice
									3. Exposure of Family Problems
									3. Practical simulations of real stories Conference debates every weekend.
									International Voice Broadcast: On WhatSapp

								</p>
							</td>
							
						</tr></>


				</table>

				<div className="row col-btn">
					<div className="col">
						<Link to="/pastEvent1" className="btn btn-success btn1">
							Next»»»
						</Link>
					</div>

				</div>

			</div>
		</div>


	);
};
