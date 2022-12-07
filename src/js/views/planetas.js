import React from "react";


import "../../styles/home.css";
import {CartaIndividual} from "../component/cards";

export const Planetas = (props) => (
	<div className="container">
		<div className="row">
			<h1>Planetas</h1>
            <CartaIndividual titulo="Planeta" url="/planetasdetalle"/>
            <CartaIndividual titulo="Planeta" url="/planetasdetalle"/>
            <CartaIndividual titulo="Planeta" url="/planetasdetalle"/>
            
		</div>
	</div>
);