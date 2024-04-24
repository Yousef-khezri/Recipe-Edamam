import React from 'react'
//import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function PopUp({ show, handleClose, data }) {

    // console.log("popup data :" + JSON.stringify(data));

	return !show ? null : (
		<div
			className="popupMenu show"
			style={{ display: "block", position: "absolute" }}
		>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Recipe</Modal.Title>
				</Modal.Header>

				<Modal.Body className="modal_Body">
					<img src={data.recipe.image} />
					<div className="infoBox">
						<h1>{data.recipe.label}</h1>
						<label>
							See full recipe on:
							<a href={data.recipe.url}>Serious Eats</a>
						</label>
					</div>
				</Modal.Body>
                <hr/>
				<Modal.Footer>
					<div className="box_Info_Footer">
						<div>
							<h2>
								{
									data.recipe.ingredients.length
								} Ingredients
							</h2>
							<hr />
							<h2>Nutrition</h2>
							{parseFloat(data.recipe.calories.toFixed(0))}
							<h6>CALORIES</h6>
							<hr />
							<div>
								{data.recipe.digest.map((item, index) => (
									<div className="info_item" key={index}>
										<span>{item.label} </span>
										<span>
											{parseFloat(item.total.toFixed(0))}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
					<Button
						className="btn_close"
						variant="secondary"
						style={{ backgroundColor: "red" }}
						onClick={handleClose}
                        margin="20px"
					>
						X
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}
