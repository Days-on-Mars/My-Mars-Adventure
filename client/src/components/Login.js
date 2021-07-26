import React, { Component } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
import { login } from "../services/auth";
import "./LoginSignup.css";

export default class Login extends Component {
	state = {
		username: "",
		password: "",
		message: "",
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { username, password } = this.state;

		login(username, password).then((data) => {
			if (data.message) {
				this.setState({
					message: data.message,
					username: "",
					password: "",
				});
			} else {
				// successfully logged in
				// update the state for the parent component
				this.props.setUser(data);
				this.props.history.push("/mars-journal");
			}
		});
	};

	render() {
		return (
			<div className="LoginContainer">
				<h2>Welcome back</h2>

				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
							id="username"
						/>
					</div>
					<div>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							id="password"
						/>
					</div>
					{this.state.message && (
						<alert variant="danger">{this.state.message}</alert>
					)}
					<button type="submit" className="btn">
						Login
					</button>
				</form>
			</div>
		);
	}
}
