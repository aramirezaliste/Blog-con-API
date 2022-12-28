import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { CartaDetalle2 } from "../component/cards";

export const PlanetasDetalle = (props) => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
	let areas = store.areas[id];
	let nombreArea = areas.name;
	let direccionDetallesAreas = areas.url;
	console.log(direccionDetallesAreas);
	
	
	return (
		<div className="container">	
			<CartaDetalle2 planetas={nombreArea} detalle={direccionDetallesAreas}/>
		</div>
	)
	};