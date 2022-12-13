import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { CartaDetalle } from "../component/cards";

import "../../styles/home.css";

export const PersonajeDetalle = (props) => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
	let personaje = store.personajes[id];
	let nombre = personaje.name;
	let direccionDetalles = personaje.url;
	console.log(direccionDetalles);
	
	return (
		<div className="container">	
			<CartaDetalle personaje={nombre} />
		</div>
	)
};