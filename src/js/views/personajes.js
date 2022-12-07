import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import {CartaIndividual} from "../component/cards.js";


export const Personajes = (props) => {
	
	const {store, actions} = useContext(Context);

	return (
	<div className="container">
		<div className="row">
			<h1>Personajes</h1>
            
			{store.personajes.map((objeto,index )=>{
				return <CartaIndividual titulo={objeto.name} url={"/personajedetalle/" + index} valor={index +1}/>
			})}

		</div>
	</div>
)};
