import React, {useContext} from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import {CartaIndividual2} from "../component/cards";

export const Planetas = (props) => {
	const {store, actions} = useContext(Context);

	return (<div className="container">
		<div className="row">
			<h1>Areas</h1>
            {store.areas.map((objeto,index )=>{
				let indice = index + 1;
				return <CartaIndividual2 key={index} titulo={objeto.name} url={"/planetasdetalle/" + index} valor={indice}/>
			})}
            
		</div>
	</div>)
};