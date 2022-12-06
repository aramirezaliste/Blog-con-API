import React from "react";

import "../../styles/home.css";

export const PersonajeDetalle = (props) => (
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div class="card mb-3" style={{width: "60rem"}}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src="https://www.pngfind.com/pngs/m/665-6650179_pikachu-sleep-asriel-dreemurr-pixel-art-hd-png.png" class="img-fluid rounded-start" alt="..." style={{}}/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">Personaje Detallado</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);