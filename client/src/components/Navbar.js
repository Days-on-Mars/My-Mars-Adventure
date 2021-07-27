import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "./Navbar.css";

export default function Navbar(props) {
	const handleLogout = () => {
		// this logs the user out on the server
		logout().then(() => {
			// we need to also remove the user from the state in App.js
			props.setUser(null);
		});
	};

	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/" className="navLinks">
						Home
					</Link>
				</li>
				{props.user ? (
					<>
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
							<Link
								to="/log-out"
								onClick={() => handleLogout()}
								className="navLinks"
							>
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/sign-up" className="navLinks">
								Signup
							</Link>
						</li>
						<li>
							<Link to="/log-in" className="navLinks">
								Login
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
