import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid mx-3">
				<Link to="/">
				<a className="navbar-brand">
					<img src="https://www.kindpng.com/picc/m/290-2906150_pokeball-pixel-art-png-transparent-png.png" alt="" width="36" height="30" class="d-inline-block align-text-top" />
				</a>
				</Link>
				<div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos
							</a>
							<ul className="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="#">Personaje</a></li>
								
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
