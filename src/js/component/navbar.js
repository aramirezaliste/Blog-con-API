import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://www.kindpng.com/picc/m/290-2906150_pokeball-pixel-art-png-transparent-png.png" alt="" width="36" height="30" className="" />
				</Link>
				<div className="nav-item dropdown me-2">
					<button type="button" className="dropdown-toggle btn btn-danger" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos 
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
						<li><a className="dropdown-item" href="#">Personaje</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
