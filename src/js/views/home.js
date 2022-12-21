import React from "react";

import "../../styles/home.css";
import { CartaInicio } from "../component/cards";


export const Home = () => (
	<div className="container-fluid ">
		<div className="row">
			<CartaInicio titulo="Pokemones" ruta="./personajes"/>
		</div>
		<div className="row">
			<CartaInicio titulo="Areas" ruta="./planetas"/>
		</div>
	
	</div>
);
