import "./App.css";
// import axios from 'axios';
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { render } from '@testing-library/react';
import MarsPage from "./components/MarsPage";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

class App extends React.Component {
	state = {
		user: this.props.user,
	};

	setUser = (user) => {
		this.setState({
			user: user,
		});
	};

	render() {
		return (
			<>
				<Navbar user={this.state.user} setUser={this.setUser} />
				{/* <Login /> */}
				<Switch>
					{/*<Route exact path ={'/beers'} render={() => {
              return <beers beerData={this.state.beers}/>
            }} /> */}
 nav-login-signup
					<Route
						exact
						path="/sign-up"
						render={(props) => <Signup setUser={this.setUser} {...props} />}
					/>
					<Route
						exact
						path="/log-in"
						render={(props) => <Login setUser={this.setUser} {...props} />}
					/>
					<Route
						exact
						path={"/mars-journal"}
						render={(props) => {
							if (this.state.user) return <MarsPage {...props} />;
							else return <Redirect to="/" />;
						}}
					/>
					<Route exact path={"/"} component={HomePage} />
					<Route exact path={"/dashboard"} component={Dashboard} />

					{/*<Route exact path ={'/dashboard'} render={props => {
						<Route
							exact
							path="/sign-up"
							render={(props) => <Signup setUser={this.setUser} {...props} />}
						/>
						<Route
							exact
							path="/log-in"
							render={(props) => <Login setUser={this.setUser} {...props} />}
						/>
						<Route
							exact
							path={"/mars-journal"} 
							render={(props) => {
								if (this.state.user) return <MarsPage user = {this.state.user} {...props} />;
								else return <Redirect to="/" />;
							}}
						/>
						<Route exact path={"/"} component={HomePage} />
						<Route exact path={"/dashboard"} component={Dashboard} />
						{/*<Route exact path ={'/dashboard'} render={props => {
            if (this.state.user) return <Dashboard {...props}/>
            else return <Redirect to='/' />
          }}
          />*/}
				</Switch>
			</>
		);
	}
}
export default App;
