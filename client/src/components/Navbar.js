import React from "react";
import { Link } from "react-router-dom";
// import DynamicNavbar from "dynamic-react-navlinks";
// import { logout } from "../services/auth";
import "./Navbar.css";

export default function Navbar(props) {
	// const handleLogout = () => {
	// 	// this logs the user out on the server
	// 	logout().then(() => {
	// 		// we need to also remove the user from the state in App.js
	// 		props.setUser(null);
	// 	});
	// };

	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/" className="navLinks">
						Home
					</Link>
				</li>

				<li>
					<Link to="/mars-journal" className="navLinks">
						Mars Journal
					</Link>
				</li>

				<li>
					<Link to="/dashboard" className="navLinks">
						Dashboard
					</Link>
				</li>

				<li>
					<Link to="/log-out" className="navLinks">
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
}
