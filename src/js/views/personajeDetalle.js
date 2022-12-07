import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { CartaDetalle } from "../component/cards";

import "../../styles/home.css";

export const PersonajeDetalle = (props) => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
	{console.log(store.personajes[1].name)}
	
	return (
		<div className="container">	
			<CartaDetalle personaje={id}/>
		</div>
	)
};