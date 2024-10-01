import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link } from "react-router-dom";


export const Organisation = () => {
	const { store, actions } = useContext(Context);

	return (

		<div class="org-container-fluid org-container text-center h-auto w-100">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<div ClassName="text-center  french-english h-100">
				<h3 className="row org-row"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h3>
				<p class="text ">
					<div className="englishVersion">
						<h4 className="org-h4"><b>EVANGELICAL MISSION</b></h4>
						<br />
						<h6 className="org-h5">
							Our ultimate goal: Seek the lost souls and bring them back to Christ as
							befits: Go, make all nations disciples, baptizing them in the name of the
							Father, the Son, and the Holy Spirit, and teach them to observe all that
							I have commanded you. And behold, I am with you every day until the end of
							the world (Matthew 28: 19:20). To do this, it is our duty to train leaders
							who can spread the gospel of Christ without any pressure, and to send them
							to strategic places: prisons, hospitals, city-to-city travel, visit other
							leaders, to teach them and encourage them to take part in the transformation
							of their communities.
						</h6>
					</div>
					<div className="frenchVersion">
						<h4 className="org-h4"><b>MISSION EVANGELIQUE</b></h4>
						<br />
						<h6 className="org-h5">
							Notre but ultime : Rechercher les âmes égarées et à les ramener à
							Christ comme il convient : Allez, faites de toutes les nations des
							disciples, les baptisant au nom du Père, du Fils et du Saint Esprit,
							et enseignez-leur à observer tout ce que je vous ai prescrit.
							Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde
							(Matthieu 28 : 19.20). Pour ce faire, il est de  notre devoir de
							former des leaders capables de propager l'évangile du Christ sans
							aucune pression, et de les envoyer dans des endroits stratégiques:
							Prisons, hôpitaux,  voyage  de ville en ville, visiter d'autres
							leaders, les enseigner et les encourager à prendre part à la
							transformation de leurs communautés.
						</h6>
					</div>
				</p>
				<div className="text d-flex">
					<Link to="/" class="btn btn-success btn1">
						Back»»»
					</Link>

					<Link to="/organisation1" class="btn btn-success btn2">
						Read more about the organisation»»»
					</Link>

					<Link to="/headquater" class="btn btn-success btn3" >
						Headquater members here»»»
					</Link>
				</div>

			</div>
		</div>


	);
};
