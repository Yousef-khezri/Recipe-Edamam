import './Main.css';
import PopUp from './PopUp';
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main({ data }) {
	const [show, setShow] = useState(false);
	const [selectedCardData, setSelectedCardData] = useState(null);

	const handleClose = () => {
        setShow(false);
	};

	const showMenuPopUp = () => {
		setShow(true);
	};

	const handleCardClick = (index) => {
		setSelectedCardData(data[index]);
		setShow(true);
		console.log("index : " + index);
		console.log(data[index]);
	};


    const create_Card = (item, index) => {
		return (
			<Card
				key={index}
				onClick={() => handleCardClick(index)}
				style={{ width: "18rem", cursor: "pointer" }}
			>
				<Card.Img variant="top" src={item.recipe.image} />
				<Card.Body>
					<Card.Title>{item.recipe.label}</Card.Title>
					<Card.Text
						style={{
							borderTop: "2px solid black",
							borderBottom: "2px solid black",
						}}
					>
						{parseFloat(item.recipe.calories.toFixed(0))} CALORIES6
						| {item.recipe.ingredients.length} INGREDIENTS
					</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	console.log(data);

    return (
		<div className="main">
			{data.length === 0 ? (
				"Loading..."
			) : (
				<div className="card_Box">
					{data.map((item, index) => create_Card(item, index))}
				</div>
			)}

			{show ? (
				<PopUp
					show={show}
					handleClose={handleClose}
					data={selectedCardData}
				/>
			) : null}

			<Button onClick={showMenuPopUp}>Show PopUp</Button>
		</div>
	);
}
