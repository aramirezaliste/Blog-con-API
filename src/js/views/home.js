import React from "react";

import "../../styles/home.css";
import { Personajes } from "./personajes";
import { Planetas } from "./planetas";

export const Home = () => (
	<div className="container-fluid ">
		<div className="row m-0 p-0 g-0">
			<Personajes/>
		</div>
		<div className="row">
			<Planetas/>
		</div>
	
	</div>
);
