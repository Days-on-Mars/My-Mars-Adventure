<<<<<<< HEAD
import './App.css';
import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import MarsPage from './components/MarsPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
        {/*<Route exact path ={'/beers'} render={() => {
              return <beers beerData={this.state.beers}/>
            }} /> */}
          <Route exact path ={'/'} component={HomePage} /> 
          <Route exact path ={'/dashboard'} component={Dashboard} /> 
         <Route exact path ={'/Mars-Journal'} component={MarsPage} /> 
        </Switch>
        </BrowserRouter>
      </>
    );
  }
  }
  export default App;
=======
import "./App.css";
// import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { render } from "@testing-library/react";
import MarsPage from "./components/MarsPage";
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
				<Navbar />
				<Login />
				<BrowserRouter>
					<Switch>
						{/*<Route exact path ={'/beers'} render={() => {
              return <beers beerData={this.state.beers}/>
            }} /> */}
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
						{/*<Route exact path ={'/dashboard'} render={props => {
            if (this.state.user) return <Dashboard {...props}/>
            else return <Redirect to='/' />
          }}
          />*/}
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}
export default App;
>>>>>>> 89d1e47d64b2bd187cb0072afc94625f7d560b4c
