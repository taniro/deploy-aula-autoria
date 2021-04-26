import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark navbar-expand-sm">
				<Link to="/" className="navbar-brand">
					TADS
				</Link>
				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#webmenu"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="webmenu">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/noticias" className="nav-link">
								Noticias
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/contato" className="nav-link">
								Contato
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
