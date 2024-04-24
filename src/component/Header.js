import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Button, Image } from "react-bootstrap";

function Header({ updateData }) {
	const [inputSearch, setInputSearch] = useState("");

	const handleInputChange = (event) => {
		setInputSearch(event.target.value);
	};

	const btnClicked = () => {
		const url = `https://api.edamam.com/search?q=${inputSearch}&app_id=de3984f2&app_key=8276e966b3d1343751ae8adf8f74006b`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				updateData(json.hits);
				console.log(json.hits);
			});
	};

	return (
		<Container
			style={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				marginTop: "10px",
				width: "100%",
			}}
		>
			<h1>Edamam</h1>
			<InputGroup
				className="mb-3"
				style={{
					marginTop: "10px",
					width: "50%",
				}}
			>
				<Form.Control
					type="text"
					id="input-Search"
					placeholder="Find the best recipes from across the web..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					value={inputSearch}
					onChange={handleInputChange}
					style={{
						width: "30%",
					}}
				/>
				<Button variant="primary" onClick={btnClicked}>
					<Image src="./images/search.png" roundedCircle width={20} />
				</Button>
			</InputGroup>
			<h1>{inputSearch}</h1>
		</Container>
	);
}

export default Header;
