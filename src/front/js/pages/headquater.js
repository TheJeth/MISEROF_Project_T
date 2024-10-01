import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/headquater.css"
import { Link } from "react-router-dom";
//import ReactNative from 'react-native';
import { ImageCard } from "../component/ImageCard";


export const Headquater = () => {
	const { store, actions } = useContext(Context);
	let w = window.innerWidth;
	let h = window.innerHeight;
	const cards = [
		{
			imageSrc: "https://i.ibb.co/M6gfk4m/Roseline.jpg",
			title: "Roseline A. LEBLANC  Programming Manager",
			text: "FROM 2012 TO PRESENT. Her dynamism and expertise allow us to achieve between 95% and 97% of our annual programs.",
		},
		{
			imageSrc: "https://i.ibb.co/WHLpJVc/Mrie-Florence-Joassaint.jpg",
			title: "Marie Florence JOASSAINT Spiritual Devotion Director",
			text: "From 2019 to present. Her prayer helps us to walk from victory to victory and to bring lost and fallen souls to Christ",
		},
		{
			imageSrc: "https://i.ibb.co/bHytsWm/Joceline.jpg",
			title: "Jocelyne JEAN PIERRE     /   Advisor ",
			text: "2007 TO PRESENT. Her ideas help us a lot to move forward. She contributes financially to the carrying out missions and evangelization tours.",
		},
	];

	return (
		<div className={(w == 768 && h == 1024 ? "h-100 " : "h-auto ") + "w-100 " + "board"} >
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

			<h3 class="row"><b><center className="text-board">MISEROF - The board </center></b></h3>


			<div className="d-board justify-content-center  hq-bck" >
				<div className="row justify-content-center " >
					{cards.map((card, index) => (
						<div className="col-sm-3 mx-4 d-flex justify-content-center mb-4" key={index}>
							<ImageCard
								imageSrc={card.imageSrc}
								title={card.title}
								text={card.text}
							/>
						</div>
					))}
				</div>
			
				<Link to="/organisation1" class="btn btn-success hq-btn w-auto">
					Back»»»
				</Link>
			</div>
		</div>
	);
};
