import React, { Component } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/auth";
// import "./LoginSignup.css";
export default class Signup extends Component {
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
		signup(username, password).then((data) => {
			console.log("checking returned data and message:", data);
			if (data.message) {
				this.setState({
					message: data.message,
					username: "",
					password: "",
				});
			} else {
				this.props.setUser(data);
				this.props.history.push("/mars-journal");
			}
		});
	};
	render() {
		return (
			<div
			 style={{ 
                        backgroundImage: "url(/sapphire-dunes.png)",
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100vw'
                        }} 
			className="SignupContainer">
				{/* <h2>Martian, sign up today!</h2> */}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
						id="username"
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						id="password"
					/>
					{this.state.message && (
						<alert variant="danger">{this.state.message}</alert>
					)}
					<button type="submit" className="btn">
						Sign up
					</button>
				</form>
			</div>
		);
	}
}