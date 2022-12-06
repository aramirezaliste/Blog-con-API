import React from "react";

import "../../styles/home.css";
import {CartaIndividual} from "../component/cartaIndividual.js";


export const Personajes = (props) => (
	<div className="container">
		<div className="row align-items-start">
			<h1>Personajes</h1>
            <CartaIndividual titulo="Personaje" url="/personajedetalle"/>
            <CartaIndividual titulo="Personaje" url="/personajedetalle"/>
            <CartaIndividual titulo="Personaje" url="/personajedetalle"/>
            

		</div>
	</div>
);
