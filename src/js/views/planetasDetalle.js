import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { CartaDetalle } from "../component/cards";

export const PlanetasDetalle = (props) => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
	let areas = store.areas[id];
	let nombre = areas.name;
	let direccionDetalles = areas.url;
	console.log(direccionDetalles);
	
	
	return (
		<div className="container">	
			<CartaDetalle personaje={nombre} detalle={direccionDetalles}/>
		</div>
	)
	};