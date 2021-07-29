import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: "url(/background7.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100vw",
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					margin: 0,
					padding: 0,
				}}
			>
				<h1 className="title">Days on Mars</h1>

				<div className="text">
					<b>Martian: </b>
					<i>/ˈmɑːʃ(ə)n/</i>
					<p>relating to the planet Mars or its supposed inhabitants.</p>

					<h2>About</h2>

					<p>
						{" "}
						Welcome Martian, we know that belonging to the first of the red
						plant's dwellers, you've embarked upon an incredible journey.
						Getting to know this brilliant terrain is spectacular, yet
						distracting. It can be challenging to stay on track with so many
						craters to explore, and canyons to trek. Days on Mars would like to
						keep you on task! We invite you to dust off that volcanic residue
						and start planning your days on Mars. With our Days on Mars task
						manager, you can list your most pressing to-do’s, as well as edit
						and update their status. Our martian users are also encouraged to
						write in their daily journal with our diary template. Our solar
						flare-proof vault will house our server that stores your diary
						entries. Your archive will only be accessed 150 years after your
						death, and we will share your daily musings in our Days on Mars
						museum.{" "}
					</p>

					<p>
						Become a user and begin to archive your marvelous days on Mars
						through our daily journal template. you can keep track of your
						martian to-do's through our task manager.{" "}
					</p>

					<Link to="/Sign-up" class="homeLinks">
						<p>Sign up here</p>
					</Link>

					<p>Login to continue your Days on Mars experience.</p>

					<Link to="/Log-in" class="homeLinks">
						<p>Login here</p>
					</Link>
				</div>
			</div>
		);
	}
}
