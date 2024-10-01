import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pastEvent.css";
//import "../../styles/index.css";
import { Link } from "react-router-dom";

export const PastEvent1 = () => {
	const { store, actions } = useContext(Context);

	return (  

		<div className="card mb-3  h-auto w-100 event-bck">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<div className="card-body home-card-body">
				<h1 classname="text-center "><center className="pastEvent">Past Events</center></h1>
				<table>
					<tr>
						<td>
							<img src="https://i.ibb.co/hsKvf1j/pastevent2.jpg" width="100px" height="100px" />
						</td>
						<td>
							<p className="pastEvent">
								DECEMBER 2, 2019 – APRIL 2021<br />

								Invention of a major show: MISEROF “Gouvernail la Nuit Apporte Conseils” MIGNAC
								Teachings:
								1. Family education
								2. Family advice
								3. Exposure of Family Problems
								3. Practical simulations of real stories Conference debates every weekend.
								International Voice Broadcast: On WhatSapp

							</p>
						</td>
					</tr>
					<tr>
						<td><img src="https://i.ibb.co/1R8dxCP/pstevent1.jpg" width="100px" height="100px" />
						</td>
						<td>
							<p className="pastEvent">
								JUNE 2018 <br />
								Evangelism Tour: Orlando Florida (Orange County)

							</p>
						</td>
					</tr>
					<tr>
						<td>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-a42fnrXad8oOu2c5rP_HH8lu0yLDv9tw&s"width="100px" height="100px" />
						</td>

						<td>
							<p className="pastEvent">
								SEPTEMBER 2018<br />
								Evangelism Tour: Orlando Florida (Orange County)
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<img src="https://www.mnnonline.org/wp-content/uploads/2022/03/Screen-Shot-2022-03-04-at-1.21.19-PM.png" width="100px" height="100px" />
						</td>
						<td>
							<p className="pastEvent">
								OCTOBER 2019<br />
								1. Evangelism Tour: Orlando Florida (Orange County)
								2. GREAT ANNUAL SPIRITUAL AWAKENING
							</p>
						</td>
						<td>
							<p>

							</p>
						</td>
					</tr>
				</table>

				<div className="row col-btn">
					<div className="col">
						<Link to="/pastEvent" class="btn btn-success btn1">
							Back»»»
						</Link>
					</div>

                   </div>

				</div>

	</div>
	);
};
