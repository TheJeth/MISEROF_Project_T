import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/headquater.css"
import { Link } from "react-router-dom";
//import ReactNative from 'react-native';
import { ImageCard } from "../component/ImageCard";




export const Headquater = () => {
	const { store, actions } = useContext(Context);

	const cards = [
		{
			imageSrc: "https://i.ibb.co/1QNwz6G/Sister-Miserof.jpg",
			title: "Card 1",
			text: "Some quick example text to build on the card title.",
		},
		{
			imageSrc: "https://i.ibb.co/WHLpJVc/Mrie-Florence-Joassaint.jpg",
			title: "Card 2",
			text: "Some quick example text to build on the card title.",
		},
		{
			imageSrc: "https://i.ibb.co/bHytsWm/Joceline.jpg",
			title: "Card 3",
			text: "Some quick example text to build on the card title.",
		},
	];

	return (
		<div className="board">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

			<div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-sm-4 mb-4" key={index}>
							<ImageCard
								imageSrc={card.imageSrc}
								title={card.title}
								text={card.text}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="row">

					<Link to="/" class="btn btn-primary">
						Back»»»
					</Link>
				
			</div>

		</div>

	);
};
